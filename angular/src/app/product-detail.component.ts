import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { Product } from "./lod/Product";
import * as zeidon from './zeidon-angular';

@Component({
  selector: 'product-detail',
  templateUrl: 'app/product-detail.component.html',
  styleUrls: ['app/product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, zeidon.ZeidonComponentWithOis {

    product: Product;
    form: FormGroup;

    constructor( private _route: ActivatedRoute ) {
    }

    getOis() {
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
        } );
    }

    saveProduct( event ) {
        this.product.Product$.update( this.form.value );
        console.log( JSON.stringify( this.product, null, 2 ) );
        this.product.commit().subscribe(product => {
            this.product = product;
            this.buildForm();
            window.history.back();
        });
    }

    cancel() {
        window.history.back();
    }
}

