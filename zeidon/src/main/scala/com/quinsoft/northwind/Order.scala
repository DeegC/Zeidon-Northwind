package com.quinsoft.northwind

import com.quinsoft.zeidon.scala.basedOn
import com.quinsoft.zeidon.scala.View
import com.quinsoft.zeidon.scala.Implicits._
import com.quinsoft.zeidon.ObjectConstraintType
import com.quinsoft.zeidon.scala.EntityInstance
import scala.collection.mutable.ListBuffer

class Order( val order: View @basedOn( "Order" ) ) {

    val task = order.task
    val created = ListBuffer[EntityInstance]()
    val updated = ListBuffer[EntityInstance]()

    def UpdateOrder() {
        task.log().info( "UpdateOrder" )

        // Find which order details have been created and updated.  We'll save the list
        // of products so we can update them.
        order.OrderDetail.all().each {
            if ( order.OrderDetail.isCreated ) {
                created += order.Product
            }
            else if ( order.OrderDetail.isUpdated ) {
                updated += order.Product
            }
        }

        val products = updateProducts()
        try {

        }
        finally {
            products.drop()
        }
    }

    private def updateProducts() : View @basedOn( "Product" ) = {
        val products : View = new View( task ) basedOn "Product"
        products.activate(
          _.where( _.Product.ProductId in( created ++ updated ) )
           .rootOnlyMultiple()
        )

        // If order details were updated, we need to get the old detail value.
        val oldOrder : View = new View( task ) basedOn "Order"
        if ( updated.length > 0 ) {
            oldOrder.activateWhere( _.Order.OrderId in( order.Order ) )
        }

        return products
    }
}
