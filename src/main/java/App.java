import com.hftsh.backend.util.ApplicationProperties;
import org.mortbay.jetty.Connector;
import org.mortbay.jetty.Server;
import org.mortbay.jetty.bio.SocketConnector;
import org.mortbay.jetty.webapp.WebAppContext;

/**
 * Created by xumingjie on 15/10/5.
 */
public class App {
    public static void main(String[] args) throws Exception {
        Server server = new Server();
        SocketConnector connector = new SocketConnector();
        connector.setHost(ApplicationProperties.getProperty("host"));
        connector.setPort(Integer.valueOf(ApplicationProperties.getProperty("port")));
        server.setConnectors(new Connector[]{connector});
        WebAppContext webAppContext = new WebAppContext(ApplicationProperties.getProperty("webappPath"),ApplicationProperties.getProperty("contextPath"));
        webAppContext.setClassLoader(Thread.currentThread().getContextClassLoader());
        server.setHandler(webAppContext);
        server.setStopAtShutdown(true);
        System.out.println("Starting server");
        server.start();
        server.join();
    }
}
