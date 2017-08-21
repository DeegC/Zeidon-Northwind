import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { NorthwindService } from './northwind.service';
import {Product} from "./Product";
import * as zeidon from './zeidon-angular';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/product-detail.component.html',
  styleUrls: ['app/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, zeidon.ZeidonComponentWithOis {

    product: Product;
    errorMessage: string;
    form: FormGroup;

    constructor( private _northwindService: NorthwindService,
                 private _route: ActivatedRoute,
                 private _router: Router ) {
        this._router.events.subscribe( event => {
            console.log( "router event = " + event.constructor.name );
        } );
    }

    getOis() {
        console.log( "Product getOis" );
        return this.product ? [ this.product ] : undefined;
    }

    buildForm() {
        this.form = new zeidon.ZeidonFormBuilder().group( this.product.Product$ );
    }

    ngOnInit() {
        let id = +this._route.snapshot.params['id'];
        console.log( "ProductDetail init" );
        Product.activate( { ProductId: id } ).subscribe( product => {
            this.product = product;
            this.buildForm();
            console.log( "Loaded product" );
        } );
    }

    onSubmit() {
        console.log( JSON.stringify( this.product, null, 2 ) );
        this._northwindService.commitProduct( this.product )
            .then( product => {} );
    }

    cancel() {
        this.product.drop();
        window.history.back();
    }

    @HostListener('window:beforeunload', ['$event'])
    unloadHandler(event) {
        console.log("unloadHandler");
    }

}

