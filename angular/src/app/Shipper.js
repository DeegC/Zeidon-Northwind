/*
  Generated from LOD Shipper

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
// Shipper LOD.
var Shipper = (function (_super) {
    __extends(Shipper, _super);
    function Shipper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Shipper.prototype.rootEntityName = function () { return "Shipper"; };
    ;
    Shipper.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Shipper.prototype.getPrototype = function (entityName) {
        return ShipperEntityPrototypes[entityName];
    };
    Shipper.prototype.getLodDef = function () {
        return exports.Shipper_LodDef;
    };
    ;
    Shipper.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Shipper.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Shipper.prototype, "Shipper", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shipper.prototype, "Shipper$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Shipper.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Shipper(), qual);
    };
    return Shipper;
}(zeidon.ObjectInstance));
exports.Shipper = Shipper;
var Shipper_Shipper = (function (_super) {
    __extends(Shipper_Shipper, _super);
    function Shipper_Shipper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Shipper_Shipper.prototype, "entityName", {
        get: function () { return "Shipper"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Shipper_Shipper.prototype, "ShipperId", {
        get: function () { return this.getAttribute("ShipperId"); },
        set: function (value) { this.setAttribute("ShipperId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Shipper_Shipper.prototype, "CompanyName", {
        get: function () { return this.getAttribute("CompanyName"); },
        set: function (value) { this.setAttribute("CompanyName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Shipper_Shipper.prototype, "Phone", {
        get: function () { return this.getAttribute("Phone"); },
        set: function (value) { this.setAttribute("Phone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Shipper_Shipper;
}(zeidon.EntityInstance));
exports.Shipper_Shipper = Shipper_Shipper;
var ShipperEntityPrototypes = {
    Shipper: Shipper_Shipper.prototype,
};
exports.Shipper_LodDef = {
    name: "Shipper",
    entities: {
        Shipper: {
            name: "Shipper",
            erToken: "110000337",
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
                ShipperId: {
                    name: "ShipperId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                CompanyName: {
                    name: "CompanyName",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Phone: {
                    name: "Phone",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
            }
        },
    }
};
//# sourceMappingURL=Shipper.js.map