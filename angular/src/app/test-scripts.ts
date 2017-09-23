import { ZeidonConfiguration, Position, ActivateLockError } from './zeidon';
import { ZeidonRestValues, RestActivator, RestCommitter } from './zeidon-rest-client';
import {Product} from "./lod/Product";
import {Order} from "./lod/Order";
import { Observable } from 'rxjs/Observable';
import {RxHttpRequest} from 'rx-http-request';

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

let newOrder = new Order();
newOrder.Order.create();
newOrder.Order$.ShipName = "John Smith";
newOrder.Order$.OrderDetail.create( { Quantity: 10 }, { position: Position.Last } );
newOrder.logOi();

Product.activate( { ProductId: 77 } ).subscribe(
    product => {
        console.log( "Got product" );
        newOrder.Order$.OrderDetail$.Product.include( product.Product$ );
        newOrder.logOi( true );
    },
    error => {
        console.log( error );
        if(error instanceof ActivateLockError){
            console.log(`LOD ${error.lodName} is locked`);
         }
    } );

