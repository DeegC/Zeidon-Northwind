/*
  Generated from LOD Customer

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
// Customer LOD.
var Customer = (function (_super) {
    __extends(Customer, _super);
    function Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Customer.prototype.rootEntityName = function () { return "Customer"; };
    ;
    Customer.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Customer.prototype.getPrototype = function (entityName) {
        return CustomerEntityPrototypes[entityName];
    };
    Customer.prototype.getLodDef = function () {
        return exports.Customer_LodDef;
    };
    ;
    Customer.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Customer.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Customer.prototype, "Customer", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "Customer$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Customer.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Customer(), qual);
    };
    return Customer;
}(zeidon.ObjectInstance));
exports.Customer = Customer;
var Customer_Customer = (function (_super) {
    __extends(Customer_Customer, _super);
    function Customer_Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Customer_Customer.prototype, "entityName", {
        get: function () { return "Customer"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Customer_Customer.prototype, "CustomerId", {
        get: function () { return this.getAttribute("CustomerId"); },
        set: function (value) { this.setAttribute("CustomerId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "CompanyName", {
        get: function () { return this.getAttribute("CompanyName"); },
        set: function (value) { this.setAttribute("CompanyName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "ContactName", {
        get: function () { return this.getAttribute("ContactName"); },
        set: function (value) { this.setAttribute("ContactName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "ContactTitle", {
        get: function () { return this.getAttribute("ContactTitle"); },
        set: function (value) { this.setAttribute("ContactTitle", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Phone", {
        get: function () { return this.getAttribute("Phone"); },
        set: function (value) { this.setAttribute("Phone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Fax", {
        get: function () { return this.getAttribute("Fax"); },
        set: function (value) { this.setAttribute("Fax", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Customer.prototype, "Order", {
        get: function () {
            return this.getChildEntityArray("Order");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer_Customer.prototype, "Order$", {
        get: function () {
            return this.getChildEntityArray("Order").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Customer_Customer;
}(zeidon.EntityInstance));
exports.Customer_Customer = Customer_Customer;
var Customer_Order = (function (_super) {
    __extends(Customer_Order, _super);
    function Customer_Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Customer_Order.prototype, "entityName", {
        get: function () { return "Order"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Customer_Order.prototype, "OrderId", {
        get: function () { return this.getAttribute("OrderId"); },
        set: function (value) { this.setAttribute("OrderId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "OrderDate", {
        get: function () { return this.getAttribute("OrderDate"); },
        set: function (value) { this.setAttribute("OrderDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShippedDate", {
        get: function () { return this.getAttribute("ShippedDate"); },
        set: function (value) { this.setAttribute("ShippedDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "RequiredDate", {
        get: function () { return this.getAttribute("RequiredDate"); },
        set: function (value) { this.setAttribute("RequiredDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "Freight", {
        get: function () { return this.getAttribute("Freight"); },
        set: function (value) { this.setAttribute("Freight", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipName", {
        get: function () { return this.getAttribute("ShipName"); },
        set: function (value) { this.setAttribute("ShipName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipAddress", {
        get: function () { return this.getAttribute("ShipAddress"); },
        set: function (value) { this.setAttribute("ShipAddress", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipCity", {
        get: function () { return this.getAttribute("ShipCity"); },
        set: function (value) { this.setAttribute("ShipCity", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipRegion", {
        get: function () { return this.getAttribute("ShipRegion"); },
        set: function (value) { this.setAttribute("ShipRegion", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipPostalCode", {
        get: function () { return this.getAttribute("ShipPostalCode"); },
        set: function (value) { this.setAttribute("ShipPostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "ShipCountry", {
        get: function () { return this.getAttribute("ShipCountry"); },
        set: function (value) { this.setAttribute("ShipCountry", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_Order.prototype, "OrderDetail", {
        get: function () {
            return this.getChildEntityArray("OrderDetail");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Customer_Order.prototype, "OrderDetail$", {
        get: function () {
            return this.getChildEntityArray("OrderDetail").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Customer_Order;
}(zeidon.EntityInstance));
exports.Customer_Order = Customer_Order;
var Customer_OrderDetail = (function (_super) {
    __extends(Customer_OrderDetail, _super);
    function Customer_OrderDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Customer_OrderDetail.prototype, "entityName", {
        get: function () { return "OrderDetail"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Customer_OrderDetail.prototype, "UnitPrice", {
        get: function () { return this.getAttribute("UnitPrice"); },
        set: function (value) { this.setAttribute("UnitPrice", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_OrderDetail.prototype, "Quantity", {
        get: function () { return this.getAttribute("Quantity"); },
        set: function (value) { this.setAttribute("Quantity", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Customer_OrderDetail.prototype, "Discount", {
        get: function () { return this.getAttribute("Discount"); },
        set: function (value) { this.setAttribute("Discount", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Customer_OrderDetail;
}(zeidon.EntityInstance));
exports.Customer_OrderDetail = Customer_OrderDetail;
var CustomerEntityPrototypes = {
    Customer: Customer_Customer.prototype,
    Order: Customer_Order.prototype,
    OrderDetail: Customer_OrderDetail.prototype,
};
exports.Customer_LodDef = {
    name: "Customer",
    entities: {
        Customer: {
            name: "Customer",
            erToken: "110000238",
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
                Order: {},
            },
            attributes: {
                CustomerId: {
                    name: "CustomerId",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                CompanyName: {
                    name: "CompanyName",
                    hidden: false,
                    required: false,
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
            }
        },
        Order: {
            name: "Order",
            erToken: "110000286",
            create: false,
            cardMax: 999999,
            hasInit: false,
            creatable: false,
            includable: false,
            deletable: false,
            excludable: false,
            updatable: false,
            parentDelete: false,
            childEntities: {
                OrderDetail: {},
            },
            attributes: {
                OrderId: {
                    name: "OrderId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                OrderDate: {
                    name: "OrderDate",
                    hidden: false,
                    required: false,
                    domainName: "DateTime",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShippedDate: {
                    name: "ShippedDate",
                    hidden: false,
                    required: false,
                    domainName: "DateTime",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                RequiredDate: {
                    name: "RequiredDate",
                    hidden: false,
                    required: false,
                    domainName: "DateTime",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Freight: {
                    name: "Freight",
                    hidden: false,
                    required: false,
                    domainName: "Double",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipName: {
                    name: "ShipName",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipAddress: {
                    name: "ShipAddress",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipCity: {
                    name: "ShipCity",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipRegion: {
                    name: "ShipRegion",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipPostalCode: {
                    name: "ShipPostalCode",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ShipCountry: {
                    name: "ShipCountry",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                EMPLOYEEID: {
                    name: "EMPLOYEEID",
                    hidden: true,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: true,
                },
                CUSTOMERID: {
                    name: "CUSTOMERID",
                    hidden: true,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: true,
                },
                SHIPPERID: {
                    name: "SHIPPERID",
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
        OrderDetail: {
            name: "OrderDetail",
            erToken: "110000399",
            create: false,
            cardMax: 999999,
            hasInit: false,
            creatable: false,
            includable: false,
            deletable: false,
            excludable: false,
            updatable: false,
            parentDelete: false,
            childEntities: {},
            attributes: {
                UnitPrice: {
                    name: "UnitPrice",
                    hidden: false,
                    required: true,
                    domainName: "Double",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Quantity: {
                    name: "Quantity",
                    hidden: false,
                    required: true,
                    domainName: "Integer",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Discount: {
                    name: "Discount",
                    hidden: false,
                    required: true,
                    domainName: "Double",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                PRODUCTID: {
                    name: "PRODUCTID",
                    hidden: true,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: true,
                },
                ORDERID: {
                    name: "ORDERID",
                    hidden: true,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: true,
                },
            }
        },
    }
};
//# sourceMappingURL=Customer.js.map