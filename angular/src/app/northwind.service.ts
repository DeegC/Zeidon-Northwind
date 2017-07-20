import {Injectable} from '@angular/core';
import {Observable}     from 'rxjs/Observable';
import {Pagination} from './zeidon';
import { Http, Headers, RequestOptions, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class NorthwindService {
    constructor (private http: Http) {}

    private _northwindUrl = 'http://localhost:8080/northwind';  // URL to web api

    getOrders( pagination: Pagination, searchText: string = null ) {
        console.log( "trying to get orders from " + this.http );

        let searchParam = "";
        if ( searchText != null )
            searchParam = "&product=" + searchText;

        return this.http.get(this._northwindUrl + '/Order' + pagination.getQueryParam() + searchParam )
                    .toPromise()
                    .then(res => {
                        let json = <any> res.json();
                        pagination.setFromResuts(json);
                        return json;
                    } )
                    .catch(this.handleError);
    }

    getOrder(id: number) {
        console.log( "trying to get orders from " + this.http );

        return this.http.get(this._northwindUrl + '/Order/' + id  )
                    .toPromise()
                    .then(res => <any> res.json().Order[0] )
                    .catch(this.handleError);
    }

    getShippers() {
        console.log( "trying to get orders from " + this.http );

        return this.http.get(this._northwindUrl + '/Shipper' )
                    .toPromise()
                    .then(res => <any[]> res.json().Shipper )
                    .catch(this.handleError);
    }

    getShipper(id: number) {
        console.log( "trying to get shipper from " + this.http );

        return this.http.get(this._northwindUrl + '/Shipper/' + id  )
                    .toPromise()
                    .then(res => <any> res.json().Shipper[0] )
                    .catch(this.handleError);
    }

    addShipper( name: string ): Promise<any> {
        let shipper = { "CompanyName": name };
        return this.commitLod( shipper, 'Shipper' );
    }

    commitShipper( shipper: any ): Promise<any> {
        return this.commitLod( shipper, "Shipper" );
    }

    getProducts( pagination: Pagination, searchText: string = null ) {
        console.log( "trying to get orders from " + this.http );
        let searchParam = "";
        if ( searchText != null )
            searchParam = "&name=" + searchText;

        return this.http.get(this._northwindUrl + '/Product' + pagination.getQueryParam() + searchParam )
                    .toPromise()
                    .then(res => {
                        let json = <any> res.json();
                        pagination.setFromResuts(json);
                        return json;
                    } )
                    .catch(this.handleError);
    }

    getProduct(id: number) {
        console.log( "trying to get product from " + this.http );

        return this.http.get(this._northwindUrl + '/Product/' + id  )
                    .toPromise()
                    .then(res => <any> res.json().Product[0] )
                    .catch(this.handleError);
    }

    addProduct( name: string ): Promise<any> {
        let product = { "CompanyName": name };
        return this.commitLod( product, 'Product' );
    }

    commitProduct( product: any ): Promise<any> {
        return this.commitLod( product, "Product" );
    }

    private commitLod( lod: any, lodName: string ): Promise<any> {
        let payload = {}
        payload[lodName] = [ lod ];
        let body = JSON.stringify( payload );

        //let headers = new Headers({ 'Content-Type': 'application/json' });
        let headers = new Headers( { 'Content-Type': 'text' });
        let options = new RequestOptions( { headers: headers });

        return this.http.post( this._northwindUrl + '/' + lodName, body, { headers: headers } )
                    .toPromise()
                    .then( res => <any>res.json().data )
                    .catch( this.handleError )
    }

    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
}
