package parking.spot.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.netflix.eureka.EnableEurekaClient;

@SpringBootApplication
@EnableEurekaClient
public class ParkingSpotWebApp {

    public static void main(String[] args) {
        SpringApplication app =
                new SpringApplication(ParkingSpotWebApp.class);
        app.run(args);
    }

}


