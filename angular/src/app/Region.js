/*
  Generated from LOD Region

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
// Region LOD.
var Region = (function (_super) {
    __extends(Region, _super);
    function Region() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Region.prototype.rootEntityName = function () { return "Region"; };
    ;
    Region.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Region.prototype.getPrototype = function (entityName) {
        return RegionEntityPrototypes[entityName];
    };
    Region.prototype.getLodDef = function () {
        return exports.Region_LodDef;
    };
    ;
    Region.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Region.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Region.prototype, "Region", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region.prototype, "Region$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Region.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Region(), qual);
    };
    return Region;
}(zeidon.ObjectInstance));
exports.Region = Region;
var Region_Region = (function (_super) {
    __extends(Region_Region, _super);
    function Region_Region() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Region_Region.prototype, "entityName", {
        get: function () { return "Region"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Region_Region.prototype, "RegionId", {
        get: function () { return this.getAttribute("RegionId"); },
        set: function (value) { this.setAttribute("RegionId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Region_Region.prototype, "RegionDescription", {
        get: function () { return this.getAttribute("RegionDescription"); },
        set: function (value) { this.setAttribute("RegionDescription", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Region_Region.prototype, "Territory", {
        get: function () {
            return this.getChildEntityArray("Territory");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Region_Region.prototype, "Territory$", {
        get: function () {
            return this.getChildEntityArray("Territory").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Region_Region;
}(zeidon.EntityInstance));
exports.Region_Region = Region_Region;
var Region_Territory = (function (_super) {
    __extends(Region_Territory, _super);
    function Region_Territory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Region_Territory.prototype, "entityName", {
        get: function () { return "Territory"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Region_Territory.prototype, "TerritoryId", {
        get: function () { return this.getAttribute("TerritoryId"); },
        set: function (value) { this.setAttribute("TerritoryId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Region_Territory.prototype, "TerritoryDescription", {
        get: function () { return this.getAttribute("TerritoryDescription"); },
        set: function (value) { this.setAttribute("TerritoryDescription", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Region_Territory;
}(zeidon.EntityInstance));
exports.Region_Territory = Region_Territory;
var RegionEntityPrototypes = {
    Region: Region_Region.prototype,
    Territory: Region_Territory.prototype,
};
exports.Region_LodDef = {
    name: "Region",
    entities: {
        Region: {
            name: "Region",
            erToken: "110000389",
            create: true,
            cardMax: 0,
            hasInit: false,
            creatable: true,
            includable: false,
            deletable: true,
            excludable: false,
            updatable: true,
            parentDelete: true,
            childEntities: {
                Territory: {},
            },
            attributes: {
                RegionId: {
                    name: "RegionId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                RegionDescription: {
                    name: "RegionDescription",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
            }
        },
        Territory: {
            name: "Territory",
            erToken: "110000394",
            create: true,
            cardMax: 999999,
            hasInit: false,
            creatable: true,
            includable: false,
            deletable: true,
            excludable: false,
            updatable: true,
            parentDelete: true,
            childEntities: {},
            attributes: {
                TerritoryId: {
                    name: "TerritoryId",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                TerritoryDescription: {
                    name: "TerritoryDescription",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                REGIONID: {
                    name: "REGIONID",
                    hidden: true,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: true,
                },
            }
        },
    }
};
//# sourceMappingURL=Region.js.map