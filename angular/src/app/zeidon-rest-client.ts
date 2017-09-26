import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';
import {RxHttpRequest} from 'rx-http-request';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

import { ObjectInstance } from './zeidon';
import { ZeidonConfiguration } from './zeidon';
import { Committer, CommitOptions, ActivateLockError } from './zeidon';

/**
 * Interface for wrapping different HTTP clients into a form that can be used by Zeidon.
 * Response is expected to have the following shape:
 * {
 *      body: "<body returned by HTTP call>"
 * }
 */
export interface HttpClient {
    get( url: string ) : Observable<Response>;
    post( url: string, body: string, headers: Object ) : Observable<Response>;
}

export class RestActivator {
    constructor( private values: ZeidonRestValues, private http: HttpClient ) {}

    activateOi<T extends ObjectInstance>( oi: T, qual?: any ): Observable<T> {
        if ( qual == undefined )
            qual = { rootOnly: true };

        let lodName = oi.getLodDef().name;

        let mapResponse = ( response ) : T => {
            if ( response.statusCode === 423 )
                throw new ActivateLockError( lodName );

            return oi.createFromJson( response.body, { incrementalsSpecified: true } ) as T;
        }

        let url = `${this.values.restUrl}/${lodName}?qual=${encodeURIComponent(JSON.stringify(qual))}`;
        return this.http.get( url )
                .map( response =>  mapResponse( response ) );
    }
}

/**
 * These are the values for configuring Zeidon to use a REST server for activate/commits.
 */
export class ZeidonRestValues {
    restUrl: string;
}

export class RestCommitter implements Committer {
    constructor( private values: ZeidonRestValues, private http: HttpClient ) {}

    commitOi( oi: ObjectInstance, options?: CommitOptions ): Observable<ObjectInstance> {
        let lodName = oi.getLodDef().name;
        let body = JSON.stringify( oi.toZeidonMeta() );
        let url = `${this.values.restUrl}/${lodName}`;

        return this.http.post( url, body, { 'Content-Type': 'application/json' })
            .map(response => this.parseCommitResponse( oi, response ) );
    }

    dropOi( oi: ObjectInstance, options?: CommitOptions ) {
        let lodName = oi.getLodDef().name;
        if ( oi.root.length != 1 )
            throw "The only currently supported option for dropOi is a single root OI."

        let root = oi.root[0];
        let keyDef = root.keyAttributeDef;
        let qual = { };
        qual[ keyDef.name ] = root.getAttribute( keyDef.name )
        let body = "qual=" + JSON.stringify( qual );
        let url = `${this.values.restUrl}/${lodName}/dropLock`;

        return this.http.post( url, body, { 'Content-Type': 'application/x-www-form-urlencoded' } )
            .subscribe( response => console.log( "DropOi response = " + response.body ) );
    }

    parseCommitResponse( oi: ObjectInstance, response ): ObjectInstance {
        if ( response.body === "{}" )
            return oi.createFromJson( undefined );

        return oi.createFromJson( response.body, { incrementalsSpecified: true} );
    }
}

/**
 * A simple wrapper around the standard node HTTP module that returns observables.
 */
export class RxHttpWrapper {
    get( url: string ) : Observable<Response> {
        return RxHttpRequest.get(url)
            .map( response => {
                return {
                            "body" : response.body,
                            "statusCode": response.response.statusCode
                        };
            } );
    }

    post( url: string, body: string, headers: Object ) : Observable<any> {
        const options = {
            body: body
        };

        return RxHttpRequest.post(url, options)
                            .map( response => {
                                return {
                                    "body" : response.body,
                                    "statusCode": response.response.statusCode
                                    };
                            } );

    }
}

