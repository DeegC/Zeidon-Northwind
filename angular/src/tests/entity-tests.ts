import {Order} from "../app/lod/Order";
import { Observable } from 'rxjs/Observable';
import {Product} from "../app/lod/Product";

describe('Attributes', function() {
    it( "should create attributes", function() {
        let newOrder = new Order();
        let now = new Date();
        newOrder.Order.create( { OrderDate: now });
        expect( newOrder.Order$.OrderDate.getTime()).toBe( now.getTime() );
        expect( newOrder.Order$.updated).toBeTruthy();
        expect( newOrder.Order$.deleted).toBeFalsy();
        newOrder.Order$.ShipName = "John Smith";
        // newOrder.Order$.OrderDetail.create( { Quantity: 10 }, { position: Position.Last } );
    });
});
