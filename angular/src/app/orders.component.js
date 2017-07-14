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
var pagination_1 = require("./pagination");
var Order_1 = require("./Order");
var OrdersComponent = (function () {
    function OrdersComponent(_router, _northwindService) {
        this._router = _router;
        this._northwindService = _northwindService;
        this.pagination = new pagination_1.Pagination(this);
    }
    OrdersComponent.prototype.getOrders = function () {
        var _this = this;
        Order_1.Order.activate().subscribe(function (orders) {
            _this.orders = orders;
        });
    };
    OrdersComponent.prototype.ngOnInit = function () {
        this.getOrders();
    };
    // Called from Pagination to load page.
    OrdersComponent.prototype.loadPage = function () {
        this.getOrders();
    };
    OrdersComponent.prototype.gotoDetail = function (order) {
        this.selectedOrder = order;
        this._router.navigate(['/order', this.selectedOrder.OrderId]);
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