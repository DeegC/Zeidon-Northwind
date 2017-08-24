import {Component} from '@angular/core';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {Pagination} from './zeidon';
import {Product} from './lod/Product';

@Component({
    selector: 'products',
    templateUrl:'app/products.component.html',
    styleUrls: ['app/list.component.css']
})
export class ProductsComponent implements OnInit {

    products: Product;
    selectedProduct: Product;
    pagination: Pagination = new Pagination();

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) { }

    getProducts() {
        Product.activate(
            {
                pagination: this.pagination,
                rootOnly: true,
                readOnly: true
            } ).subscribe( products =>
            {
                console.log( "Got products" );
                this.products = products;
            } );
    }

    searchProducts() {
        this.pagination.reset();
        this.getProducts();
    }

    addProduct( name: string ) {
        if ( !name ) {
            return;
        }

        let newProduct = new Product;
        newProduct.Product.create();
        newProduct.Product$.ProductName = name;
        newProduct.commit();
    }

    // Called from Pagination to load page.
    loadPage() {
        this.getProducts();
    }

    ngOnInit() {
        this.getProducts();
    }

    gotoDetail( product: any ) {
        this.selectedProduct = product;
        this._router.navigate(['ProductDetail', { id: this.selectedProduct.Product$.ProductId }]);
    }
}

