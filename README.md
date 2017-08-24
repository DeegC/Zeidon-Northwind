# Zeidon-Northwind

This is the Northwind application developed using Zeidon.  This project has been broken up into multiple subprojects to demonstrate different aspects of Zeidon.  The subprojects are in seperate subdirectires and are:

* sql : The Northwind DB ported to MySQL and Sqlite for easy portability.  northwind.sqlite is the Sqlite DB that is used in the running examples.
* zeidon : The Zeidon source files for base Northwind functionality.  E.g. the E/R, LODs, and Scala code.
* scalatra : A simple Scalatra RESTful web server for serving Northwind data.  Use start_server.sh to start the server.
* angular : A sample UI for Northwind written using Angular.  It requires running the Scalatra server to load/store the data in the Sqlite DB.  Start the Angular server with 'npm start'.

