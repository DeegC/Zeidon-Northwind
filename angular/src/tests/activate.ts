import { ZeidonConfiguration, Position, ActivateLockError } from '../app/zeidon';
import { ZeidonRestValues, RestActivator, RestCommitter, RxHttpWrapper } from '../app/zeidon-rest-client';
import { Order } from "../app/lod/Order";
import { Observable } from 'rxjs/Observable';
import { Product } from "../app/lod/Product";

const REST_VALUES: ZeidonRestValues = {
    restUrl: `http://localhost:8080/northwind`
};

let zeidonConfig = new ZeidonConfiguration(
    new RestActivator( REST_VALUES, new RxHttpWrapper() ),
    new RestCommitter( REST_VALUES, new RxHttpWrapper() )
);

var rxit = require( 'jasmine-rx' ).rxit;
var TestableObservable = require( 'jasmine-rx' ).TestableObservable;

describe( 'activate', function () {
    rxit( "should activate single Product", function () {
        return Product.activate( { ProductId: 77 } ).do( function ( product ) {
            expect( product.Product$.ProductId ).toBe( "77" );
            expect( product.Product.length ).toBe( 1 );
            expect( product.Product$.Supplier$.SupplierId ).toBe( "12" );
        } );
    } );
} );
