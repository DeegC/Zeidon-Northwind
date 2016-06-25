import { Component, OnInit } from '@angular/core';
import {RouteParams} from '@angular/router-deprecated';
import { NorthwindService } from './northwind.service';
import {NgForm}    from '@angular/common';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/product-detail.component.html',
  styleUrls: ['app/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
        
    product: any;
    errorMessage: string;

    constructor(
        private _northwindService: NorthwindService,
        private _routeParams: RouteParams ) {
    }

    ngOnInit() {
        let id = +this._routeParams.get( 'id' );
        console.log( "ProductDetail init" );

        this._northwindService.getProduct( id )
            .then( product => this.product = product );
    }

    onSubmit() {
        console.log( JSON.stringify( this.product, null, 2 ) );
        this._northwindService.commitProduct( this.product )
            .then( product => {} );
    }
    
    goBack() {
        window.history.back();
    }
}

