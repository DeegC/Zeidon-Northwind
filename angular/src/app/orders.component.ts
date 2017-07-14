import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {Pagination} from './pagination';
import {Order} from './Order';
import {PaginationComponent} from './pagination.component';

@Component({
    selector: 'orders',
    templateUrl:'app/orders.component.html',
    styleUrls: ['app/orders.component.css']
})
export class OrdersComponent implements OnInit {

    errorMessage: string;
    orders: Order;
    searchText: string;
    selectedOrder: Order;
    pagination: Pagination = new Pagination( this );

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) {
    }

    getOrders() {
        Order.activate().subscribe( orders => {
            this.orders = orders;
        } );
    }

    ngOnInit(): void {
        this.getOrders();
    }

    // Called from Pagination to load page.
    loadPage() {
        this.getOrders();
    }

    gotoDetail( order: Order ) {
        this.selectedOrder = order;
        this._router.navigate( ['/order', this.selectedOrder.OrderId ] );
    }

    searchOrders() {
        this.pagination.reset();
        this.getOrders();
    }
}
