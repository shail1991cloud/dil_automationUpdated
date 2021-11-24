package com.pagesPF;

import com.dataproviderUtilities.ConfigFileReader;
import com.helperUtilities.LoggerHelper;
import com.managersUtilities.CommonFunction;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;


public class DIL_loginpage {

    public ConfigFileReader configFileReader;
    WebDriver driver;
    Logger log = LoggerHelper.getLogger(DIL_loginpage.class);
    @FindBy(how = How.XPATH, using = "//*[text()='User name']/following-sibling::input")
    WebElement dilUserName;
    @FindBy(how = How.XPATH, using = "//*[text()='Password']/following-sibling::input")
    WebElement dilPassword;
    @FindBy(how = How.XPATH, using = "//*[text()=' Login ']")
    WebElement loginBtn;

    @FindBy(how = How.XPATH, using = "//button[normalize-space()=\"Skip Tour\"]")
    public WebElement skipTourBtn;

    public DIL_loginpage(WebDriver driver) {
        this.driver = driver;
        configFileReader = new ConfigFileReader();

    }

    public void loginToDIL() throws InterruptedException {

        dilUserName.sendKeys(configFileReader.getProperties().getProperty("dilUsrNm"));
        CommonFunction.waitForElementToAppear(driver, dilPassword);
        dilPassword.sendKeys(configFileReader.getProperties().getProperty("dilPwd"));
        CommonFunction.waitForElementToAppear(driver, loginBtn);
        CommonFunction.clickForceFully(driver, loginBtn);
        log.info("User is logged into DIL UI with userId-->" + configFileReader.getProperties().getProperty("dilUsrNm"));

    }

}
