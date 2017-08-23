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
var zeidon = require("./zeidon-angular");
var ShipperDetailComponent = (function () {
    function ShipperDetailComponent(_route) {
        this._route = _route;
    }
    ShipperDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = +this._route.snapshot.params['id'];
        Shipper_1.Shipper.activate({ ShipperId: id }).subscribe(function (shipper) {
            _this.shipper = shipper;
            _this.buildForm();
            console.log("Loaded shipper");
        });
    };
    ShipperDetailComponent.prototype.buildForm = function () {
        this.form = new zeidon.ZeidonFormBuilder().group(this.shipper.Shipper$);
    };
    ShipperDetailComponent.prototype.saveShipper = function (event) {
        var _this = this;
        this.shipper.Shipper$.update(this.form.value);
        this.shipper.commit().subscribe(function (shipper) {
            _this.shipper = shipper;
            _this.buildForm();
            window.history.back();
        });
    };
    ShipperDetailComponent.prototype.cancel = function () {
        window.history.back();
    };
    return ShipperDetailComponent;
}());
ShipperDetailComponent = __decorate([
    core_1.Component({
        selector: 'shipper-detail',
        templateUrl: 'app/shipper-detail.component.html',
        styleUrls: ['app/shipper-detail.component.css']
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], ShipperDetailComponent);
exports.ShipperDetailComponent = ShipperDetailComponent;
//# sourceMappingURL=shipper-detail.component.js.map