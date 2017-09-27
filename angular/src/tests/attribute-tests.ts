import { InvalidAttributeError } from './../app/zeidon';
import {Order} from "../app/lod/Order";
import { Observable } from 'rxjs/Observable';
import {Product} from "../app/lod/Product";
import {Position} from "../app/zeidon";

describe('Attributes', function() {
    it( "should create attributes", function() {
        let newOrder = new Order();
        let now = new Date();
        newOrder.Order.create( { OrderDate: now });
        expect( newOrder.Order$.OrderDate.getTime()).toBe( now.getTime() );
        expect( newOrder.Order$.isAttributeUpdated('OrderDate')).toBeTruthy();

        expect( newOrder.Order$.OrderId).toBeFalsy();
        expect( newOrder.Order$.getAttribute( 'OrderId' ) ).toBeFalsy();
        expect( newOrder.Order$.isAttributeUpdated('OrderId')).toBeFalsy();

        newOrder.Order$.ShipName = "John Smith";
        expect( newOrder.Order$.ShipName).toBe( "John Smith" );

        newOrder.Order$.OrderDetail.create( { Quantity: 10 }, { position: Position.Last } );
        expect( newOrder.Order$.OrderDetail$.Quantity).toBe(10)
    });

    it( "should verify attribute values", function() {
        let newOrder = new Order();
        let now = new Date();
        newOrder.Order.create();
        expect( newOrder.Order$.OrderId).toBeFalsy();

        expect( () => { newOrder.Order$.OrderId = "10" })
            .toThrow( "Attribute Order.OrderId is read only" );

        expect( () => { newOrder.Order$.setAttribute( "OrderId", "10" ) })
            .toThrow( "Attribute Order.OrderId is read only" );

        expect( () => { newOrder.Order$.setAttribute( "OrderIdx", "10" ) })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );
    });

    it( "should throw invalid attribute errors", function() {
        let newOrder = new Order();
        newOrder.Order.create();

        expect( () => { newOrder.Order$.isAttributeUpdated('OrderIdx') })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );

        expect( () => { newOrder.Order$.getAttribute('OrderIdx') })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );

    });
});
