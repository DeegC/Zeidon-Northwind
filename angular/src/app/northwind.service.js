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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var NorthwindService = (function () {
    function NorthwindService(http) {
        this.http = http;
        this._northwindUrl = 'http://localhost:8080/northwind'; // URL to web api
    }
    NorthwindService.prototype.getOrders = function (pagination, searchText) {
        if (searchText === void 0) { searchText = null; }
        console.log("trying to get orders from " + this.http);
        var searchParam = "";
        if (searchText != null)
            searchParam = "&product=" + searchText;
        return this.http.get(this._northwindUrl + '/Order' + pagination.getQueryParam() + searchParam)
            .toPromise()
            .then(function (res) {
            var json = res.json();
            pagination.setFromResuts(json);
            return json;
        })
            .catch(this.handleError);
    };
    NorthwindService.prototype.getOrder = function (id) {
        console.log("trying to get orders from " + this.http);
        return this.http.get(this._northwindUrl + '/Order/' + id)
            .toPromise()
            .then(function (res) { return res.json().Order[0]; })
            .catch(this.handleError);
    };
    NorthwindService.prototype.getShippers = function () {
        console.log("trying to get orders from " + this.http);
        return this.http.get(this._northwindUrl + '/Shipper')
            .toPromise()
            .then(function (res) { return res.json().Shipper; })
            .catch(this.handleError);
    };
    NorthwindService.prototype.getShipper = function (id) {
        console.log("trying to get shipper from " + this.http);
        return this.http.get(this._northwindUrl + '/Shipper/' + id)
            .toPromise()
            .then(function (res) { return res.json().Shipper[0]; })
            .catch(this.handleError);
    };
    NorthwindService.prototype.addShipper = function (name) {
        var shipper = { "CompanyName": name };
        return this.commitLod(shipper, 'Shipper');
    };
    NorthwindService.prototype.commitShipper = function (shipper) {
        return this.commitLod(shipper, "Shipper");
    };
    NorthwindService.prototype.getProducts = function (pagination, searchText) {
        if (searchText === void 0) { searchText = null; }
        console.log("trying to get orders from " + this.http);
        var searchParam = "";
        if (searchText != null)
            searchParam = "&name=" + searchText;
        return this.http.get(this._northwindUrl + '/Product' + pagination.getQueryParam() + searchParam)
            .toPromise()
            .then(function (res) {
            var json = res.json();
            pagination.setFromResuts(json);
            return json;
        })
            .catch(this.handleError);
    };
    NorthwindService.prototype.getProduct = function (id) {
        console.log("trying to get product from " + this.http);
        return this.http.get(this._northwindUrl + '/Product/' + id)
            .toPromise()
            .then(function (res) { return res.json().Product[0]; })
            .catch(this.handleError);
    };
    NorthwindService.prototype.addProduct = function (name) {
        var product = { "CompanyName": name };
        return this.commitLod(product, 'Product');
    };
    NorthwindService.prototype.commitProduct = function (product) {
        return this.commitLod(product, "Product");
    };
    NorthwindService.prototype.commitLod = function (lod, lodName) {
        var payload = {};
        payload[lodName] = [lod];
        var body = JSON.stringify(payload);
        //let headers = new Headers({ 'Content-Type': 'application/json' });
        var headers = new http_1.Headers({ 'Content-Type': 'text' });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this._northwindUrl + '/' + lodName, body, { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    NorthwindService.prototype.handleError = function (error) {
        // in a real world app, we may send the error to some remote logging infrastructure
        // instead of just logging it to the console
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || 'Server error');
    };
    return NorthwindService;
}());
NorthwindService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], NorthwindService);
exports.NorthwindService = NorthwindService;
//# sourceMappingURL=northwind.service.js.map