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

}
