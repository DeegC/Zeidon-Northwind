import { ZeidonError } from './../app/zeidon';
import { Order } from "../app/lod/Order";
import { Product } from "../app/lod/Product";
import { Position, ObjectInstance } from '../app/zeidon';

describe( 'Entities', function () {
  beforeEach( () => {

  } );

  it( "should create new OI.", function () {
    let product = new Product();
    product.Product.create();
    expect( product.Product$.ProductId ).toBeUndefined();
    expect( product.Product$.Category ).toBeTruthy();
    expect( product.Product$.Category.length ).toBe( 0 );
    expect( product.Product$.Category$ ).toBeUndefined();
    expect( product.Product$.Supplier.length ).toBe( 0 );
    expect( product.Product$.Supplier$ ).toBeUndefined();
  })

  it( "should create entities with position.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( product.Product$.Category$.CategoryId ).toBe( "2" );
    expect( product.Product$.Category.length ).toBe( 1 );

    // Create entity.  Default is to do it at the end.
    product.Product.create( { ProductId: "1000" } );
    expect( product.Product.length ).toBe( 2 );
    expect( product.Product[ 0 ].ProductId ).toBe( "77" );
    expect( product.Product[ 1 ].ProductId ).toBe( "1000" );
    expect( product.Product$.ProductId ).toBe( "1000" );
    expect( product.Product$.Category.length ).toBe( 0 );
    expect( product.Product$.Category.first( true ) ).toBeUndefined();
    expect( product.Product$.Category.last( true ) ).toBeUndefined();
    expect( product.Product$.Category$ ).toBeUndefined();

    product.Product.create( { ProductId: "1001" }, { position: Position.First } );
    expect( product.Product.length ).toBe( 3 );
    expect( product.Product[ 0 ].ProductId ).toBe( "1001" );
    expect( product.Product[ 2 ].ProductId ).toBe( "1000" );
    expect( product.Product$.ProductId ).toBe( "1001" );

    product.Product.create( { ProductId: "1002" }, { position: Position.Next } );
    expect( product.Product.length ).toBe( 4 );
    expect( product.Product[ 0 ].ProductId ).toBe( "1001" );

    product.Product.create( { ProductId: "1003" }, { position: 0 } );
    expect( product.Product[ 0 ].ProductId ).toBe( "1003" );
    expect( product.Product$.ProductId ).toBe( "1003" );

    expect( product.Product.last().ProductId ).toBe( "1000" );
    expect( product.Product$.ProductId ).toBe( "1003" );

    expect( product.Product.first().ProductId ).toBe( "1003" );
    expect( product.Product$.ProductId ).toBe( "1003" );

    product.Product.forEach( ( pei, idx ) => {
      expect( pei.ProductId ).toBe( product.Product[ idx ].ProductId );
    } );

    expect( () => { product.Product.create( { ProductId: "1004" }, { position: 100 } ) } )
      .toThrow( new ZeidonError( "Invailid position '100'.  Must be between 0 and 5" ) );
  } );

  it( "should correctly set entity incremental flags on create.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( product.Product$.created ).toBeFalsy();
    expect( product.Product$.updated ).toBeFalsy();
    expect( product.Product$.deleted ).toBeFalsy();
    expect( product.Product$.excluded ).toBeFalsy();
    expect( product.Product$.included ).toBeFalsy();

    // Create entity.  Default is to do it at the end.
    product.Product.create( { ProductId: "1000" } );
    expect( product.Product$.created ).toBeTruthy();
    expect( product.Product$.updated ).toBeTruthy();
    expect( product.Product$.deleted ).toBeFalsy();
    expect( product.Product$.excluded ).toBeFalsy();
    expect( product.Product$.included ).toBeFalsy();
  } );

  it( "should not allow updates when OI is readonly.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    product.readOnly = true;
    expect( () => { product.Product.create( { ProductId: "1000" } ) } )
      .toThrow( new ZeidonError( `This OI is read-only.` ) );
    expect( () => { product.Product$.delete() } )
      .toThrow( new ZeidonError( `This OI is read-only.` ) );
    expect( () => { product.Product$.Supplier$.exclude() } )
      .toThrow( new ZeidonError( `This OI is read-only.` ) );
    expect( () => { product.Product$.Supplier.include( product.Product$.Supplier$ ) } )
      .toThrow( new ZeidonError( `This OI is read-only.` ) );
  } );

  it( "should not allow delete on entity without delete authority.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( () => { product.Product$.Supplier$.delete() } )
      .toThrow( new ZeidonError( `Entity Supplier does not have delete authority.` ) );

    let order = instantiateOrder10248();
    expect( () => { order.Order$.OrderDetail$.Product$.Category$.delete() } )
      .toThrow( new ZeidonError( `Entity Category does not have delete authority.` ) );
  } );

  it( "should not allow create on entity without delete authority.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( () => { product.Product$.Supplier.create() } )
      .toThrow( new ZeidonError( `Entity Supplier does not have create authority.` ) );
  } );

  it( "should check for multiple include errors.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    let order = instantiateOrder10248();
    expect( order.Order$.OrderId ).toBe( "10248" );
    expect( () => { order.Order$.OrderDetail$.Product$.Category.include( product.Product$.Category$ ) } )
      .toThrow( new ZeidonError( `Entity Category does not have include authority.` ) );
    expect( () => { order.Order$.OrderDetail$.Product.include( product.Product$.Category$ ) } )
      .toThrow( new ZeidonError( `Entities Product and Category are not the same ER entity.` ) );
    expect( () => { order.Order$.OrderDetail$.Product.include( product.Product$ ) } )
      .toThrow( new ZeidonError( `Including a new instance for Product voilates max cardinality.` ) );
  } );

  it( "should perform include.", function () {
    let product = instantiateProduct77();
    let order = instantiateOrder10248();
    order.Order$.OrderDetail.create();
    order.Order$.OrderDetail$.Product.include( product.Product$ );
    expect( order.Order$.OrderDetail$.Product$.ProductId ).toBe( "77" );
    expect( order.Order$.OrderDetail$.Product$.Category$.CategoryId ).toBe( "2" );
    expect( order.Order$.OrderDetail$.Product$.included ).toBeTruthy();
    expect( order.Order$.OrderDetail$.Product$.updated ).toBeFalsy();
    expect( order.Order$.OrderDetail$.Product$.deleted ).toBeFalsy();
    expect( order.Order$.OrderDetail$.Product$.excluded ).toBeFalsy();
    expect( order.Order$.OrderDetail$.Product$.created ).toBeFalsy();
    expect( product.Product$.included ).toBeFalsy();
    expect( product.Product$.created ).toBeFalsy();
    expect( product.Product$.updated ).toBeFalsy();
    expect( product.Product$.deleted ).toBeFalsy();
    expect( product.Product$.excluded ).toBeFalsy();

    expect( order.Order$.OrderDetail$.Product$.ReorderLevel ).toBe( 15 );
    expect( order.Order$.OrderDetail$.Product$.updated ).toBeFalsy();
    product.Product$.ReorderLevel = 20;
    expect( order.Order$.OrderDetail$.Product$.ReorderLevel ).toBe( 20 );
    expect( order.Order$.OrderDetail$.Product$.updated ).toBeTruthy();
  } );

  it( "should delete single entity.", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( product.Product$.deleted ).toBeFalsy();
    let productEi = product.Product$;
    let supplierEi = product.Product$.Supplier$;
    let categoryEi = product.Product$.Category$;

    productEi.delete();
    expect( productEi.deleted ).toBeTruthy();
    expect( product.Product.length ).toBe( 0 );
    expect( supplierEi.deleted ).toBeFalsy();
    expect( supplierEi.excluded ).toBeTruthy();

    // Make sure the deleted entity is still in the meta so it can be deleted.
    let meta = product.toZeidonMeta();
    expect( meta.OIs[ 0 ].Product[ 0 ][ ".meta" ].incrementals ).toBe( "D" );
  } );

  it( "should remove created/deleted entity", function () {
    let product = instantiateProduct77();
    expect( product.Product$.ProductId ).toBe( "77" );

    let productEi = product.Product.create( { ProductId: "1000" } );
    productEi.delete();
    expect( productEi.deleted ).toBeTruthy();
    expect( productEi.created ).toBeTruthy();
    expect( product.Product.length ).toBe( 1 );

    // Make sure the deleted entity is gone from meta.
    let meta = product.toZeidonMeta();
    expect( meta.OIs[ 0 ].Product.length ).toBe( 1 );
  } );
} );

let instantiateProduct77 = function () {
  let product = new Product();
  product.createFromJson(
    {
      ".meta": {
        "version": "1"
      },
      "OIs": [ {
        ".oimeta": {
          "application": "Northwind",
          "odName": "Product",
          "incremental": true,
          "totalRootCount": 1
        },
        "Product": [ {
          "ProductId": "77",
          "ProductName": "Original Frankfurter gr�ne So�e",
          "ReorderLevel": 15,
          "QuantityPerUnit": "12 boxes",
          "Discontinued": false,
          "UnitPrice": 17.0,
          "UnitsInStock": 29,
          "UnitsOnOrder": 0,
          "SUPPLIERID": "12",
          "CATEGORYID": "2",
          "Supplier": [ {
            "SupplierId": "12",
            "CompanyName": "Plutzer Lebensmittelgro�m�rkte AG",
            "ContactName": "Martin Bein",
            "ContactTitle": "International Marketing Mgr.",
            "Phone": "(069) 992755",
            "Address": "Bogenallee 51",
            "City": "Frankfurt",
            "PostalCode": "60439",
            "Country": "Germany",
            "HomePage": "Plutzer (on the World Wide Web)#http://www.microsoft.com/accessdev/sampleapps/plutzer.htm#"
          }],
          "Category": [ {
            "CategoryId": "2",
            "CategoryName": "Condiments",
            "Description": "Sweet and savory sauces, relishes, spreads, and seasonings"
          }]
        }]
      }]
    }, { incrementalsSpecified: true } );

  return product;
}

let instantiateOrder10248 = function () {
  let order = new Order();
  order.createFromJson(
    {
      ".meta": {
        "version": "1"
      },
      "OIs": [ {
        ".oimeta": {
          "application": "Northwind",
          "odName": "Order",
          "incremental": true,
          "totalRootCount": 1
        },
        "Order": [ {
          "OrderId": "10248",
          "OrderDate": "1996-07-04T00:00:00.000-04:00",
          "ShippedDate": "1996-07-16T00:00:00.000-04:00",
          "RequiredDate": "1996-08-01T00:00:00.000-04:00",
          "Freight": 32.38,
          "ShipName": "Vins et alcools Chevalier",
          "ShipAddress": "59 rue de l-Abbaye",
          "ShipCity": "Reims",
          "ShipPostalCode": "51100",
          "ShipCountry": "France",
          "EMPLOYEEID": "5",
          "CUSTOMERID": "VINET",
          "SHIPPERID": "3",
          "OrderDetail": [ {
            "UnitPrice": 14.0,
            "Quantity": 12,
            "Discount": 0.0,
            "PRODUCTID": "11",
            "ORDERID": "10248",
            "Product": [ {
              "ProductId": "11",
              "ProductName": "Queso Cabrales",
              "ReorderLevel": 30,
              "QuantityPerUnit": "1 kg pkg.",
              "Discontinued": false,
              "UnitPrice": 21.0,
              "UnitsInStock": 22,
              "UnitsOnOrder": 30,
              "SUPPLIERID": "5",
              "CATEGORYID": "4",
              "Category": [ {
                "CategoryId": "4",
                "CategoryName": "Dairy Products",
                "Description": "Cheeses",
              }]
            }]
          }, {
            "UnitPrice": 9.8,
            "Quantity": 10,
            "Discount": 0.0,
            "PRODUCTID": "42",
            "ORDERID": "10248",
            "Product": [ {
              "ProductId": "42",
              "ProductName": "Singaporean Hokkien Fried Mee",
              "ReorderLevel": 0,
              "QuantityPerUnit": "32 - 1 kg pkgs.",
              "Discontinued": true,
              "UnitPrice": 14.0,
              "UnitsInStock": 26,
              "UnitsOnOrder": 0,
              "SUPPLIERID": "20",
              "CATEGORYID": "5",
              "Category": [ {
                "CategoryId": "5",
                "CategoryName": "Grains/Cereals",
                "Description": "Breads, crackers, pasta, and cereal",
              }]
            }]
          }, {
            "UnitPrice": 34.8,
            "Quantity": 5,
            "Discount": 0.0,
            "PRODUCTID": "72",
            "ORDERID": "10248",
            "Product": [ {
              "ProductId": "72",
              "ProductName": "Mozzarella di Giovanni",
              "ReorderLevel": 0,
              "QuantityPerUnit": "24 - 200 g pkgs.",
              "Discontinued": false,
              "UnitPrice": 34.8,
              "UnitsInStock": 14,
              "UnitsOnOrder": 0,
              "SUPPLIERID": "14",
              "CATEGORYID": "4",
              "Category": [ {
                "CategoryId": "4",
                "CategoryName": "Dairy Products",
                "Description": "Cheeses",
              }]
            }]
          }],
          "Customer": [ {
            "CustomerId": "VINET",
            "CompanyName": "Vins et alcools Chevalier",
            "ContactName": "Paul Henriot",
            "ContactTitle": "Accounting Manager",
            "Address": "59 rue de l'Abbaye",
            "City": "Reims",
            "PostalCode": "51100",
            "Country": "France",
            "Phone": "26.47.15.10",
            "Fax": "26.47.15.11"
          }],
          "Employee": [ {
            "EmployeeId": "5",
            "LastName": "Buchanan",
            "FirstName": "Steven",
            "Title": "Sales Manager",
            "TitleOfCourtesy": "Mr.",
            "ReportsTo": "2"
          }],
          "Shipper": [ {
            "ShipperId": "3",
            "CompanyName": "Federal Shipping",
            "Phone": "(503) 555-9931"
          }]
        }]
      }]
    }, { incrementalsSpecified: true } );
  return order;
}