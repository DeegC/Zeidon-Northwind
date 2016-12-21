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

class NorthwindScalatra extends ZeidonRestScalatra
                           with CorsSupport {

    val oe = JavaObjectEngine.getInstance()

    def getObjectEngine(): ObjectEngine = {
        return oe
    }

    options("/*") {
        response.setHeader("Access-Control-Allow-Headers", request.getHeader("Access-Control-Request-Headers"));
    }

    get("/:lod") {
        activate { task =>
            val order = View( task ) basedOn params( "lod" )
            val qual = order.buildQual().rootOnlyMultiple()

            qual.withPaging( params.getOrElse("perPage", "20").toInt,
                             params.getOrElse("page", "1").toInt,
                             params.getOrElse("getTotal", "false").toBoolean )

            order.lodName match {
                case "Product" => addProductParams( qual )
                case "Order"   => addOrderParams( qual )
                case _ =>
            }

            qual.readOnly.activate()
        }
    }

    get("/:lod/:id") {
        activate { task =>
            val lodName = params( "lod" )
            val order = View( task ) basedOn lodName
            order.buildQual( _.root.key = params("id" ) ).readOnly.activate()
        }
    }

    post("/:lod") {
        oe.forTask( "Northwind" ) { task =>
            val view = task.deserializeOi()
                           .setLodDef( params( "lod") )
                           .setVersion("1")
                           .fromString( request.body )
                           .asJson()
                           .unpickle

            view.commit

            val serialized = view.serializeOi.asJson.toString()
            task.log().debug( serialized )
            serialized
        }
    }

    private def activate( f: (Task) => View ) = {
        oe.forTask( "Northwind" ) { task =>
            val view = f( task )
            if ( view.isEmpty )
                NotFound( "No data found" )
            else {
                val serialized = view.serializeOi.asJson.toString()
                task.log().debug( serialized )
                serialized
            }
        }
    }

    /**
     * Add some qualification for Product lod.
     */
    private def addProductParams( qual: QualBuilder ) = {
        val param = params.getOrElse("name", "" )
        if ( param != "" )
            qual.and( _.Product.ProductName like "%" + param + "%" )
    }

    /**
     * Add some qualification for Product lod.
     */
    private def addOrderParams( qual: QualBuilder ) = {
        val product = params.getOrElse("product", "" )
        if ( product != "" )
            qual.and( _.Product.ProductName like "%" + product + "%" )
    }
}
