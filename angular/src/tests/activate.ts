import { ZeidonConfiguration, Position, ActivateLockError } from '../app/zeidon';
import { ZeidonRestValues, RestActivator, RestCommitter } from '../app/zeidon-rest-client';
import {Order} from "Order";
import { Observable } from 'rxjs/Observable';
import {RxHttpRequest} from 'rx-http-request';
import {Product} from "../app/lod/Product";

const REST_VALUES: ZeidonRestValues = {
    restUrl: `http://localhost:8080/northwind`
  };

class RxHttpWrapper {

    get( url: string ) : Observable<Response> {
        return RxHttpRequest.get(url)
            .map( response => {
                console.log("INSIDE MAP" );
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

let zeidonConfig = new ZeidonConfiguration(
    new RestActivator( REST_VALUES, new RxHttpWrapper() ),
    new RestCommitter( REST_VALUES, new RxHttpWrapper() )
);


describe('activate', function() {
    it( "should activate root", async function() {
        return Product.activate( { ProductId: 77 } ).toPromise().then(
            product => {
                console.log( "Got product" );
                product.logOi();
                let a = false;
                expect(a).toBe(true);
            });
    });
});