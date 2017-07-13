
/*
  Generated from LOD Order

*/

import * as zeidon from './zeidon';
import { Observable } from 'rxjs';
import { Northwind_DomainList } from './Northwind-DomainList';
import { Northwind_DomainFunctions } from './Northwind-DomainFunctions';



// Order LOD.
export class Order extends zeidon.ObjectInstance {
    protected rootEntityName(): string { return "Order" };

    public getApplicationName(): String { return "Northwind" };

    getPrototype(entityName: string): any {
        return OrderEntityPrototypes[entityName];
    }

    public getLodDef() {
        return Order_LodDef;
    };

    public getDomain( name: string ): zeidon.Domain { 
        return Northwind_DomainList[name];
    };

    public getDomainFunctions( name: string ): any { 
        return Northwind_DomainFunctions[name];
    }


    get Order(): zeidon.EntityArray<Order_Order> {
        return this.roots as zeidon.EntityArray<Order_Order>;
    }

    get Order$(): Order_Order {
        return this.roots.selected() as Order_Order;
    }

    public static activate( qual?: any ): Observable<Order> {
        return zeidon.ObjectInstance.activateOi( new Order(), qual );
    }
}


export class Order_Order extends zeidon.EntityInstance {
    public get entityName(): string { return "Order" };

    get OrderId(): string { return this.getAttribute("OrderId") };
    set OrderId(value: string) { this.setAttribute("OrderId", value) };

    get OrderDate(): string { return this.getAttribute("OrderDate") };
    set OrderDate(value: string) { this.setAttribute("OrderDate", value) };

    get ShippedDate(): string { return this.getAttribute("ShippedDate") };
    set ShippedDate(value: string) { this.setAttribute("ShippedDate", value) };

    get RequiredDate(): string { return this.getAttribute("RequiredDate") };
    set RequiredDate(value: string) { this.setAttribute("RequiredDate", value) };

    get Freight(): string { return this.getAttribute("Freight") };
    set Freight(value: string) { this.setAttribute("Freight", value) };

    get ShipName(): string { return this.getAttribute("ShipName") };
    set ShipName(value: string) { this.setAttribute("ShipName", value) };

    get ShipAddress(): string { return this.getAttribute("ShipAddress") };
    set ShipAddress(value: string) { this.setAttribute("ShipAddress", value) };

    get ShipCity(): string { return this.getAttribute("ShipCity") };
    set ShipCity(value: string) { this.setAttribute("ShipCity", value) };

    get ShipRegion(): string { return this.getAttribute("ShipRegion") };
    set ShipRegion(value: string) { this.setAttribute("ShipRegion", value) };

    get ShipPostalCode(): string { return this.getAttribute("ShipPostalCode") };
    set ShipPostalCode(value: string) { this.setAttribute("ShipPostalCode", value) };

    get ShipCountry(): string { return this.getAttribute("ShipCountry") };
    set ShipCountry(value: string) { this.setAttribute("ShipCountry", value) };

    get OrderDetail(): zeidon.EntityArray<Order_OrderDetail> {
        return this.getChildEntityArray("OrderDetail") as zeidon.EntityArray<Order_OrderDetail>;
    }

    get OrderDetail$(): Order_OrderDetail {
        return this.getChildEntityArray("OrderDetail").selected() as Order_OrderDetail;
    }

    get Customer(): zeidon.EntityArray<Order_Customer> {
        return this.getChildEntityArray("Customer") as zeidon.EntityArray<Order_Customer>;
    }

    get Customer$(): Order_Customer {
        return this.getChildEntityArray("Customer").selected() as Order_Customer;
    }

    get Employee(): zeidon.EntityArray<Order_Employee> {
        return this.getChildEntityArray("Employee") as zeidon.EntityArray<Order_Employee>;
    }

    get Employee$(): Order_Employee {
        return this.getChildEntityArray("Employee").selected() as Order_Employee;
    }

    get Shipper(): zeidon.EntityArray<Order_Shipper> {
        return this.getChildEntityArray("Shipper") as zeidon.EntityArray<Order_Shipper>;
    }

    get Shipper$(): Order_Shipper {
        return this.getChildEntityArray("Shipper").selected() as Order_Shipper;
    }
}

export class Order_OrderDetail extends zeidon.EntityInstance {
    public get entityName(): string { return "OrderDetail" };

    get UnitPrice(): string { return this.getAttribute("UnitPrice") };
    set UnitPrice(value: string) { this.setAttribute("UnitPrice", value) };

    get Quantity(): string { return this.getAttribute("Quantity") };
    set Quantity(value: string) { this.setAttribute("Quantity", value) };

    get Discount(): string { return this.getAttribute("Discount") };
    set Discount(value: string) { this.setAttribute("Discount", value) };

    get Product(): zeidon.EntityArray<Order_Product> {
        return this.getChildEntityArray("Product") as zeidon.EntityArray<Order_Product>;
    }

    get Product$(): Order_Product {
        return this.getChildEntityArray("Product").selected() as Order_Product;
    }
}

export class Order_Product extends zeidon.EntityInstance {
    public get entityName(): string { return "Product" };

    get ProductId(): string { return this.getAttribute("ProductId") };
    set ProductId(value: string) { this.setAttribute("ProductId", value) };

    get ProductName(): string { return this.getAttribute("ProductName") };
    set ProductName(value: string) { this.setAttribute("ProductName", value) };

    get ReorderLevel(): string { return this.getAttribute("ReorderLevel") };
    set ReorderLevel(value: string) { this.setAttribute("ReorderLevel", value) };

    get QuantityPerUnit(): string { return this.getAttribute("QuantityPerUnit") };
    set QuantityPerUnit(value: string) { this.setAttribute("QuantityPerUnit", value) };

    get Discontinued(): string { return this.getAttribute("Discontinued") };
    set Discontinued(value: string) { this.setAttribute("Discontinued", value) };

    get UnitPrice(): string { return this.getAttribute("UnitPrice") };
    set UnitPrice(value: string) { this.setAttribute("UnitPrice", value) };

    get UnitsInStock(): string { return this.getAttribute("UnitsInStock") };
    set UnitsInStock(value: string) { this.setAttribute("UnitsInStock", value) };

    get UnitsOnOrder(): string { return this.getAttribute("UnitsOnOrder") };
    set UnitsOnOrder(value: string) { this.setAttribute("UnitsOnOrder", value) };
}

export class Order_Customer extends zeidon.EntityInstance {
    public get entityName(): string { return "Customer" };

    get CustomerId(): string { return this.getAttribute("CustomerId") };
    set CustomerId(value: string) { this.setAttribute("CustomerId", value) };

    get CompanyName(): string { return this.getAttribute("CompanyName") };
    set CompanyName(value: string) { this.setAttribute("CompanyName", value) };

    get ContactName(): string { return this.getAttribute("ContactName") };
    set ContactName(value: string) { this.setAttribute("ContactName", value) };

    get ContactTitle(): string { return this.getAttribute("ContactTitle") };
    set ContactTitle(value: string) { this.setAttribute("ContactTitle", value) };

    get Address(): string { return this.getAttribute("Address") };
    set Address(value: string) { this.setAttribute("Address", value) };

    get City(): string { return this.getAttribute("City") };
    set City(value: string) { this.setAttribute("City", value) };

    get Region(): string { return this.getAttribute("Region") };
    set Region(value: string) { this.setAttribute("Region", value) };

    get PostalCode(): string { return this.getAttribute("PostalCode") };
    set PostalCode(value: string) { this.setAttribute("PostalCode", value) };

    get Country(): string { return this.getAttribute("Country") };
    set Country(value: string) { this.setAttribute("Country", value) };

    get Phone(): string { return this.getAttribute("Phone") };
    set Phone(value: string) { this.setAttribute("Phone", value) };

    get Fax(): string { return this.getAttribute("Fax") };
    set Fax(value: string) { this.setAttribute("Fax", value) };
}

export class Order_Employee extends zeidon.EntityInstance {
    public get entityName(): string { return "Employee" };

    get EmployeeId(): string { return this.getAttribute("EmployeeId") };
    set EmployeeId(value: string) { this.setAttribute("EmployeeId", value) };

    get LastName(): string { return this.getAttribute("LastName") };
    set LastName(value: string) { this.setAttribute("LastName", value) };

    get FirstName(): string { return this.getAttribute("FirstName") };
    set FirstName(value: string) { this.setAttribute("FirstName", value) };

    get Title(): string { return this.getAttribute("Title") };
    set Title(value: string) { this.setAttribute("Title", value) };

    get TitleOfCourtesy(): string { return this.getAttribute("TitleOfCourtesy") };
    set TitleOfCourtesy(value: string) { this.setAttribute("TitleOfCourtesy", value) };

    get BirthDate(): string { return this.getAttribute("BirthDate") };
    set BirthDate(value: string) { this.setAttribute("BirthDate", value) };

    get HireDate(): string { return this.getAttribute("HireDate") };
    set HireDate(value: string) { this.setAttribute("HireDate", value) };

    get HomePhone(): string { return this.getAttribute("HomePhone") };
    set HomePhone(value: string) { this.setAttribute("HomePhone", value) };

    get Address(): string { return this.getAttribute("Address") };
    set Address(value: string) { this.setAttribute("Address", value) };

    get City(): string { return this.getAttribute("City") };
    set City(value: string) { this.setAttribute("City", value) };

    get Region(): string { return this.getAttribute("Region") };
    set Region(value: string) { this.setAttribute("Region", value) };

    get PostalCode(): string { return this.getAttribute("PostalCode") };
    set PostalCode(value: string) { this.setAttribute("PostalCode", value) };

    get Country(): string { return this.getAttribute("Country") };
    set Country(value: string) { this.setAttribute("Country", value) };

    get Extension(): string { return this.getAttribute("Extension") };
    set Extension(value: string) { this.setAttribute("Extension", value) };

    get Notes(): string { return this.getAttribute("Notes") };
    set Notes(value: string) { this.setAttribute("Notes", value) };

    get Photo(): string { return this.getAttribute("Photo") };
    set Photo(value: string) { this.setAttribute("Photo", value) };

    get PhotoPath(): string { return this.getAttribute("PhotoPath") };
    set PhotoPath(value: string) { this.setAttribute("PhotoPath", value) };

    get Salary(): string { return this.getAttribute("Salary") };
    set Salary(value: string) { this.setAttribute("Salary", value) };
}

export class Order_Shipper extends zeidon.EntityInstance {
    public get entityName(): string { return "Shipper" };

    get ShipperId(): string { return this.getAttribute("ShipperId") };
    set ShipperId(value: string) { this.setAttribute("ShipperId", value) };

    get CompanyName(): string { return this.getAttribute("CompanyName") };
    set CompanyName(value: string) { this.setAttribute("CompanyName", value) };

    get Phone(): string { return this.getAttribute("Phone") };
    set Phone(value: string) { this.setAttribute("Phone", value) };
}

const OrderEntityPrototypes = {
    Order: Order_Order.prototype, 
    OrderDetail: Order_OrderDetail.prototype, 
    Product: Order_Product.prototype, 
    Customer: Order_Customer.prototype, 
    Employee: Order_Employee.prototype, 
    Shipper: Order_Shipper.prototype, 
}

export const Order_LodDef = {
    name: "Order",
    entities: {
        Order: {
            name:       "Order",
            erToken:    "110000286",
            create:     true,
            cardMax:    0,
            hasInit:    false,
            creatable:  true,
            includable: false,
            deletable:  true,
            excludable: false,
            updatable:  true,
            parentDelete: true,
            childEntities: {
                OrderDetail: {},
                Customer: {},
                Employee: {},
                Shipper: {},
            },
            attributes: {
                OrderId: {
                    name:         "OrderId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                OrderDate: {
                    name:         "OrderDate",
                    hidden:       false,
                    required:     false,
                    domainName:   "DateTime",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShippedDate: {
                    name:         "ShippedDate",
                    hidden:       false,
                    required:     false,
                    domainName:   "DateTime",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                RequiredDate: {
                    name:         "RequiredDate",
                    hidden:       false,
                    required:     false,
                    domainName:   "DateTime",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Freight: {
                    name:         "Freight",
                    hidden:       false,
                    required:     false,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipName: {
                    name:         "ShipName",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipAddress: {
                    name:         "ShipAddress",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipCity: {
                    name:         "ShipCity",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipRegion: {
                    name:         "ShipRegion",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipPostalCode: {
                    name:         "ShipPostalCode",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ShipCountry: {
                    name:         "ShipCountry",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                EMPLOYEEID: {
                    name:         "EMPLOYEEID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
                CUSTOMERID: {
                    name:         "CUSTOMERID",
                    hidden:       true,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
                SHIPPERID: {
                    name:         "SHIPPERID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

        OrderDetail: {
            name:       "OrderDetail",
            erToken:    "110000399",
            create:     true,
            cardMax:    999999,
            hasInit:    false,
            creatable:  true,
            includable: false,
            deletable:  true,
            excludable: false,
            updatable:  true,
            parentDelete: true,
            childEntities: {
                Product: {},
            },
            attributes: {
                UnitPrice: {
                    name:         "UnitPrice",
                    hidden:       false,
                    required:     true,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Quantity: {
                    name:         "Quantity",
                    hidden:       false,
                    required:     true,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Discount: {
                    name:         "Discount",
                    hidden:       false,
                    required:     true,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PRODUCTID: {
                    name:         "PRODUCTID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   true,
                },
                ORDERID: {
                    name:         "ORDERID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

        Product: {
            name:       "Product",
            erToken:    "110000054",
            create:     false,
            cardMax:    1,
            hasInit:    false,
            creatable:  false,
            includable: true,
            deletable:  false,
            excludable: true,
            updatable:  false,
            parentDelete: false,
            childEntities: {
            },
            attributes: {
                ProductId: {
                    name:         "ProductId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                ProductName: {
                    name:         "ProductName",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ReorderLevel: {
                    name:         "ReorderLevel",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                QuantityPerUnit: {
                    name:         "QuantityPerUnit",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Discontinued: {
                    name:         "Discontinued",
                    hidden:       false,
                    required:     true,
                    domainName:   "Boolean",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                UnitPrice: {
                    name:         "UnitPrice",
                    hidden:       false,
                    required:     false,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                UnitsInStock: {
                    name:         "UnitsInStock",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                UnitsOnOrder: {
                    name:         "UnitsOnOrder",
                    hidden:       false,
                    required:     false,
                    domainName:   "Integer",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                SUPPLIERID: {
                    name:         "SUPPLIERID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
                CATEGORYID: {
                    name:         "CATEGORYID",
                    hidden:       true,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

        Customer: {
            name:       "Customer",
            erToken:    "110000238",
            create:     false,
            cardMax:    1,
            hasInit:    false,
            creatable:  false,
            includable: true,
            deletable:  false,
            excludable: true,
            updatable:  false,
            parentDelete: false,
            childEntities: {
            },
            attributes: {
                CustomerId: {
                    name:         "CustomerId",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                CompanyName: {
                    name:         "CompanyName",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ContactName: {
                    name:         "ContactName",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ContactTitle: {
                    name:         "ContactTitle",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Address: {
                    name:         "Address",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                City: {
                    name:         "City",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Region: {
                    name:         "Region",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PostalCode: {
                    name:         "PostalCode",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Country: {
                    name:         "Country",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Phone: {
                    name:         "Phone",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Fax: {
                    name:         "Fax",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
            }
        },

        Employee: {
            name:       "Employee",
            erToken:    "110000216",
            create:     false,
            cardMax:    1,
            hasInit:    false,
            creatable:  false,
            includable: true,
            deletable:  false,
            excludable: true,
            updatable:  false,
            parentDelete: false,
            childEntities: {
            },
            attributes: {
                EmployeeId: {
                    name:         "EmployeeId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                LastName: {
                    name:         "LastName",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                FirstName: {
                    name:         "FirstName",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Title: {
                    name:         "Title",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                TitleOfCourtesy: {
                    name:         "TitleOfCourtesy",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                BirthDate: {
                    name:         "BirthDate",
                    hidden:       false,
                    required:     false,
                    domainName:   "Date",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                HireDate: {
                    name:         "HireDate",
                    hidden:       false,
                    required:     false,
                    domainName:   "Date",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                HomePhone: {
                    name:         "HomePhone",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Address: {
                    name:         "Address",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                City: {
                    name:         "City",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Region: {
                    name:         "Region",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PostalCode: {
                    name:         "PostalCode",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Country: {
                    name:         "Country",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Extension: {
                    name:         "Extension",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Notes: {
                    name:         "Notes",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Photo: {
                    name:         "Photo",
                    hidden:       false,
                    required:     false,
                    domainName:   "Blob",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                PhotoPath: {
                    name:         "PhotoPath",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Salary: {
                    name:         "Salary",
                    hidden:       false,
                    required:     false,
                    domainName:   "Double",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                ReportsTo: {
                    name:         "ReportsTo",
                    hidden:       true,
                    required:     false,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   true,
                },
            }
        },

        Shipper: {
            name:       "Shipper",
            erToken:    "110000337",
            create:     false,
            cardMax:    1,
            hasInit:    false,
            creatable:  false,
            includable: true,
            deletable:  false,
            excludable: true,
            updatable:  false,
            parentDelete: false,
            childEntities: {
            },
            attributes: {
                ShipperId: {
                    name:         "ShipperId",
                    hidden:       false,
                    required:     true,
                    domainName:   "GeneratedKey",
                    persistent:   true,
                    key:          true,
                    update:       true,
                    foreignKey:   false,
                },
                CompanyName: {
                    name:         "CompanyName",
                    hidden:       false,
                    required:     true,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
                Phone: {
                    name:         "Phone",
                    hidden:       false,
                    required:     false,
                    domainName:   "Text",
                    persistent:   true,
                    key:          false,
                    update:       true,
                    foreignKey:   false,
                },
            }
        },

    }
}
