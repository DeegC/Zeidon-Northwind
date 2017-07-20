"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var northwind_service_1 = require("./northwind.service");
var zeidon_1 = require("./zeidon");
var Product_1 = require("./Product");
var ProductsComponent = (function () {
    function ProductsComponent(_router, _northwindService) {
        this._router = _router;
        this._northwindService = _northwindService;
        this.pagination = new zeidon_1.Pagination();
    }
    ProductsComponent.prototype.getProducts = function () {
        var _this = this;
        Product_1.Product.activate({
            pagination: this.pagination,
            rootOnly: true,
            readOnly: true
        }).subscribe(function (products) {
            console.log("Got products");
            _this.products = products;
        });
    };
    ProductsComponent.prototype.searchProducts = function () {
        this.pagination.reset();
        this.getProducts();
    };
    ProductsComponent.prototype.addProduct = function (name) {
        if (!name) {
            return;
        }
        var newProduct = new Product_1.Product;
        newProduct.Product.create();
        newProduct.Product$.ProductName = name;
        newProduct.commit();
    };
    // Called from Pagination to load page.
    ProductsComponent.prototype.loadPage = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    ProductsComponent.prototype.gotoDetail = function (product) {
        this.selectedProduct = product;
        this._router.navigate(['ProductDetail', { id: this.selectedProduct.Product$.ProductId }]);
    };
    return ProductsComponent;
}());
ProductsComponent = __decorate([
    core_1.Component({
        selector: 'products',
        templateUrl: 'app/products.component.html',
        styleUrls: ['app/list.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        northwind_service_1.NorthwindService])
], ProductsComponent);
exports.ProductsComponent = ProductsComponent;
//# sourceMappingURL=products.component.js.map