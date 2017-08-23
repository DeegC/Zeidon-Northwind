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
var Order_1 = require("./Order");
var zeidon = require("./zeidon-angular");
var OrderDetailComponent = (function () {
    function OrderDetailComponent(_northwindService, _route) {
        this._northwindService = _northwindService;
        this._route = _route;
        this.submitted = false;
    }
    OrderDetailComponent.prototype.ngOnChanges = function (changes) {
        console.log("ngOnChanges for order");
        this.buildForm();
    };
    OrderDetailComponent.prototype.buildForm = function () {
        this.form = new zeidon.ZeidonFormBuilder().group(this.order.Order$);
    };
    OrderDetailComponent.prototype.saveOrder = function (event) {
        var _this = this;
        this.order.Order$.update(this.form.value);
        this.order.commit().subscribe(function (order) {
            _this.order = order;
            _this.buildForm();
            window.history.back();
        });
    };
    OrderDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        console.log("OrderDetail init");
        Order_1.Order.activate({ OrderId: id }).subscribe(function (order) {
            _this.order = order;
            _this.buildForm();
            console.log("Loaded order");
        });
    };
    OrderDetailComponent.prototype.cancel = function () {
        window.history.back();
    };
    OrderDetailComponent.prototype.goBack = function () {
        window.history.back();
    };
    return OrderDetailComponent;
}());
OrderDetailComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'order-detail',
        templateUrl: 'order-detail.component.html',
        styleUrls: ['order-detail.component.css']
    }),
    __metadata("design:paramtypes", [northwind_service_1.NorthwindService,
        router_1.ActivatedRoute])
], OrderDetailComponent);
exports.OrderDetailComponent = OrderDetailComponent;
//# sourceMappingURL=order-detail.component.js.map