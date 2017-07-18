"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pagination = (function () {
    function Pagination() {
        this.currentPage = 1;
        this.totalPages = null;
        this.totalCount = null;
        this.pageSize = 20;
    }
    Pagination.prototype.incrementPage = function () {
        var currentPage = Math.min(this.currentPage + 1, this.totalPages || 9999);
        if (currentPage == this.currentPage)
            return false;
        this.currentPage = currentPage;
        return true;
    };
    Pagination.prototype.decrementPage = function () {
        var currentPage = Math.max(this.currentPage - 1, 1);
        if (currentPage == this.currentPage)
            return false;
        this.currentPage = currentPage;
        return true;
    };
    Pagination.prototype.getQueryParam = function () {
        var pageParam = "?page=" + this.currentPage + "&perPage=" + this.pageSize;
        if (this.totalCount == null)
            pageParam += "&getTotal=true";
        return pageParam;
    };
    Pagination.prototype.setFromResuts = function (json) {
        if (json.totalRootCount) {
            this.totalCount = json.totalRootCount;
            this.totalPages = Math.floor(this.totalCount / 20) + 1;
        }
    };
    Pagination.prototype.reset = function () {
        this.currentPage = 1;
        this.totalCount = null; // Indicate that we need to retrieve the total count.
    };
    Pagination.prototype.firstPage = function () {
        return this.currentPage == 1;
    };
    Pagination.prototype.lastPage = function () {
        return this.currentPage == this.totalPages;
    };
    return Pagination;
}());
exports.Pagination = Pagination;
//# sourceMappingURL=pagination.js.map