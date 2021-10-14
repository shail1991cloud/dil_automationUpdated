package com.baselibrary;

import com.config.enums.OS;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.ie.InternetExplorerOptions;

import java.util.concurrent.TimeUnit;

/**
 * @ author - Shailendra PS Parihar
 */
public class Baseclass {


    public static WebDriver driver;

    /**
     * @param browser is the name of browser that we can pas from enums
     * @return this method returns WebDriver instance
     * @method selectBrowser is used provide driver instance
     */


    public static WebDriver selectBrowser(String browser) {

        if (System.getProperty("os.name").toLowerCase().contains(OS.LINUX.name().toLowerCase())) {
            if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME.name())) {
                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            } else if (browser.equalsIgnoreCase(com.config.enums.Browsers.IE.name())) {

                InternetExplorerOptions ieOptions = new InternetExplorerOptions();
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver(ieOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }
            else if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME_HEADLESS.name())) {

                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                chromeOptions.addArguments("--headless");
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }


        } else if (System.getProperty("os.name").toLowerCase().contains(OS.MAC.name().toLowerCase())) {
            if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME.name())) {
                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            } else if (browser.equalsIgnoreCase(com.config.enums.Browsers.IE.name())) {

                InternetExplorerOptions ieOptions = new InternetExplorerOptions();
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver(ieOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }
            else if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME_HEADLESS.name())) {

                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                chromeOptions.addArguments("--headless");
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }
        } else if (System.getProperty("os.name").toLowerCase().contains(OS.WINDOW.name().toLowerCase())) {
            if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME.name())) {
                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            } else if (browser.equalsIgnoreCase(com.config.enums.Browsers.IE.name())) {

                InternetExplorerOptions ieOptions = new InternetExplorerOptions();
                WebDriverManager.iedriver().setup();
                driver = new InternetExplorerDriver(ieOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }
            else if (browser.equalsIgnoreCase(com.config.enums.Browsers.CHROME_HEADLESS.name())) {

                ChromeOptions chromeOptions = new ChromeOptions();
                WebDriverManager.chromedriver().setup();
                chromeOptions.addArguments("--headless");
                driver = new ChromeDriver(chromeOptions);
                driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
            }

        }
        return driver;
    }
}