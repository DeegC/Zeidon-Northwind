package com.quinsoft.northwind

import org.scalatra._
import java.net.URL
import com.quinsoft.zeidon.standardoe.JavaObjectEngine
import com.quinsoft.zeidon.scala.View
import com.quinsoft.zeidon.scala.Implicits._
import com.quinsoft.zeidon.ObjectEngine
import com.quinsoft.zeidon.Task
import com.quinsoft.zeidon.standardoe.IncrementalEntityFlags
import com.quinsoft.zeidon.scala.QualBuilder
import com.quinsoft.zeidon.scalatra.ZeidonRestScalatra
import com.quinsoft.zeidon.scala.basedOn
import com.quinsoft.zeidon.ZeidonException

class NorthwindScalatra extends ZeidonRestScalatra
                           with CorsSupport {

    val oe = JavaObjectEngine.getInstance()

    def getObjectEngine(): ObjectEngine = {
        return oe
    }

    options("/*") {
        response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
    }

    post("/northwind/Order") {
        getObjectEngine().forTask( "Northwind" ) { task =>
            val body = request.body
            val order = task.deserializeOi()
                           .setLodDef( "Order" )
                           .setVersion("1")
                           .fromString( request.body )
                           .asJson()
                           .unpickle

            if ( order.Order.isCreated ) {
                createOrder( task, order )
            } else {
                order.commit
            }

            val serialized = order.serializeOi.asJson.withIncremental().toString()
            task.log().debug( serialized )
            Ok(serialized)
        }
    }

    private def loadShippers( task: Task ) : View @basedOn( "Shipper" ) = {
        val shippers = View( task ) basedOn "Shipper"
        shippers.activateAll()
    }

    private def loadEmployees( task: Task ) = {
        val employees = View( task ) basedOn "Employee"
        employees.buildQual.cachedAs( "AllEmployees" ).activate()
    }

    private def loadCustomers( task: Task ) = {
        val customers = View ( task ) basedOn "Customer"
        customers.buildQual.cachedAs( "AllCustomers" ).activate()
    }

    private def createOrder( task: Task, order: View ) = {
        // Load the products specified in the order.
        val products = task.newView("Product")

        try {
            products.buildQual.where( _.Product.ProductId in( order.Product.under( "Order" ) ) )
                              .activate()
        }
        finally {
            // This will remove the pessimistic lock.
            products.drop()
        }
    }
}
