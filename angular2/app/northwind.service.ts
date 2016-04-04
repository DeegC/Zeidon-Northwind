import {ORDERS} from './mock-orders';
import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import {Observable}     from 'rxjs/Observable';
import {Headers, RequestOptions} from 'angular2/http';
import {Pagination} from './pagination';

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
                    .map(res => <any> res.json() )
                    .do( json => {
                        pagination.setFromResuts(json);
                     })
                    .catch(this.handleError);
    }
    
    getOrder(id: number) {
        console.log( "trying to get orders from " + this.http );
        
        return this.http.get(this._northwindUrl + '/Order/' + id  )
                    .map(res => <any> res.json().Order[0] )
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
    }
    
    getShippers() {
        console.log( "trying to get orders from " + this.http );
        
        return this.http.get(this._northwindUrl + '/Shipper' )
                    .map(res => <any[]> res.json().Shipper )
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
    }
    
    getShipper(id: number) {
        console.log( "trying to get shipper from " + this.http );
        
        return this.http.get(this._northwindUrl + '/Shipper/' + id  )
                    .map(res => <any> res.json().Shipper[0] )
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
    }
 
    addShipper( name: string ): Observable<any> {
        let shipper = { "CompanyName": name };
        return this.commitLod( shipper, 'Shipper' );
    }
    
    commitShipper( shipper: any ): Observable<any> {
        return this.commitLod( shipper, "Shipper" );
    }
    
    getProducts( pagination: Pagination, searchText: string = null ) {
        console.log( "trying to get orders from " + this.http );
        let searchParam = "";
        if ( searchText != null )
            searchParam = "&name=" + searchText;
        
        return this.http.get(this._northwindUrl + '/Product' + pagination.getQueryParam() + searchParam )
                    .map(res => <any> res.json() )
                    .do( json => {
                        pagination.setFromResuts(json);
                     })
                    .catch(this.handleError);
    }
    
    getProduct(id: number) {
        console.log( "trying to get product from " + this.http );
        
        return this.http.get(this._northwindUrl + '/Product/' + id  )
                    .map(res => <any> res.json().Product[0] )
                    .do(data => console.log(data)) // eyeball results in the console
                    .catch(this.handleError);
    }
 
    addProduct( name: string ): Observable<any> {
        let product = { "CompanyName": name };
        return this.commitLod( product, 'Product' );
    }
    
    commitProduct( product: any ): Observable<any> {
        return this.commitLod( product, "Product" );
    }
    
    private commitLod( lod: any, lodName: string ): Observable<any> {
        let payload = {}
        payload[lodName] = [ lod ];
        let body = JSON.stringify( payload );
        
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        let headers = new Headers( { 'Content-Type': 'text' });
        let options = new RequestOptions( { headers: headers });

        return this.http.post( this._northwindUrl + '/' + lodName, body, options )
            .map( res => <any>res.json().data )
            .catch( this.handleError )
    }
    
    private handleError(error: Response) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }    
}
