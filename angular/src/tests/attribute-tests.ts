import { InvalidAttributeError, AttributeValueError } from './../app/zeidon';
import {Order} from "../app/lod/Order";
import { Observable } from 'rxjs/Observable';
import {Product} from "../app/lod/Product";
import {Position, ZeidonError} from "../app/zeidon";

describe('Attributes', function() {
    it( "should create attributes", () => {
        let newOrder = new Order();
        let now = new Date();
        newOrder.Order.create( { OrderDate: now });
        expect( newOrder.Order$.OrderDate.getTime()).toBe( now.getTime() );
        expect( newOrder.Order$.isAttributeUpdated('OrderDate')).toBeTruthy();
        expect( Object.prototype.toString.call( newOrder.Order$.OrderDate ) ).toBe( '[object Date]' );
        expect( Object.prototype.toString.call( newOrder.Order$.OrderId ) ).not.toBe( '[object Date]' );

        expect( newOrder.Order$.OrderId).toBeFalsy();
        expect( newOrder.Order$.getAttribute( 'OrderId' ) ).toBeFalsy();
        expect( newOrder.Order$.isAttributeUpdated('OrderId')).toBeFalsy();

        newOrder.Order$.ShipName = "John Smith";
        expect( newOrder.Order$.ShipName).toBe( "John Smith" );

        newOrder.Order$.OrderDetail.create( { Quantity: 10 }, { position: Position.Last } );
        expect( newOrder.Order$.OrderDetail$.Quantity).toBe(10);

        newOrder.Order$.OrderDetail.create( { Quantity: "20" } );
        expect( newOrder.Order$.OrderDetail$.Quantity).toBe(20);
    });

    it( "should verify attribute values", () => {
        let newOrder = new Order();
        let now = new Date();
        newOrder.Order.create();
        expect( newOrder.Order$.OrderId).toBeFalsy();

        expect( () => { newOrder.Order$.setAttribute( 'ShippedDate', "xxx" ) })
            .toThrow( new AttributeValueError( "Invalid date/time value: xxx", { name: "ShippedDate" } ) );

        expect( () => { newOrder.Order$.OrderId = "10" })
            .toThrow( new ZeidonError( "Attribute Order.OrderId is read only" ) );

        expect( () => { newOrder.Order$.setAttribute( "OrderId", "10" ) })
            .toThrow( new ZeidonError( "Attribute Order.OrderId is read only" ) );

        expect( () => { newOrder.Order$.OrderDetail.create( { Quantity: "10x" }, { position: Position.Last } ) } )
            .toThrow( new AttributeValueError( "Invalid integer value: 10x", { name: "Quantity" } ) );

        newOrder.Order$.OrderDetail.create();
        expect( () => { newOrder.Order$.OrderDetail$.Quantity = 10.10 } )
            .toThrow( new AttributeValueError( "Invalid integer value: 10.1", { name: "Quantity" } ) );
    });

    it( "should update attributes via batch update", () => {
        let newOrder = new Order();
        newOrder.Order.create();
        let now = new Date();
        newOrder.Order$.update( {
            OrderDate: now,
            ShipName: "John Doe",
            ShipAddress: "1 Main St"
        } );
        expect( newOrder.Order$.ShipName ).toBe( "John Doe" );
    } );

    it( "should throw invalid attribute errors", () => {
        let newOrder = new Order();
        newOrder.Order.create();

        expect( () => { newOrder.Order$.isAttributeUpdated('OrderIdx') })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );

        expect( () => { newOrder.Order$.getAttribute('OrderIdx') })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );

        expect( () => { newOrder.Order$.setAttribute( "OrderIdx", "10" ) })
            .toThrow( new InvalidAttributeError( "OrderIdx", "Order" ) );

        newOrder.readOnly = true;
        expect( () => { newOrder.Order$.ShipName = "John Smith" } )
            .toThrow( new ZeidonError( "This OI is read-only." ) );
        });
});
