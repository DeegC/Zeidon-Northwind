import { ZeidonError } from './../app/zeidon';
import { Order } from "../app/lod/Order";
import { Product } from "../app/lod/Product";
import { Position, ObjectInstance } from '../app/zeidon';

describe( 'Entities', function () {
  beforeEach( () => {

  } );

  it( "should create entities with position.", function () {
    let product = instantiateProduct();
    expect( product.Product$.ProductId ).toBe( "77" );

    // Create entity.  Default is to do it at the end.
    product.Product.create( { ProductId: "1000" } );
    expect( product.Product.length ).toBe( 2 );
    expect( product.Product[ 0 ].ProductId ).toBe( "77" );
    expect( product.Product[ 1 ].ProductId ).toBe( "1000" );
    expect( product.Product$.ProductId ).toBe( "1000" );

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
    expect( product.Product$.ProductId ).toBe( "1000" );   // .last() resets currently selected.

    expect( product.Product.first().ProductId ).toBe( "1003" );
    expect( product.Product$.ProductId ).toBe( "1003" );   // .first() resets currently selected.

    product.Product.forEach( ( pei, idx ) => {
      expect( pei.ProductId ).toBe( product.Product[ idx ].ProductId );
    } );

    expect( () => { product.Product.create( { ProductId: "1004" }, { position: 100 } ) } )
      .toThrow( new ZeidonError( "Invailid position '100'.  Must be between 0 and 5" ) );
  } );

  it( "should correctly set entity incremental flags on create.", function () {
    let product = instantiateProduct();
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

  it( "should delete single entity.", function () {
    let product = instantiateProduct();
    expect( product.Product$.ProductId ).toBe( "77" );
    expect( product.Product$.deleted ).toBeFalsy();
    let productEi = product.Product$;

    productEi.delete();
    expect( productEi.deleted ).toBeTruthy();
    expect( product.Product.length ).toBe( 0 );

    // Make sure the deleted entity is still in the meta so it can be deleted.
    let meta = product.toZeidonMeta();
    expect( meta.OIs[ 0 ].Product[ 0 ][ ".meta" ].incrementals ).toBe( "D" );
    console.log( meta );
  } );

  it( "should remove created/deleted entity", function () {
    let product = instantiateProduct();
    expect( product.Product$.ProductId ).toBe( "77" );

    let productEi = product.Product.create( { ProductId: "1000" } );
    productEi.delete();
    expect( productEi.deleted ).toBeTruthy();
    expect( productEi.created ).toBeTruthy();
    expect( product.Product.length ).toBe( 1 );

    // Make sure the deleted entity is gone from meta.
    let meta = product.toZeidonMeta();
    expect( meta.OIs[ 0 ].Product.length ).toBe( 1 );
    console.log( meta );
  } );
} );

let instantiateProduct = function () {
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
          "locked": true,
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