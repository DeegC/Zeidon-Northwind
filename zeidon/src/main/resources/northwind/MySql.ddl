/* CREATE DATABASE MySql */ ;
USE MySql ;
DROP TABLE IF EXISTS categories ;
DROP TABLE IF EXISTS customers ;
DROP TABLE IF EXISTS CUSTOMERDEMOGRAPHICS ;
DROP TABLE IF EXISTS employees ;
DROP TABLE IF EXISTS NORTHWIND ;
DROP TABLE IF EXISTS orders ;
DROP TABLE IF EXISTS orderdetails ;
DROP TABLE IF EXISTS products ;
DROP TABLE IF EXISTS regions ;
DROP TABLE IF EXISTS shippers ;
DROP TABLE IF EXISTS suppliers ;
DROP TABLE IF EXISTS territories ;
DROP TABLE IF EXISTS ZEIDONLOCKING ;
DROP TABLE IF EXISTS EMPLOYEETERRITORIES ;
DROP TABLE IF EXISTS CUSTOMERCUSTOMERDEMO ;

/* Entity - Category */
CREATE TABLE categories ( 
           CATEGORYID                       SERIAL             NOT NULL, 
           CATEGORYNAME                     varchar( 15 )      NOT NULL, 
           DESCRIPTION                      longtext           NULL    , 
           PICTURE                          longblob           NULL     ) ;
 
/* Entity - Customer */
CREATE TABLE customers ( 
           CUSTOMERID                       varchar( 5 )       NOT NULL, 
           COMPANYNAME                      varchar( 40 )      NULL    , 
           CONTACTNAME                      varchar( 30 )      NULL    , 
           CONTACTTITLE                     varchar( 30 )      NULL    , 
           ADDRESS                          varchar( 60 )      NULL    , 
           CITY                             varchar( 15 )      NULL    , 
           REGION                           varchar( 15 )      NULL    , 
           POSTALCODE                       varchar( 15 )      NULL    , 
           COUNTRY                          varchar( 15 )      NULL    , 
           PHONE                            varchar( 24 )      NULL    , 
           FAX                              varchar( 24 )      NULL     ) ;
 
/* Entity - CustomerDemographics */
CREATE TABLE CUSTOMERDEMOGRAPHICS ( 
           CUSTOMERTYPEID                   varchar( 10 )      NOT NULL, 
           CUSTOMERDESC                     longtext           NULL     ) ;
 
/* Entity - Employee */
CREATE TABLE employees ( 
           EMPLOYEEID                       SERIAL             NOT NULL, 
           LASTNAME                         varchar( 20 )      NOT NULL, 
           FIRSTNAME                        varchar( 10 )      NOT NULL, 
           TITLE                            varchar( 30 )      NULL    , 
           TITLEOFCOURTESY                  varchar( 25 )      NULL    , 
           BIRTHDATE                        datetime           NULL    , 
           HIREDATE                         datetime           NULL    , 
           HOMEPHONE                        varchar( 24 )      NULL    , 
           ADDRESS                          varchar( 60 )      NULL    , 
           CITY                             varchar( 15 )      NULL    , 
           REGION                           varchar( 15 )      NULL    , 
           POSTALCODE                       varchar( 10 )      NULL    , 
           COUNTRY                          varchar( 15 )      NULL    , 
           EXTENSION                        varchar( 4 )       NULL    , 
           NOTES                            longtext           NOT NULL, 
           PHOTO                            longblob           NULL    , 
           PHOTOPATH                        longtext           NULL    , 
           SALARY                           double             NULL    , 
           ReportsTo                        INTEGER            NULL     ) ;
 
/* Entity - Northwind */
CREATE TABLE NORTHWIND ( 
           ID                               SERIAL             NOT NULL ) ;
 
/* Entity - Order */
CREATE TABLE orders ( 
           ORDERID                          SERIAL             NOT NULL, 
           ORDERDATE                        datetime           NULL    , 
           SHIPPEDDATE                      datetime           NULL    , 
           REQUIREDDATE                     datetime           NULL    , 
           FREIGHT                          double             NULL    , 
           SHIPNAME                         varchar( 40 )      NULL    , 
           SHIPADDRESS                      varchar( 60 )      NULL    , 
           SHIPCITY                         varchar( 15 )      NULL    , 
           SHIPREGION                       varchar( 15 )      NULL    , 
           SHIPPOSTALCODE                   varchar( 10 )      NULL    , 
           SHIPCOUNTRY                      varchar( 15 )      NULL    , 
           EMPLOYEEID                       INTEGER            NOT NULL, 
           CUSTOMERID                       varchar( 5 )       NOT NULL, 
           SHIPPERID                        INTEGER            NOT NULL ) ;
 
/* Entity - OrderDetail */
CREATE TABLE orderdetails ( 
           UNITPRICE                        double             NOT NULL, 
           QUANTITY                         int                NOT NULL, 
           DISCOUNT                         double             NOT NULL, 
           PRODUCTID                        INTEGER            NOT NULL, 
           ORDERID                          INTEGER            NOT NULL ) ;
 
/* Entity - Product */
CREATE TABLE products ( 
           PRODUCTID                        SERIAL             NOT NULL, 
           PRODUCTNAME                      varchar( 40 )      NOT NULL, 
           REORDERLEVEL                     int                NULL    , 
           QUANTITYPERUNIT                  varchar( 20 )      NULL    , 
           DISCONTINUED                     int                NOT NULL, 
           UNITPRICE                        double             NULL    , 
           UNITSINSTOCK                     int                NULL    , 
           UNITSONORDER                     int                NULL    , 
           SUPPLIERID                       INTEGER            NOT NULL, 
           CATEGORYID                       INTEGER            NOT NULL ) ;
 
/* Entity - Region */
CREATE TABLE regions ( 
           REGIONID                         SERIAL             NOT NULL, 
           REGIONDESCRIPTION                varchar( 50 )      NOT NULL ) ;
 
/* Entity - Shipper */
CREATE TABLE shippers ( 
           SHIPPERID                        SERIAL             NOT NULL, 
           COMPANYNAME                      varchar( 40 )      NOT NULL, 
           PHONE                            varchar( 24 )      NULL     ) ;
 
/* Entity - Supplier */
CREATE TABLE suppliers ( 
           SUPPLIERID                       SERIAL             NOT NULL, 
           COMPANYNAME                      varchar( 40 )      NOT NULL, 
           CONTACTNAME                      varchar( 30 )      NULL    , 
           CONTACTTITLE                     varchar( 30 )      NULL    , 
           PHONE                            varchar( 24 )      NULL    , 
           FAX                              varchar( 24 )      NULL    , 
           ADDRESS                          varchar( 60 )      NULL    , 
           CITY                             varchar( 15 )      NULL    , 
           REGION                           varchar( 15 )      NULL    , 
           POSTALCODE                       varchar( 15 )      NULL    , 
           COUNTRY                          varchar( 15 )      NULL    , 
           HOMEPAGE                         longtext           NULL     ) ;
 
/* Entity - Territory */
CREATE TABLE territories ( 
           TERRITORYID                      varchar( 20 )      NOT NULL, 
           TERRITORYDESCRIPTION             varchar( 50 )      NOT NULL, 
           REGIONID                         INTEGER            NOT NULL ) ;
 
/* Entity - ZeidonLocking */
CREATE TABLE ZEIDONLOCKING ( 
           LOD_NAME                         varchar( 35 )      NOT NULL, 
           KEYVALUE                         varchar( 200 )     NOT NULL, 
           USERNAME                         varchar( 32 )      NULL    , 
           ALLOWREAD                        int                NULL    , 
           z_TIMESTAMP                      datetime           NOT NULL, 
           ID                               int                NULL     ) ;
 
CREATE TABLE EMPLOYEETERRITORIES ( 
           TerritoryId                      varchar( 20 )      NOT NULL, 
           EmployeeId                       INTEGER            NOT NULL ) ;
 
CREATE TABLE CUSTOMERCUSTOMERDEMO ( 
           CustomerTypeId                   varchar( 10 )      NOT NULL, 
           CUSTOMERID                       varchar( 5 )       NOT NULL ) ;
 
/* Main key for Entity - Category */
CREATE UNIQUE INDEX Ucategories_ID_17690 
       ON categories ( 
           CATEGORYID ) ;
 
 
/* Main key for Entity - Customer */
CREATE UNIQUE INDEX Ucustomers_ID_17750 
       ON customers ( 
           CUSTOMERID ) ;
 
 
/* Main key for Entity - CustomerDemographics */
CREATE UNIQUE INDEX UCUSTOMERDEMOGRAPHICS_ID_17880 
       ON CUSTOMERDEMOGRAPHICS ( 
           CUSTOMERTYPEID ) ;
 
 
/* Main key for Entity - Employee */
CREATE UNIQUE INDEX Uemployees_ID_17920 
       ON employees ( 
           EMPLOYEEID ) ;
 
 
/* Index for Relationship - 'employees(has reports [0:m] ) employees' */
CREATE INDEX employees_ReportsTo_18780 
       ON employees ( 
           ReportsTo ) ;
 
 
/* Main key for Entity - Northwind */
CREATE UNIQUE INDEX UNORTHWIND_ID_18120 
       ON NORTHWIND ( 
           ID ) ;
 
 
/* Main key for Entity - Order */
CREATE UNIQUE INDEX Uorders_ID_18150 
       ON orders ( 
           ORDERID ) ;
 
 
/* Index for Relationship - 'employees(has [0:m] ) orders' */
CREATE INDEX orders_EMPLOYEEID_18770 
       ON orders ( 
           EMPLOYEEID ) ;
 
 
/* Index for Relationship - 'customers(has [0:m] ) orders' */
CREATE INDEX orders_CUSTOMERID_18820 
       ON orders ( 
           CUSTOMERID ) ;
 
 
/* Index for Relationship - 'shippers(has [0:m] ) orders' */
CREATE INDEX orders_SHIPPERID_18830 
       ON orders ( 
           SHIPPERID ) ;
 
 
/* Main key for Entity - OrderDetail */
CREATE UNIQUE INDEX Uorderdetails_PRODUCTID_18810 
       ON orderdetails ( 
           PRODUCTID, 
           ORDERID ) ;
 
 
/* Index for Relationship - 'products(has [0:m] ) orderdetails' */
CREATE INDEX orderdetails_PRODUCTID_18810 
       ON orderdetails ( 
           PRODUCTID ) ;
 
 
/* Index for Relationship - 'orders(has [0:m] ) orderdetails' */
CREATE INDEX orderdetails_ORDERID_18840 
       ON orderdetails ( 
           ORDERID ) ;
 
 
/* Main key for Entity - Product */
CREATE UNIQUE INDEX Uproducts_ID_18330 
       ON products ( 
           PRODUCTID ) ;
 
 
/* Index for Relationship - 'suppliers(has [0:m] ) products' */
CREATE INDEX products_SUPPLIERID_18790 
       ON products ( 
           SUPPLIERID ) ;
 
 
/* Index for Relationship - 'categories(has [0:m] ) products' */
CREATE INDEX products_CATEGORYID_18800 
       ON products ( 
           CATEGORYID ) ;
 
 
/* Main key for Entity - Region */
CREATE UNIQUE INDEX Uregions_ID_18430 
       ON regions ( 
           REGIONID ) ;
 
 
/* Main key for Entity - Shipper */
CREATE UNIQUE INDEX Ushippers_ID_18470 
       ON shippers ( 
           SHIPPERID ) ;
 
 
/* Main key for Entity - Supplier */
CREATE UNIQUE INDEX Usuppliers_ID_18520 
       ON suppliers ( 
           SUPPLIERID ) ;
 
 
/* Main key for Entity - Territory */
CREATE UNIQUE INDEX Uterritories_ID_18660 
       ON territories ( 
           TERRITORYID ) ;
 
 
/* Index for Relationship - 'REGION(has [0:m] ) territories' */
CREATE INDEX territories_REGIONID_18890 
       ON territories ( 
           REGIONID ) ;
 
 
/* Main key for Entity - ZeidonLocking */
CREATE UNIQUE INDEX UZEIDONLOCKING_LOCKINGKEY_18700 
       ON ZEIDONLOCKING ( 
           LOD_NAME, 
           KEYVALUE ) ;
 
 
CREATE UNIQUE INDEX UEMPLOYEETERRITORIESIDEMPLOY1886 
       ON EMPLOYEETERRITORIES ( 
           TerritoryId, 
           EmployeeId ) ;
 
 
/* Index for Relationship - 'territories(has [0:m] ) EMPLOYEETERRITORIES' */
CREATE INDEX EMPLOYEETERRITORIESerritoryd1886 
       ON EMPLOYEETERRITORIES ( 
           TerritoryId ) ;
 
 
/* Index for Relationship - 'employees(for [0:m] ) EMPLOYEETERRITORIES' */
CREATE INDEX EMPLOYEETERRITORIESEmployeed1888 
       ON EMPLOYEETERRITORIES ( 
           EmployeeId ) ;
 
 
CREATE UNIQUE INDEX UCUSTOMERCUSTOMERDEMOIDCUSTO1891 
       ON CUSTOMERCUSTOMERDEMO ( 
           CustomerTypeId, 
           CUSTOMERID ) ;
 
 
/* Index for Relationship - 'CUSTOMERDEMOGRAPHICS(has [0:m] ) CUSTOMERCUSTOMERDEMO' */
CREATE INDEX CUSTOMERCUSTOMERDustomeryped1891 
       ON CUSTOMERCUSTOMERDEMO ( 
           CustomerTypeId ) ;
 
 
/* Index for Relationship - 'customers(for [0:m] ) CUSTOMERCUSTOMERDEMO' */
CREATE INDEX CUSTOMERCUSTOMERDEMOCUSTOMER1893 
       ON CUSTOMERCUSTOMERDEMO ( 
           CUSTOMERID ) ;
 
 
GRANT ALL ON categories TO PUBLIC 
GRANT ALL ON customers TO PUBLIC 
GRANT ALL ON CUSTOMERDEMOGRAPHICS TO PUBLIC 
GRANT ALL ON employees TO PUBLIC 
GRANT ALL ON NORTHWIND TO PUBLIC 
GRANT ALL ON orders TO PUBLIC 
GRANT ALL ON orderdetails TO PUBLIC 
GRANT ALL ON products TO PUBLIC 
GRANT ALL ON regions TO PUBLIC 
GRANT ALL ON shippers TO PUBLIC 
GRANT ALL ON suppliers TO PUBLIC 
GRANT ALL ON territories TO PUBLIC 
GRANT ALL ON ZEIDONLOCKING TO PUBLIC 
GRANT ALL ON EMPLOYEETERRITORIES TO PUBLIC 
GRANT ALL ON CUSTOMERCUSTOMERDEMO TO PUBLIC 
COMMIT;
