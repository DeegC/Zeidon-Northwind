/*
  Generated from LOD ZPLOCKO

*/
"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var zeidon = require("./zeidon");
var Northwind_DomainList_1 = require("./Northwind-DomainList");
var Northwind_DomainFunctions_1 = require("./Northwind-DomainFunctions");
// ZPLOCKO LOD.
var ZPLOCKO = (function (_super) {
    __extends(ZPLOCKO, _super);
    function ZPLOCKO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ZPLOCKO.prototype.rootEntityName = function () { return "ZPLOCKO"; };
    ;
    ZPLOCKO.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    ZPLOCKO.prototype.getPrototype = function (entityName) {
        return ZPLOCKOEntityPrototypes[entityName];
    };
    ZPLOCKO.prototype.getLodDef = function () {
        return exports.ZPLOCKO_LodDef;
    };
    ;
    ZPLOCKO.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    ZPLOCKO.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(ZPLOCKO.prototype, "ZeidonLock", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ZPLOCKO.prototype, "ZeidonLock$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    ZPLOCKO.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new ZPLOCKO(), qual);
    };
    return ZPLOCKO;
}(zeidon.ObjectInstance));
exports.ZPLOCKO = ZPLOCKO;
var ZPLOCKO_ZeidonLock = (function (_super) {
    __extends(ZPLOCKO_ZeidonLock, _super);
    function ZPLOCKO_ZeidonLock() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "entityName", {
        get: function () { return "ZeidonLock"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "LOD_Name", {
        get: function () { return this.getAttribute("LOD_Name"); },
        set: function (value) { this.setAttribute("LOD_Name", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "KeyValue", {
        get: function () { return this.getAttribute("KeyValue"); },
        set: function (value) { this.setAttribute("KeyValue", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "UserName", {
        get: function () { return this.getAttribute("UserName"); },
        set: function (value) { this.setAttribute("UserName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "AllowRead", {
        get: function () { return this.getAttribute("AllowRead"); },
        set: function (value) { this.setAttribute("AllowRead", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "Timestamp", {
        get: function () { return this.getAttribute("Timestamp"); },
        set: function (value) { this.setAttribute("Timestamp", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(ZPLOCKO_ZeidonLock.prototype, "ID", {
        get: function () { return this.getAttribute("ID"); },
        set: function (value) { this.setAttribute("ID", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return ZPLOCKO_ZeidonLock;
}(zeidon.EntityInstance));
exports.ZPLOCKO_ZeidonLock = ZPLOCKO_ZeidonLock;
var ZPLOCKOEntityPrototypes = {
    ZeidonLock: ZPLOCKO_ZeidonLock.prototype,
};
exports.ZPLOCKO_LodDef = {
    name: "ZPLOCKO",
    entities: {
        ZeidonLock: {
            name: "ZeidonLock",
            erToken: "110000709",
            create: true,
            cardMax: 0,
            hasInit: false,
            creatable: true,
            includable: false,
            deletable: true,
            excludable: false,
            updatable: true,
            parentDelete: true,
            childEntities: {},
            attributes: {
                LOD_Name: {
                    name: "LOD_Name",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                KeyValue: {
                    name: "KeyValue",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                UserName: {
                    name: "UserName",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                AllowRead: {
                    name: "AllowRead",
                    hidden: false,
                    required: false,
                    domainName: "Boolean",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Timestamp: {
                    name: "Timestamp",
                    hidden: false,
                    required: true,
                    domainName: "DateTime",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ID: {
                    name: "ID",
                    hidden: false,
                    required: false,
                    domainName: "Integer",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
            }
        },
    }
};
//# sourceMappingURL=ZPLOCKO.js.map