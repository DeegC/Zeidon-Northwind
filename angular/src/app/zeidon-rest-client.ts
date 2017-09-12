import { Observable } from 'rxjs/Observable';

// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

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
import { Committer, CommitOptions } from './zeidon';

export interface HttpClient {
    get( url: string ) : Observable<Response>;
    post( url: string, body: string, headers: Object ) : Observable<Response>;
}

export class RestActivator {
    constructor( private values: ZeidonRestValues, private http: HttpClient ) {}

    activateOi<T extends ObjectInstance>( oi: T, qual?: any ): Observable<T> {
        if ( qual == undefined )
            qual = { rootOnly: true };

        function fresponse( response ): T {
            return oi.createFromJson( response.body, { incrementalsSpecified: true } ) as T;
        }

        let lodName = oi.getLodDef().name;
        let url = `${this.values.restUrl}/${lodName}?qual=${encodeURIComponent(JSON.stringify(qual))}`;
        return this.http.get( url )
                .map( fresponse );
                // .map( response => oi.createFromJson( response.body, { incrementalsSpecified: true } ) as T );
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
