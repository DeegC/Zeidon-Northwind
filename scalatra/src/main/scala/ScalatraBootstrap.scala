import org.scalatra.LifeCycle
import javax.servlet.ServletContext
import com.quinsoft.northwind._

class ScalatraBootstrap extends LifeCycle {

  override def init(context: ServletContext) {

    context mount (new NorthwindScalatra, "/*")
  }
}
