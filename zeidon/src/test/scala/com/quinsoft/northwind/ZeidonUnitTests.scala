/**
 *
 */
package com.quinsoft.northwind

import org.scalatest.junit.AssertionsForJUnit
import org.junit.Assert._
import org.junit.Before
import org.junit.Test
import com.quinsoft.zeidon.scala.ZeidonOperations
import com.quinsoft.zeidon.scala.View
import com.quinsoft.zeidon.standardoe.JavaObjectEngine
import com.quinsoft.zeidon.ZeidonException
import com.quinsoft.zeidon.PessimisticLockingException

/**
 * Unit tests that use Northwind to test Zeidon JOE.
 *
 */
class ZeidonUnitTests {
    val oe = JavaObjectEngine.getInstance()
    var task = oe.createTask("Northwind")


    @Before
    def initialize() {
//        oe.startBrowser
    }

    @Test
    def testActivateWithNull() {
        val order = View( task ) basedOn "Order"
        order.buildQual( _.Product.ProductId = 10 )
            .restricting( _.Product )
                .to( _.Product.ProductName isNotNull )
            .readOnly
            .activate()

        order.serializeOi.withIncremental.toFile("/tmp/orders.json")
    }

    @Test
    def testPessimisticLocks() {
        val product = View( task ) basedOn "Product"
        val productId = 10

        try {
            // Activate the OI with pessimistic locking.
            product.activateWhere( _.Product.ProductId = productId )

            // Make sure we can activate a read-only OI.
            val productReadOnly = View( task ) basedOn "Product"
            productReadOnly.buildQual( _.Product.ProductId = productId )
                           .readOnly
                           .activate()

            // Verify that it's read-only but trying to update it.
            try {
                productReadOnly.Product.ProductName = "New name"
            }
            catch {
                case e: Exception => {
                    val msg = e.getMessage
                    if ( ! msg.contains( "Object Instance is read-only" ) )
                        throw new ZeidonException( "Expected OI to be read-only" )
                }
            }

            // Try activating.  It should fail because OI is locked.
            try {
                productReadOnly.activateWhere( _.Product.ProductId = productId )
            }
            catch {
                case e: PessimisticLockingException => {}
                case e: Exception => {
                    if ( ! e.getMessage.equals( "Object Instance is read-only" ) )
                        throw new ZeidonException( "Expected OI to be read-only" )
                }
            }

            product.drop()
            productReadOnly.activateWhere( _.Product.ProductId = productId )
            productReadOnly.drop()
        }
        finally {
            // This will remove the pessimistic lock.
            product drop()
        }
    }
}