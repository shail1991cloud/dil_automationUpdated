package com.steps;

import com.baselibrary.Baseclass;
import com.config.enums.Browsers;
import com.dataproviderUtilities.ConfigFileReader;
import io.cucumber.java.After;
import io.cucumber.java.Scenario;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;

import java.io.IOException;

public class Hooks {

    WebDriver driver;
    public ConfigFileReader configFileReader;


    public Hooks() {
        driver = Baseclass.selectBrowser(Browsers.CHROME.name());
        configFileReader = new ConfigFileReader();

    }

    @After
    public void beforeScenario(Scenario scenario) {
       scenario.log("--Starting the Execution--");


    }

    @After(order = 1)
    public void afterScenario(Scenario scenario) throws IOException {
        try {
            String screenshotName = scenario.getName().replaceAll(" ", "_");
            if (scenario.isFailed()) {
                scenario.log("this is my failure message");
                TakesScreenshot ts = (TakesScreenshot) driver;
                byte[] screenshot = ts.getScreenshotAs(OutputType.BYTES);
                scenario.attach(screenshot, "image/png", screenshotName);

            }
        } catch (Exception e) {

            e.printStackTrace();
        }


    }


    @After(order = 0)
    public void quitBrowser(Scenario scenario) {
        driver.quit();
        scenario.log("---Closing the Browser---");

    }

}
