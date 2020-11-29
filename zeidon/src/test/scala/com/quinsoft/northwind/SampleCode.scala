/**
 *
 */
package com.quinsoft.northwind

import com.quinsoft.zeidon.standardoe.JavaObjectEngine
import com.quinsoft.zeidon.scala.ZeidonOperations
import com.quinsoft.zeidon.scala.Task
import com.quinsoft.zeidon.scala.View
import com.quinsoft.zeidon.scala.basedOn
import com.quinsoft.zeidon.ZeidonException

/**
 * This contains all the code used in the Zeidon Quick Walk Through:
 *     http://deegc.github.io/zeidon-joe/QuickWalkThrough.html
 */
class SampleCode( var task: Task ) {

    def loadShippers() : View @basedOn( "Shipper" ) = {
        task.Shipper.all()
    }

    def loadEmployees() : View @basedOn( "Employee" ) = {
        task.Employee.buildQual.cachedAs( "AllEmployees" ).activate()
    }

    def loadCustomers() = {
        task.Customer.buildQual.cachedAs( "AllCustomers" ).activate()
    }

    def deleteTerritory( territoryId: String ) {
        val region = task.Region.activate( _.Territory.TerritoryId = territoryId )
        if ( ! region.isEmpty ) {
            region.Territory delete()
            region commit()
        }
    }

    def createTerritory( regionId: Int, territoryId: String, desc : String ) {

        val region = task.Region.activate( _.Region.RegionId = regionId )
        if ( region.isEmpty )
            throw new ZeidonException( "Unknown Region ID = %s", regionId.toString() )

        region.Territory create()
        region.Territory.TerritoryId = territoryId
        region.Territory.TerritoryDescription = desc

        region commit()
    }

    def spawning = {
        val supervisor = task.Employee.activate( _.Employee.EmployeeId = 5 )
        supervisor name "Supervisor"

        val newEmployee = task.Employee empty()
        newEmployee name "New Employee"
        newEmployee.Employee create()
        newEmployee.Employee.FirstName = "John"
        newEmployee.Employee.LastName = "Smith"

        println( "Supervisor reports count = " + supervisor.DirectReport.count )
        newEmployee.Supervisor include supervisor.Employee
        println( "Supervisor reports count = " + supervisor.DirectReport.count )
    }
}

object SampleCode {

    def main(args: Array[String]) {
        // Instantiate JOE using standard configuration.  This requires zeidon.ini
        // in the classpath.
        val objectEngine = JavaObjectEngine.getInstance
        objectEngine.startBrowser()

        val task = objectEngine.createTask("Northwind")
        task.log.info("Loaded task")

        val testLogic = new SampleCode( task )
        testLogic.spawning

//        testLogic.deleteTerritory( "99999" )
//        testLogic.createTerritory( 1, "99999", "Quincy" )
    }

}