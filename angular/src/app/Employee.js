/*
  Generated from LOD Employee

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
// Employee LOD.
var Employee = (function (_super) {
    __extends(Employee, _super);
    function Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employee.prototype.rootEntityName = function () { return "Employee"; };
    ;
    Employee.prototype.getApplicationName = function () { return "Northwind"; };
    ;
    Employee.prototype.getPrototype = function (entityName) {
        return EmployeeEntityPrototypes[entityName];
    };
    Employee.prototype.getLodDef = function () {
        return exports.Employee_LodDef;
    };
    ;
    Employee.prototype.getDomain = function (name) {
        return Northwind_DomainList_1.Northwind_DomainList[name];
    };
    ;
    Employee.prototype.getDomainFunctions = function (name) {
        return Northwind_DomainFunctions_1.Northwind_DomainFunctions[name];
    };
    Object.defineProperty(Employee.prototype, "Employee", {
        get: function () {
            return this.roots;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee.prototype, "Employee$", {
        get: function () {
            return this.roots.selected();
        },
        enumerable: true,
        configurable: true
    });
    Employee.activate = function (qual) {
        return zeidon.ObjectInstance.activateOi(new Employee(), qual);
    };
    return Employee;
}(zeidon.ObjectInstance));
exports.Employee = Employee;
var Employee_Employee = (function (_super) {
    __extends(Employee_Employee, _super);
    function Employee_Employee() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee_Employee.prototype, "entityName", {
        get: function () { return "Employee"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Employee_Employee.prototype, "EmployeeId", {
        get: function () { return this.getAttribute("EmployeeId"); },
        set: function (value) { this.setAttribute("EmployeeId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "LastName", {
        get: function () { return this.getAttribute("LastName"); },
        set: function (value) { this.setAttribute("LastName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "FirstName", {
        get: function () { return this.getAttribute("FirstName"); },
        set: function (value) { this.setAttribute("FirstName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Title", {
        get: function () { return this.getAttribute("Title"); },
        set: function (value) { this.setAttribute("Title", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "TitleOfCourtesy", {
        get: function () { return this.getAttribute("TitleOfCourtesy"); },
        set: function (value) { this.setAttribute("TitleOfCourtesy", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "BirthDate", {
        get: function () { return this.getAttribute("BirthDate"); },
        set: function (value) { this.setAttribute("BirthDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "HireDate", {
        get: function () { return this.getAttribute("HireDate"); },
        set: function (value) { this.setAttribute("HireDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "HomePhone", {
        get: function () { return this.getAttribute("HomePhone"); },
        set: function (value) { this.setAttribute("HomePhone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Extension", {
        get: function () { return this.getAttribute("Extension"); },
        set: function (value) { this.setAttribute("Extension", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Notes", {
        get: function () { return this.getAttribute("Notes"); },
        set: function (value) { this.setAttribute("Notes", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Photo", {
        get: function () { return this.getAttribute("Photo"); },
        set: function (value) { this.setAttribute("Photo", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "PhotoPath", {
        get: function () { return this.getAttribute("PhotoPath"); },
        set: function (value) { this.setAttribute("PhotoPath", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "Salary", {
        get: function () { return this.getAttribute("Salary"); },
        set: function (value) { this.setAttribute("Salary", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Employee.prototype, "DirectReport", {
        get: function () {
            return this.getChildEntityArray("DirectReport");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Employee.prototype, "DirectReport$", {
        get: function () {
            return this.getChildEntityArray("DirectReport").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Employee.prototype, "Supervisor", {
        get: function () {
            return this.getChildEntityArray("Supervisor");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Employee.prototype, "Supervisor$", {
        get: function () {
            return this.getChildEntityArray("Supervisor").selected();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Employee.prototype, "Territory", {
        get: function () {
            return this.getChildEntityArray("Territory");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Employee.prototype, "Territory$", {
        get: function () {
            return this.getChildEntityArray("Territory").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Employee_Employee;
}(zeidon.EntityInstance));
exports.Employee_Employee = Employee_Employee;
var Employee_DirectReport = (function (_super) {
    __extends(Employee_DirectReport, _super);
    function Employee_DirectReport() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee_DirectReport.prototype, "entityName", {
        get: function () { return "DirectReport"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "EmployeeId", {
        get: function () { return this.getAttribute("EmployeeId"); },
        set: function (value) { this.setAttribute("EmployeeId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "LastName", {
        get: function () { return this.getAttribute("LastName"); },
        set: function (value) { this.setAttribute("LastName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "FirstName", {
        get: function () { return this.getAttribute("FirstName"); },
        set: function (value) { this.setAttribute("FirstName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Title", {
        get: function () { return this.getAttribute("Title"); },
        set: function (value) { this.setAttribute("Title", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "TitleOfCourtesy", {
        get: function () { return this.getAttribute("TitleOfCourtesy"); },
        set: function (value) { this.setAttribute("TitleOfCourtesy", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "BirthDate", {
        get: function () { return this.getAttribute("BirthDate"); },
        set: function (value) { this.setAttribute("BirthDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "HireDate", {
        get: function () { return this.getAttribute("HireDate"); },
        set: function (value) { this.setAttribute("HireDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "HomePhone", {
        get: function () { return this.getAttribute("HomePhone"); },
        set: function (value) { this.setAttribute("HomePhone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Extension", {
        get: function () { return this.getAttribute("Extension"); },
        set: function (value) { this.setAttribute("Extension", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Notes", {
        get: function () { return this.getAttribute("Notes"); },
        set: function (value) { this.setAttribute("Notes", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Photo", {
        get: function () { return this.getAttribute("Photo"); },
        set: function (value) { this.setAttribute("Photo", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "PhotoPath", {
        get: function () { return this.getAttribute("PhotoPath"); },
        set: function (value) { this.setAttribute("PhotoPath", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_DirectReport.prototype, "Salary", {
        get: function () { return this.getAttribute("Salary"); },
        set: function (value) { this.setAttribute("Salary", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Employee_DirectReport;
}(zeidon.EntityInstance));
exports.Employee_DirectReport = Employee_DirectReport;
var Employee_Supervisor = (function (_super) {
    __extends(Employee_Supervisor, _super);
    function Employee_Supervisor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee_Supervisor.prototype, "entityName", {
        get: function () { return "Supervisor"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "EmployeeId", {
        get: function () { return this.getAttribute("EmployeeId"); },
        set: function (value) { this.setAttribute("EmployeeId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "LastName", {
        get: function () { return this.getAttribute("LastName"); },
        set: function (value) { this.setAttribute("LastName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "FirstName", {
        get: function () { return this.getAttribute("FirstName"); },
        set: function (value) { this.setAttribute("FirstName", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Title", {
        get: function () { return this.getAttribute("Title"); },
        set: function (value) { this.setAttribute("Title", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "TitleOfCourtesy", {
        get: function () { return this.getAttribute("TitleOfCourtesy"); },
        set: function (value) { this.setAttribute("TitleOfCourtesy", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "BirthDate", {
        get: function () { return this.getAttribute("BirthDate"); },
        set: function (value) { this.setAttribute("BirthDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "HireDate", {
        get: function () { return this.getAttribute("HireDate"); },
        set: function (value) { this.setAttribute("HireDate", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "HomePhone", {
        get: function () { return this.getAttribute("HomePhone"); },
        set: function (value) { this.setAttribute("HomePhone", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Address", {
        get: function () { return this.getAttribute("Address"); },
        set: function (value) { this.setAttribute("Address", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "City", {
        get: function () { return this.getAttribute("City"); },
        set: function (value) { this.setAttribute("City", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Region", {
        get: function () { return this.getAttribute("Region"); },
        set: function (value) { this.setAttribute("Region", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "PostalCode", {
        get: function () { return this.getAttribute("PostalCode"); },
        set: function (value) { this.setAttribute("PostalCode", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Country", {
        get: function () { return this.getAttribute("Country"); },
        set: function (value) { this.setAttribute("Country", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Extension", {
        get: function () { return this.getAttribute("Extension"); },
        set: function (value) { this.setAttribute("Extension", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Notes", {
        get: function () { return this.getAttribute("Notes"); },
        set: function (value) { this.setAttribute("Notes", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Photo", {
        get: function () { return this.getAttribute("Photo"); },
        set: function (value) { this.setAttribute("Photo", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "PhotoPath", {
        get: function () { return this.getAttribute("PhotoPath"); },
        set: function (value) { this.setAttribute("PhotoPath", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Supervisor.prototype, "Salary", {
        get: function () { return this.getAttribute("Salary"); },
        set: function (value) { this.setAttribute("Salary", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Employee_Supervisor;
}(zeidon.EntityInstance));
exports.Employee_Supervisor = Employee_Supervisor;
var Employee_Territory = (function (_super) {
    __extends(Employee_Territory, _super);
    function Employee_Territory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee_Territory.prototype, "entityName", {
        get: function () { return "Territory"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Employee_Territory.prototype, "TerritoryId", {
        get: function () { return this.getAttribute("TerritoryId"); },
        set: function (value) { this.setAttribute("TerritoryId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Territory.prototype, "TerritoryDescription", {
        get: function () { return this.getAttribute("TerritoryDescription"); },
        set: function (value) { this.setAttribute("TerritoryDescription", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Territory.prototype, "Region", {
        get: function () {
            return this.getChildEntityArray("Region");
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Employee_Territory.prototype, "Region$", {
        get: function () {
            return this.getChildEntityArray("Region").selected();
        },
        enumerable: true,
        configurable: true
    });
    return Employee_Territory;
}(zeidon.EntityInstance));
exports.Employee_Territory = Employee_Territory;
var Employee_Region = (function (_super) {
    __extends(Employee_Region, _super);
    function Employee_Region() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Employee_Region.prototype, "entityName", {
        get: function () { return "Region"; },
        enumerable: true,
        configurable: true
    });
    ;
    Object.defineProperty(Employee_Region.prototype, "RegionId", {
        get: function () { return this.getAttribute("RegionId"); },
        set: function (value) { this.setAttribute("RegionId", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    Object.defineProperty(Employee_Region.prototype, "RegionDescription", {
        get: function () { return this.getAttribute("RegionDescription"); },
        set: function (value) { this.setAttribute("RegionDescription", value); },
        enumerable: true,
        configurable: true
    });
    ;
    ;
    return Employee_Region;
}(zeidon.EntityInstance));
exports.Employee_Region = Employee_Region;
var EmployeeEntityPrototypes = {
    Employee: Employee_Employee.prototype,
    DirectReport: Employee_DirectReport.prototype,
    Supervisor: Employee_Supervisor.prototype,
    Territory: Employee_Territory.prototype,
    Region: Employee_Region.prototype,
};
exports.Employee_LodDef = {
    name: "Employee",
    entities: {
        Employee: {
            name: "Employee",
            erToken: "110000216",
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
                DirectReport: {},
                Supervisor: {},
                Territory: {},
            },
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
        DirectReport: {
            name: "DirectReport",
            erToken: "110000216",
            create: false,
            cardMax: 999999,
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
        Supervisor: {
            name: "Supervisor",
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
        Territory: {
            name: "Territory",
            erToken: "110000394",
            create: false,
            cardMax: 999999,
            hasInit: false,
            creatable: false,
            includable: true,
            deletable: false,
            excludable: true,
            updatable: false,
            parentDelete: false,
            childEntities: {
                Region: {},
            },
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
        Region: {
            name: "Region",
            erToken: "110000389",
            create: false,
            cardMax: 1,
            hasInit: false,
            creatable: false,
            includable: false,
            deletable: false,
            excludable: false,
            updatable: false,
            parentDelete: false,
            childEntities: {},
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
    }
};
//# sourceMappingURL=Employee.js.map