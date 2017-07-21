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
var Product_1 = require("./Product");
var zeidon = require("./zeidon-angular");
var ProductDetailComponent = (function () {
    function ProductDetailComponent(_northwindService, _route) {
        this._northwindService = _northwindService;
        this._route = _route;
    }
    ProductDetailComponent.prototype.buildForm = function () {
        this.form = new zeidon.ZeidonFormBuilder().group(this.product.Product$);
    };
    ProductDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        console.log("ProductDetail init");
        Product_1.Product.activate({ ProductId: id, readOnly: true }).subscribe(function (product) {
            _this.product = product;
            _this.buildForm();
            console.log("Loaded product");
        });
    };
    ProductDetailComponent.prototype.onSubmit = function () {
        console.log(JSON.stringify(this.product, null, 2));
        this._northwindService.commitProduct(this.product)
            .then(function (product) { });
    };
    ProductDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return ProductDetailComponent;
}());
ProductDetailComponent = __decorate([
    core_1.Component({
        selector: 'product-detail',
        templateUrl: 'app/product-detail.component.html',
        styleUrls: ['app/product-detail.component.css']
    }),
    __metadata("design:paramtypes", [northwind_service_1.NorthwindService,
        router_1.ActivatedRoute])
], ProductDetailComponent);
exports.ProductDetailComponent = ProductDetailComponent;
//# sourceMappingURL=product-detail.component.js.map