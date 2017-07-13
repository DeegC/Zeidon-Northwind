/*
  Generated from LOD Product

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
// Product LOD.
var Product = (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.prototype.rootEntityName = function () { return "Product"; };
    ;
    Product.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Product.prototype.getPrototype = function (entityName) {
        return ProductEntityPrototypes[entityName];
    };
    Product.prototype.getLodDef = function () {
        return exports.Product_LodDef;
    };
    ;
    Product.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Product.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Product.prototype, "Product", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "Product$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Product.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Product(), qual);
    };
    return Product;
}(zeidon.ObjectInstance));
exports.Product = Product;
var Product_Product = (function (_super) {
    __extends(Product_Product, _super);
    function Product_Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Product_Product.prototype, "entityName", {
        get: function () { return "Product"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Product_Product.prototype, "ProductId", {
        get: function () { return this.getAttribute("ProductId"); },
        set: function (value) { this.setAttribute("ProductId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "ProductName", {
        get: function () { return this.getAttribute("ProductName"); },
        set: function (value) { this.setAttribute("ProductName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "ReorderLevel", {
        get: function () { return this.getAttribute("ReorderLevel"); },
        set: function (value) { this.setAttribute("ReorderLevel", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "QuantityPerUnit", {
        get: function () { return this.getAttribute("QuantityPerUnit"); },
        set: function (value) { this.setAttribute("QuantityPerUnit", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "Discontinued", {
        get: function () { return this.getAttribute("Discontinued"); },
        set: function (value) { this.setAttribute("Discontinued", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "UnitPrice", {
        get: function () { return this.getAttribute("UnitPrice"); },
        set: function (value) { this.setAttribute("UnitPrice", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "UnitsInStock", {
        get: function () { return this.getAttribute("UnitsInStock"); },
        set: function (value) { this.setAttribute("UnitsInStock", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "UnitsOnOrder", {
        get: function () { return this.getAttribute("UnitsOnOrder"); },
        set: function (value) { this.setAttribute("UnitsOnOrder", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Product.prototype, "Supplier", {
        get: function () {
            return this.getChildEntityArray("Supplier");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product_Product.prototype, "Supplier$", {
        get: function () {
            return this.getChildEntityArray("Supplier").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product_Product.prototype, "Category", {
        get: function () {
            return this.getChildEntityArray("Category");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product_Product.prototype, "Category$", {
        get: function () {
            return this.getChildEntityArray("Category").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Product_Product;
}(zeidon.EntityInstance));
exports.Product_Product = Product_Product;
var Product_Supplier = (function (_super) {
    __extends(Product_Supplier, _super);
    function Product_Supplier() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Product_Supplier.prototype, "entityName", {
        get: function () { return "Supplier"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Product_Supplier.prototype, "SupplierId", {
        get: function () { return this.getAttribute("SupplierId"); },
        set: function (value) { this.setAttribute("SupplierId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "CompanyName", {
        get: function () { return this.getAttribute("CompanyName"); },
        set: function (value) { this.setAttribute("CompanyName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "ContactName", {
        get: function () { return this.getAttribute("ContactName"); },
        set: function (value) { this.setAttribute("ContactName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "ContactTitle", {
        get: function () { return this.getAttribute("ContactTitle"); },
        set: function (value) { this.setAttribute("ContactTitle", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "Phone", {
        get: function () { return this.getAttribute("Phone"); },
        set: function (value) { this.setAttribute("Phone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "Fax", {
        get: function () { return this.getAttribute("Fax"); },
        set: function (value) { this.setAttribute("Fax", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Supplier.prototype, "HomePage", {
        get: function () { return this.getAttribute("HomePage"); },
        set: function (value) { this.setAttribute("HomePage", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Product_Supplier;
}(zeidon.EntityInstance));
exports.Product_Supplier = Product_Supplier;
var Product_Category = (function (_super) {
    __extends(Product_Category, _super);
    function Product_Category() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Product_Category.prototype, "entityName", {
        get: function () { return "Category"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Product_Category.prototype, "CategoryId", {
        get: function () { return this.getAttribute("CategoryId"); },
        set: function (value) { this.setAttribute("CategoryId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Category.prototype, "CategoryName", {
        get: function () { return this.getAttribute("CategoryName"); },
        set: function (value) { this.setAttribute("CategoryName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Category.prototype, "Description", {
        get: function () { return this.getAttribute("Description"); },
        set: function (value) { this.setAttribute("Description", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Product_Category.prototype, "Picture", {
        get: function () { return this.getAttribute("Picture"); },
        set: function (value) { this.setAttribute("Picture", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Product_Category;
}(zeidon.EntityInstance));
exports.Product_Category = Product_Category;
var ProductEntityPrototypes = {
    Product: Product_Product.prototype,
    Supplier: Product_Supplier.prototype,
    Category: Product_Category.prototype,
};
exports.Product_LodDef = {
    name: "Product",
    entities: {
        Product: {
            name: "Product",
            erToken: "110000054",
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
                Supplier: {},
                Category: {},
            },
            attributes: {
                ProductId: {
                    name: "ProductId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                ProductName: {
                    name: "ProductName",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ReorderLevel: {
                    name: "ReorderLevel",
                    hidden: false,
                    required: false,
                    domainName: "Integer",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                QuantityPerUnit: {
                    name: "QuantityPerUnit",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Discontinued: {
                    name: "Discontinued",
                    hidden: false,
                    required: true,
                    domainName: "Boolean",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                UnitPrice: {
                    name: "UnitPrice",
                    hidden: false,
                    required: false,
                    domainName: "Double",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                UnitsInStock: {
                    name: "UnitsInStock",
                    hidden: false,
                    required: false,
                    domainName: "Integer",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                UnitsOnOrder: {
                    name: "UnitsOnOrder",
                    hidden: false,
                    required: false,
                    domainName: "Integer",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                SUPPLIERID: {
                    name: "SUPPLIERID",
                    hidden: true,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: true,
                },
                CATEGORYID: {
                    name: "CATEGORYID",
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
        Supplier: {
            name: "Supplier",
            erToken: "110000077",
            create: false,
            cardMax: 1,
            hasInit: false,
            creatable: false,
            includable: true,
            deletable: false,
            excludable: true,
            updatable: false,
            parentDelete: false,
            childEntities: {},
            attributes: {
                SupplierId: {
                    name: "SupplierId",
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
                ContactName: {
                    name: "ContactName",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ContactTitle: {
                    name: "ContactTitle",
                    hidden: false,
                    required: false,
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
                Fax: {
                    name: "Fax",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Address: {
                    name: "Address",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                City: {
                    name: "City",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Region: {
                    name: "Region",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                PostalCode: {
                    name: "PostalCode",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Country: {
                    name: "Country",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                HomePage: {
                    name: "HomePage",
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
        Category: {
            name: "Category",
            erToken: "110000364",
            create: false,
            cardMax: 1,
            hasInit: false,
            creatable: false,
            includable: true,
            deletable: false,
            excludable: true,
            updatable: false,
            parentDelete: false,
            childEntities: {},
            attributes: {
                CategoryId: {
                    name: "CategoryId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                CategoryName: {
                    name: "CategoryName",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Description: {
                    name: "Description",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Picture: {
                    name: "Picture",
                    hidden: false,
                    required: false,
                    domainName: "Blob",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
            }
        },
    }
};
//# sourceMappingURL=Product.js.map