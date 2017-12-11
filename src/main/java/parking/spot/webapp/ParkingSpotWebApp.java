package parking.spot.webapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;

@EnableAutoConfiguration
public class ParkingSpotWebApp {

    public static void main(String[] args) {
        SpringApplication app =
                new SpringApplication(ParkingSpotWebApp.class);
        app.run(args);
    }

}


