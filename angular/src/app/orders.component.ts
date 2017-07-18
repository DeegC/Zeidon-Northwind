import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {Pagination} from './zeidon';
import {Order} from './Order';

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
    pagination: Pagination = new Pagination();

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) {
    }

    getOrders() {
        Order.activate(
            {
                pagination: this.pagination,
                rootOnly: true
            } ).subscribe( orders =>
            {
               this.orders = orders;
            } );
    }

    ngOnInit(): void {
        this.getOrders();
    }

    // Called from Pagination to load page.
    loadPage() {
        console.log("loadPage " + this.pagination.getQueryParam() );
        this.getOrders();
    }

    searchOrders() {
        this.pagination.reset();
        this.getOrders();
    }
}
