package com.managersUtilities;

import com.cucumber.listener.Reporter;
import com.google.common.io.Files;
import io.cucumber.java.Scenario;
import org.openqa.selenium.*;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import java.io.File;
import java.io.IOException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

/**
 * @author Shailendra PS Parihar
 * @note   Very important class it has all the reusable functions
 */
public class CommonFunction {
    /**
     * @method maximiseBrowser is used to maximise browser of any type
     */

    public static void maximiseBrowser(WebDriver driver) {
        driver.manage().window().maximize();

    }

    public static void deleteAllCookies(WebDriver driver) {
        driver.manage().deleteAllCookies();

    }

    /**
     * @method scrollToAxis is used to scroll the window vertically
     */
    public static void scrollToAxis(WebDriver driver) {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }

    /**
     * @method scrollToElement is used to scroll the window w.r.to the location of located WebElement
     */
    public static void scrollToElement(WebDriver driver, WebElement element) {
        ((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }

    /**
     * Select methods to select values on the basis of index,visible text and by value
     */
    public static void selectFromDropDownWithValue(WebElement dropDown, String value) {
        Select select = new Select(dropDown);
        select.selectByValue(value);
    }

    public static void selectFromDropDownWithIndex(WebElement dropDown, int index) {
        Select select = new Select(dropDown);
        select.selectByIndex(index);
    }

    public static void selectFromDropDownWithVisibleText(WebElement dropDown, String visibleText) {
        Select select = new Select(dropDown);
        select.selectByVisibleText(visibleText);
    }

    /**
     * To select a WebElement to click on it
     */
    public static void submitDetails(WebElement element) {
        element.click();
    }

    /**
     * @method clickForceFully to click on a WebElement by the help of JavaScriptExecutor
     */
    public static void clickForceFully(WebDriver driver, WebElement element) {
        JavascriptExecutor executor = (JavascriptExecutor) driver;
        executor.executeScript("arguments[0].click();", element);
    }

    /**
     * @method Enter text into text box
     */
    public static void enterText(WebElement element, String TextToEnter) throws InterruptedException {
        waitForMinimalTime();
        element.clear();
        element.sendKeys(TextToEnter);
    }


    public static void scrollOnElement(WebDriver driver,WebElement element) throws IOException, InterruptedException {

        Point location = element.getLocation();
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("window.scrollBy(" + location.getX() + "," + location.getY() + ")");
        element.click();

    }

  /*  public static void getShadowElementOnScreen(WebDriver driver,String cssSelector) throws InterruptedException {
        waitForSomeTime();
        Shadow shadow = new Shadow(driver);
        WebElement shadowElement = shadow.findElement(cssSelector);
        shadowElement.click();
    }*/

    /**
     * @method generateRandomString to generate a random string
     */
    public static String generateRandomString(int n) {
        String AlphaNumericString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                + "0123456789"
                + "abcdefghijklmnopqrstuvxyz";

        StringBuilder sb = new StringBuilder(n);
        for (int i = 0; i < n; i++) {
            int index
                    = (int) (AlphaNumericString.length()
                    * Math.random());
            sb.append(AlphaNumericString
                    .charAt(index));
        }
        return sb.toString();
    }
    /**
     * @method generateRandomString to generate a random Integer Sequence
     */
    public static String generateIntegerSequence(int n) {
        String AlphaNumericString = "0123456789";


        StringBuilder sb = new StringBuilder(n);
        for (int i = 0; i < n; i++) {
            int index
                    = (int) (AlphaNumericString.length()
                    * Math.random());
            sb.append(AlphaNumericString
                    .charAt(index));
        }
        return sb.toString();
    }

    /**
     * @method clickOnShadowElement to click on ShadowElement,accept DOM Js of the element and returns WebElement to click
     */
    public static void clickOnShadowElement(WebDriver driver, String elementJSPath) throws InterruptedException {
        CommonFunction.waitForSomeTime();
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        WebElement elementToClick = (WebElement) jse.executeScript(elementJSPath);
        ((JavascriptExecutor) driver).executeScript("arguments[0].click();", elementToClick);
    }



    /**
     * @method waitForElementToAppear to wait for element for a certain condition
     */
    public static void waitForElementToAppear(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOf(element));
    }
    public static void waitLessForElementToAppear(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.visibilityOf(element));
    }
    /**
     * @method waitForElementToAppear to wait for element for a certain condition
     */
    public static void waitForElementToBeClickable(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 500);
        wait.until(ExpectedConditions.elementToBeClickable(element));
    }

    /**
     * @method waitForElementToDisAppear to wait for element for a certain condition
     */
    public static void waitForElementToDisAppear(WebDriver driver, WebElement element) {
        WebDriverWait wait = new WebDriverWait(driver, 50);
        wait.until(ExpectedConditions.invisibilityOf(element));
    }
    /**
     * @method clickByHoveringMouse to click by use of Actions class to perform mouse actions
     */
    public static void clickByHoveringMouse(WebDriver driver, WebElement element) throws InterruptedException {
        waitForSomeTime();
        Actions action = new Actions(driver);
        action.moveToElement(element).click().perform();
    }

    /**
     * @method navigateBackward for backard navigation
     */
    public static void navigateBackward(WebDriver driver) {
        driver.navigate().back();
    }

    /**
     * @methods to wait for some static times
     */
    public static void waitForSomeTime() throws InterruptedException {
        Thread.sleep(5000);
    }


    public static void waitForMinimalTime() throws InterruptedException {
        Thread.sleep(200);
    }

    /**
     * @method getCustomisedWebElements returns List of Elements on run time itself during execution
     */
    public static List<WebElement> getCustomisedWebElements(WebDriver driver, String stringXpath, String stringToAdd) {
        List<WebElement> customisedElements = driver.findElements(org.openqa.selenium.By.xpath(String.format(stringXpath, stringToAdd)));
        return customisedElements;
    }

    /**
     * @method getCustomisedWebElement returns Element on run time itself during execution
     */
    public static WebElement getCustomisedWebElement(WebDriver driver, String stringXpath, String stringToAdd) throws InterruptedException {
        CommonFunction.waitForMinimalTime();
        WebElement customisedElement = driver.findElement(org.openqa.selenium.By.xpath(String.format(stringXpath, stringToAdd)));
        return customisedElement;
    }

    /**
     * @method getScreenShots returns destination to save the captured screenShots foe fail test cases
     */
    public static void getScreenShots(WebDriver driver, Scenario scenario) {
        if (scenario.isFailed()) {
            String screenshotName = scenario.getName().replaceAll(" ", "_");
            try {


                //This takes a screenshot from the driver at save it to the specified location
                TakesScreenshot ts = (TakesScreenshot) driver;
                File sourcePath = ts.getScreenshotAs(OutputType.FILE);

                //Building up the destination path for the screenshot to save
                //Also make sure to create a folder 'screenshots' with in the cucumber-report folder
                Date d = new Date();
                Timestamp t = new Timestamp(d.getTime());
                String timeStamp = t.toString();
                timeStamp = timeStamp.replace(' ', '_');
                timeStamp = timeStamp.replace(':', '_');

                String dest = System.getProperty("user.dir") + "/test-output/ScreenShots/failScreen" + timeStamp + ".png";
                System.out.println(dest);
                File destinationPath = new File(dest);

                //Copy taken screenshot from source location to destination location
                Files.copy(sourcePath, destinationPath);

                //This attach the specified screenshot to the test
                Reporter.addScreenCaptureFromPath(destinationPath.toString());
            } catch (IOException e) {
            }
        }

    }


}
