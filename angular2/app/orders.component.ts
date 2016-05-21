import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {OrderDetailComponent} from './order-detail.component';
import {Pagination} from './pagination';
import {PaginationComponent} from './pagination.component';

@Component({
    selector: 'orders',
    templateUrl:'app/orders.component.html',
    directives: [PaginationComponent],
    styleUrls: ['app/orders.component.css']
})
export class OrdersComponent implements OnInit {

    errorMessage: string;
    orders: any[];
    searchText: string;
    selectedOrder: any;
    pagination: Pagination = new Pagination( this );

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) { }

    getOrders() {
        this._northwindService.getOrders( this.pagination, this.searchText )
                     .subscribe(
                          json => this.orders = json.Order,
                          error =>  this.errorMessage = <any>error);
    }
    
    ngOnInit() {
        this.getOrders();
    }

    // Called from Pagination to load page.
    loadPage() {
        this.getOrders();
    }

    gotoDetail( order) {
        this.selectedOrder = order;
        this._router.navigate(['OrderDetail', { id: this.selectedOrder.OrderId }]);
    }

    searchOrders() {
        this.pagination.reset();
        this.getOrders();
    }
}

