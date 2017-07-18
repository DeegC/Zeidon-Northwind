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
var Order_1 = require("./Order");
var OrdersComponent = (function () {
    function OrdersComponent(_router, _northwindService) {
        this._router = _router;
        this._northwindService = _northwindService;
        this.pagination = new zeidon_1.Pagination();
    }
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        Order_1.Order.activate({
            pagination: this.pagination,
            rootOnly: true
        }).subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    // Called from Pagination to load page.
    OrdersComponent.prototype.loadPage = function () {
        console.log("loadPage " + this.pagination.getQueryParam());
        this.getOrders();
    };
    OrdersComponent.prototype.searchOrders = function () {
        this.pagination.reset();
        this.getOrders();
    };
    return OrdersComponent;
}());
OrdersComponent = __decorate([
    core_1.Component({
        selector: 'orders',
        templateUrl: 'app/orders.component.html',
        styleUrls: ['app/orders.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router,
        northwind_service_1.NorthwindService])
], OrdersComponent);
exports.OrdersComponent = OrdersComponent;
//# sourceMappingURL=orders.component.js.map