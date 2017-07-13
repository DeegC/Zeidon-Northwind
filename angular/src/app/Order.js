/*
  Generated from LOD Order

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
// Order LOD.
var Order = (function (_super) {
    __extends(Order, _super);
    function Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Order.prototype.rootEntityName = function () { return "Order"; };
    ;
    Order.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Order.prototype.getPrototype = function (entityName) {
        return OrderEntityPrototypes[entityName];
    };
    Order.prototype.getLodDef = function () {
        return exports.Order_LodDef;
    };
    ;
    Order.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Order.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Order.prototype, "Order", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order.prototype, "Order$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Order.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Order(), qual);
    };
    return Order;
}(zeidon.ObjectInstance));
exports.Order = Order;
var Order_Order = (function (_super) {
    __extends(Order_Order, _super);
    function Order_Order() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_Order.prototype, "entityName", {
        get: function () { return "Order"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_Order.prototype, "OrderId", {
        get: function () { return this.getAttribute("OrderId"); },
        set: function (value) { this.setAttribute("OrderId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "OrderDate", {
        get: function () { return this.getAttribute("OrderDate"); },
        set: function (value) { this.setAttribute("OrderDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShippedDate", {
        get: function () { return this.getAttribute("ShippedDate"); },
        set: function (value) { this.setAttribute("ShippedDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "RequiredDate", {
        get: function () { return this.getAttribute("RequiredDate"); },
        set: function (value) { this.setAttribute("RequiredDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "Freight", {
        get: function () { return this.getAttribute("Freight"); },
        set: function (value) { this.setAttribute("Freight", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipName", {
        get: function () { return this.getAttribute("ShipName"); },
        set: function (value) { this.setAttribute("ShipName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipAddress", {
        get: function () { return this.getAttribute("ShipAddress"); },
        set: function (value) { this.setAttribute("ShipAddress", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipCity", {
        get: function () { return this.getAttribute("ShipCity"); },
        set: function (value) { this.setAttribute("ShipCity", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipRegion", {
        get: function () { return this.getAttribute("ShipRegion"); },
        set: function (value) { this.setAttribute("ShipRegion", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipPostalCode", {
        get: function () { return this.getAttribute("ShipPostalCode"); },
        set: function (value) { this.setAttribute("ShipPostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "ShipCountry", {
        get: function () { return this.getAttribute("ShipCountry"); },
        set: function (value) { this.setAttribute("ShipCountry", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Order.prototype, "OrderDetail", {
        get: function () {
            return this.getChildEntityArray("OrderDetail");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "OrderDetail$", {
        get: function () {
            return this.getChildEntityArray("OrderDetail").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Customer", {
        get: function () {
            return this.getChildEntityArray("Customer");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Customer$", {
        get: function () {
            return this.getChildEntityArray("Customer").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Employee", {
        get: function () {
            return this.getChildEntityArray("Employee");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Employee$", {
        get: function () {
            return this.getChildEntityArray("Employee").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Shipper", {
        get: function () {
            return this.getChildEntityArray("Shipper");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_Order.prototype, "Shipper$", {
        get: function () {
            return this.getChildEntityArray("Shipper").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Order_Order;
}(zeidon.EntityInstance));
exports.Order_Order = Order_Order;
var Order_OrderDetail = (function (_super) {
    __extends(Order_OrderDetail, _super);
    function Order_OrderDetail() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_OrderDetail.prototype, "entityName", {
        get: function () { return "OrderDetail"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_OrderDetail.prototype, "UnitPrice", {
        get: function () { return this.getAttribute("UnitPrice"); },
        set: function (value) { this.setAttribute("UnitPrice", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_OrderDetail.prototype, "Quantity", {
        get: function () { return this.getAttribute("Quantity"); },
        set: function (value) { this.setAttribute("Quantity", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_OrderDetail.prototype, "Discount", {
        get: function () { return this.getAttribute("Discount"); },
        set: function (value) { this.setAttribute("Discount", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_OrderDetail.prototype, "Product", {
        get: function () {
            return this.getChildEntityArray("Product");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Order_OrderDetail.prototype, "Product$", {
        get: function () {
            return this.getChildEntityArray("Product").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Order_OrderDetail;
}(zeidon.EntityInstance));
exports.Order_OrderDetail = Order_OrderDetail;
var Order_Product = (function (_super) {
    __extends(Order_Product, _super);
    function Order_Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_Product.prototype, "entityName", {
        get: function () { return "Product"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_Product.prototype, "ProductId", {
        get: function () { return this.getAttribute("ProductId"); },
        set: function (value) { this.setAttribute("ProductId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "ProductName", {
        get: function () { return this.getAttribute("ProductName"); },
        set: function (value) { this.setAttribute("ProductName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "ReorderLevel", {
        get: function () { return this.getAttribute("ReorderLevel"); },
        set: function (value) { this.setAttribute("ReorderLevel", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "QuantityPerUnit", {
        get: function () { return this.getAttribute("QuantityPerUnit"); },
        set: function (value) { this.setAttribute("QuantityPerUnit", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "Discontinued", {
        get: function () { return this.getAttribute("Discontinued"); },
        set: function (value) { this.setAttribute("Discontinued", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "UnitPrice", {
        get: function () { return this.getAttribute("UnitPrice"); },
        set: function (value) { this.setAttribute("UnitPrice", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "UnitsInStock", {
        get: function () { return this.getAttribute("UnitsInStock"); },
        set: function (value) { this.setAttribute("UnitsInStock", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Product.prototype, "UnitsOnOrder", {
        get: function () { return this.getAttribute("UnitsOnOrder"); },
        set: function (value) { this.setAttribute("UnitsOnOrder", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Order_Product;
}(zeidon.EntityInstance));
exports.Order_Product = Order_Product;
var Order_Customer = (function (_super) {
    __extends(Order_Customer, _super);
    function Order_Customer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_Customer.prototype, "entityName", {
        get: function () { return "Customer"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_Customer.prototype, "CustomerId", {
        get: function () { return this.getAttribute("CustomerId"); },
        set: function (value) { this.setAttribute("CustomerId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "CompanyName", {
        get: function () { return this.getAttribute("CompanyName"); },
        set: function (value) { this.setAttribute("CompanyName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "ContactName", {
        get: function () { return this.getAttribute("ContactName"); },
        set: function (value) { this.setAttribute("ContactName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "ContactTitle", {
        get: function () { return this.getAttribute("ContactTitle"); },
        set: function (value) { this.setAttribute("ContactTitle", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "Phone", {
        get: function () { return this.getAttribute("Phone"); },
        set: function (value) { this.setAttribute("Phone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Customer.prototype, "Fax", {
        get: function () { return this.getAttribute("Fax"); },
        set: function (value) { this.setAttribute("Fax", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Order_Customer;
}(zeidon.EntityInstance));
exports.Order_Customer = Order_Customer;
var Order_Employee = (function (_super) {
    __extends(Order_Employee, _super);
    function Order_Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_Employee.prototype, "entityName", {
        get: function () { return "Employee"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_Employee.prototype, "EmployeeId", {
        get: function () { return this.getAttribute("EmployeeId"); },
        set: function (value) { this.setAttribute("EmployeeId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "LastName", {
        get: function () { return this.getAttribute("LastName"); },
        set: function (value) { this.setAttribute("LastName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "FirstName", {
        get: function () { return this.getAttribute("FirstName"); },
        set: function (value) { this.setAttribute("FirstName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Title", {
        get: function () { return this.getAttribute("Title"); },
        set: function (value) { this.setAttribute("Title", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "TitleOfCourtesy", {
        get: function () { return this.getAttribute("TitleOfCourtesy"); },
        set: function (value) { this.setAttribute("TitleOfCourtesy", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "BirthDate", {
        get: function () { return this.getAttribute("BirthDate"); },
        set: function (value) { this.setAttribute("BirthDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "HireDate", {
        get: function () { return this.getAttribute("HireDate"); },
        set: function (value) { this.setAttribute("HireDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "HomePhone", {
        get: function () { return this.getAttribute("HomePhone"); },
        set: function (value) { this.setAttribute("HomePhone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Extension", {
        get: function () { return this.getAttribute("Extension"); },
        set: function (value) { this.setAttribute("Extension", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Notes", {
        get: function () { return this.getAttribute("Notes"); },
        set: function (value) { this.setAttribute("Notes", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Photo", {
        get: function () { return this.getAttribute("Photo"); },
        set: function (value) { this.setAttribute("Photo", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "PhotoPath", {
        get: function () { return this.getAttribute("PhotoPath"); },
        set: function (value) { this.setAttribute("PhotoPath", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Employee.prototype, "Salary", {
        get: function () { return this.getAttribute("Salary"); },
        set: function (value) { this.setAttribute("Salary", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Order_Employee;
}(zeidon.EntityInstance));
exports.Order_Employee = Order_Employee;
var Order_Shipper = (function (_super) {
    __extends(Order_Shipper, _super);
    function Order_Shipper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Order_Shipper.prototype, "entityName", {
        get: function () { return "Shipper"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Order_Shipper.prototype, "ShipperId", {
        get: function () { return this.getAttribute("ShipperId"); },
        set: function (value) { this.setAttribute("ShipperId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Shipper.prototype, "CompanyName", {
        get: function () { return this.getAttribute("CompanyName"); },
        set: function (value) { this.setAttribute("CompanyName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Order_Shipper.prototype, "Phone", {
        get: function () { return this.getAttribute("Phone"); },
        set: function (value) { this.setAttribute("Phone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Order_Shipper;
}(zeidon.EntityInstance));
exports.Order_Shipper = Order_Shipper;
var OrderEntityPrototypes = {
    Order: Order_Order.prototype,
    OrderDetail: Order_OrderDetail.prototype,
    Product: Order_Product.prototype,
    Customer: Order_Customer.prototype,
    Employee: Order_Employee.prototype,
    Shipper: Order_Shipper.prototype,
};
exports.Order_LodDef = {
    name: "Order",
    entities: {
        Order: {
            name: "Order",
            erToken: "110000286",
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
                OrderDetail: {},
                Customer: {},
                Employee: {},
                Shipper: {},
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
            create: true,
            cardMax: 999999,
            hasInit: false,
            creatable: true,
            includable: false,
            deletable: true,
            excludable: false,
            updatable: true,
            parentDelete: true,
            childEntities: {
                Product: {},
            },
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
        Product: {
            name: "Product",
            erToken: "110000054",
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
        Customer: {
            name: "Customer",
            erToken: "110000238",
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
        Employee: {
            name: "Employee",
            erToken: "110000216",
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
                EmployeeId: {
                    name: "EmployeeId",
                    hidden: false,
                    required: true,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: true,
                    update: true,
                    foreignKey: false,
                },
                LastName: {
                    name: "LastName",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                FirstName: {
                    name: "FirstName",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Title: {
                    name: "Title",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                TitleOfCourtesy: {
                    name: "TitleOfCourtesy",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                BirthDate: {
                    name: "BirthDate",
                    hidden: false,
                    required: false,
                    domainName: "Date",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                HireDate: {
                    name: "HireDate",
                    hidden: false,
                    required: false,
                    domainName: "Date",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                HomePhone: {
                    name: "HomePhone",
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
                Extension: {
                    name: "Extension",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Notes: {
                    name: "Notes",
                    hidden: false,
                    required: true,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Photo: {
                    name: "Photo",
                    hidden: false,
                    required: false,
                    domainName: "Blob",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                PhotoPath: {
                    name: "PhotoPath",
                    hidden: false,
                    required: false,
                    domainName: "Text",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                Salary: {
                    name: "Salary",
                    hidden: false,
                    required: false,
                    domainName: "Double",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: false,
                },
                ReportsTo: {
                    name: "ReportsTo",
                    hidden: true,
                    required: false,
                    domainName: "GeneratedKey",
                    persistent: true,
                    key: false,
                    update: true,
                    foreignKey: true,
                },
            }
        },
        Shipper: {
            name: "Shipper",
            erToken: "110000337",
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
//# sourceMappingURL=Order.js.map