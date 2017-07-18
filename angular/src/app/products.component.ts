import {Component} from '@angular/core';
import {Output} from '@angular/core';
import { Router } from '@angular/router';
import {OnInit} from '@angular/core';
import {NorthwindService} from './northwind.service';
import {Pagination} from './pagination';

@Component({
    selector: 'products',
    templateUrl:'app/products.component.html',
    styleUrls: ['app/list.component.css']
})
export class ProductsComponent implements OnInit {

    errorMessage: string;
    searchText: string;
    products: any[];
    selectedProduct: any;
    pagination: Pagination = new Pagination();

  constructor(
    private _router: Router,
    private _northwindService: NorthwindService) { }

    getProducts() {
        this._northwindService.getProducts( this.pagination, this.searchText )
                     .then( json => {
                              this.products = json.Product;
                            } );
    }

    searchProducts() {
        this.pagination.reset();
        this.getProducts();
    }

    addProduct( name: string ) {
        if ( !name ) { return; }
        this._northwindService.addProduct( name )
            .then( product => this.products.push( product ),
                   error => this.errorMessage = <any>error );
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
        this._router.navigate(['ProductDetail', { id: this.selectedProduct.ProductId }]);
    }
}

