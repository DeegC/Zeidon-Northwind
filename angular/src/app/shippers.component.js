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
var Shipper_1 = require("./Shipper");
var zeidon_1 = require("./zeidon");
var ShippersComponent = (function () {
    function ShippersComponent(_router) {
        this._router = _router;
        this.pagination = new zeidon_1.Pagination();
    }
    ShippersComponent.prototype.getShippers = function () {
        var _this = this;
        Shipper_1.Shipper.activate({
            pagination: this.pagination,
            rootOnly: true,
            readOnly: true
        }).subscribe(function (shippers) {
            console.log("Got shippers");
            _this.shippers = shippers;
        });
    };
    ShippersComponent.prototype.addShipper = function (name) {
        if (!name) {
            return;
        }
        var newShipper = new Shipper_1.Shipper;
        newShipper.Shipper.create();
        newShipper.Shipper$.CompanyName = name;
        newShipper.commit();
    };
    ShippersComponent.prototype.ngOnInit = function () {
        this.getShippers();
    };
    // Called from Pagination to load page.
    ShippersComponent.prototype.loadPage = function () {
        this.getShippers();
    };
    ShippersComponent.prototype.gotoDetail = function (shipper) {
        this.selectedShipper = shipper;
        this._router.navigate(['ShipperDetail', { id: this.selectedShipper.Shipper$.ShipperId }]);
    };
    return ShippersComponent;
}());
ShippersComponent = __decorate([
    core_1.Component({
        selector: 'shippers',
        templateUrl: 'app/shippers.component.html',
        styleUrls: ['app/shippers.component.css']
    }),
    __metadata("design:paramtypes", [router_1.Router])
], ShippersComponent);
exports.ShippersComponent = ShippersComponent;
//# sourceMappingURL=shippers.component.js.map