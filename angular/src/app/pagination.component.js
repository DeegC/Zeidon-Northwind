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
var zeidon_1 = require("./zeidon");
var PaginationComponent = (function () {
    function PaginationComponent() {
        this.reloadPage = new core_1.EventEmitter();
    }
    PaginationComponent.prototype.nextPage = function () {
        if (this.pagination.incrementPage())
            this.reloadPage.emit();
    };
    PaginationComponent.prototype.prevPage = function () {
        if (this.pagination.decrementPage())
            this.reloadPage.emit();
    };
    return PaginationComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", zeidon_1.Pagination)
], PaginationComponent.prototype, "pagination", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], PaginationComponent.prototype, "reloadPage", void 0);
PaginationComponent = __decorate([
    core_1.Component({
        selector: 'pagination',
        inputs: ['pagination'],
        template: "\n        Page {{pagination.currentPage}} of {{pagination.totalPages}} ({{pagination.totalCount}} total)\n        <button [disabled]=\"pagination.firstPage()\" (click)=\"prevPage()\">Prev</button>\n        <button [disabled]=\"pagination.lastPage()\"  (click)=\"nextPage()\">Next</button>\n"
    })
], PaginationComponent);
exports.PaginationComponent = PaginationComponent;
//# sourceMappingURL=pagination.component.js.map