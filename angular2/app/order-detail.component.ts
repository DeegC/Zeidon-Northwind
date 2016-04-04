import { Component, OnInit } from 'angular2/core';
import {RouteParams} from 'angular2/router';
import {NgForm}    from 'angular2/common';
import { NorthwindService } from './northwind.service';

@Component({
  selector: 'order-detail',
  templateUrl: 'app/order-detail.component.html',
  styleUrls: ['app/order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {
        
    order: any;
    errorMessage: string;
    submitted = false;
    
    constructor(
        private _northwindService: NorthwindService,
        private _routeParams: RouteParams ) {
    }

    ngOnInit() {
        let id = +this._routeParams.get( 'id' );
        console.log( "OrderDetail init" );

        this._northwindService.getOrder( id )
            .subscribe( order => this.order = order,
                        error => this.errorMessage = <any>error );
    }

    onSubmit() { 
        console.log( "Submitted" );
        console.log( JSON.stringify( this.order, null, 2 ) );
        this.submitted = true; 
    }

    goBack() {
        window.history.back();
    }
}

