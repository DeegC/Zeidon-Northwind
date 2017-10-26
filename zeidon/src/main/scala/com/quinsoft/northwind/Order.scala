package com.quinsoft.northwind

import com.quinsoft.zeidon.scala.basedOn
import com.quinsoft.zeidon.scala.View
import com.quinsoft.zeidon.ObjectConstraintType
import com.quinsoft.zeidon.scala.EntityInstance
import scala.collection.mutable.ListBuffer

class Order( val order: View @basedOn( "Order" ) ) {

    def UpdateOrder() {
        order.log().info( "UpdateOrder" )

        // Find which order details have been created and updated.
        val created = ListBuffer[EntityInstance]()
        val updated = ListBuffer[EntityInstance]()
        order.OrderDetail.all().foreach { (detail: EntityInstance) =>
            if ( order.OrderDetail.isCreated ) {
                created += order.OrderDetail
            }
            else if ( order.OrderDetail.isUpdated ) {
                updated += order.OrderDetail
            }
        }

        val oldOrder : View = new View( order ) basedOn "Order"

        if ( updated.length > 0 ) {
            oldOrder.activateWhere( _.Order.OrderId in(10, 11 ) )
        }
    }
}
