package com.pagesPF;

import com.dataproviderUtilities.ConfigFileReader;
import com.helperUtilities.Constant;
import com.helperUtilities.DatesHelper;
import com.helperUtilities.EnvSetUp;
import com.managersUtilities.CommonFunction;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;


public class ConnectionsPage {

    public ProjectsPage projectspage;
    public Functions_LeanPageObject functions_leanPageObject;

    @FindBy(how = How.XPATH, using = "//input[@type=\"text\"]")
    public WebElement textFieldConnectionName;

    @FindBy(how = How.XPATH, using = "//textarea[@placeholder=\"Description\"]")
    public WebElement textFieldDescription;

    @FindBy(how = How.XPATH, using = "//select[@id=\"selectInput\"]")
    public WebElement dropDownSelect;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Kerberos Principle\"]")
    public WebElement textFieldKerbPrincipal;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Kerberos file name\"]")
    public WebElement textFieldKErbFileName;

    @FindBy(how = How.XPATH, using = "//button[normalize-space()=\"Test Connection\"]")
    public WebElement buttonTestConnection;

    @FindBy(how = How.XPATH, using = "//button[normalize-space()=\"Save\"]")
    public WebElement buttonSave;

    @FindBy(how = How.XPATH, using = "//div[contains(text(),\"Connected\")]")
    public WebElement msgConnected;

    @FindBy(how = How.XPATH, using = "//input[@type=\"text\"]")
    public WebElement fieldSearchBoxOnConnectionsPage;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Keystore filename\"]")
    public WebElement textFieldKeyStoreFile;

    @FindBy(how = How.XPATH, using = "//span[normalize-space()=\"My Connections\"]")
    public WebElement headerMyConnection;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Truststore filename\"]")
    public WebElement textFieldTrustStoreFile;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Keystore password\"]")
    public WebElement textFieldKeysStorePass;

    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Truststore password\"]")
    public WebElement textFieldTrustStorePass;

    @FindBy(how = How.XPATH, using = "//span[normalize-space()=\"My Connections\"]")
    public WebElement msgMyConnections;

    @FindBy(how = How.XPATH, using = "//p[2]//button[1]")
    public WebElement buttonDeleteOnConnectionRecord;

    @FindBy(how = How.XPATH, using = "//button[normalize-space()=\"Delete\"]")
    public WebElement buttonDeleteOnDeleteConnectionPopUp;

    String connectionRecordOnConnectionListingPage = "//div[@title=\"%s\"]";
    String connectionOption = "//option[text()='%s ']";
    String optionTLSProtocol = "//option[text()=' %s ']";
    String createConnectionTab = "//a[normalize-space()=\"%s\"]";
    String jsPathConnection = "return document.querySelector(\"#header\").shadowRoot.querySelector(\"div > scale-app-header > header > nav.header__nav > div > div.header__nav-menu-wrapper > div.header__nav-menu-main > ul > scale-nav-main:nth-child(2) > li > a > span\")";
    WebDriver driver;
    ConfigFileReader configFileReader;

    public ConnectionsPage(WebDriver driver) {
        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);
        configFileReader = new ConfigFileReader();

    }

    public void navigateToCreateConnectionScreen(String createConnectionToAdd) throws InterruptedException {
        CommonFunction.clickOnShadowElement(driver, jsPathConnection);
        CommonFunction.waitForElementToAppear(driver, msgMyConnections);
        WebElement createConnection = CommonFunction.getCustomisedWebElement(driver, createConnectionTab, createConnectionToAdd);
        CommonFunction.waitForElementToAppear(driver, createConnection);
        createConnection.click();

    }

    public void enterBasicConnectionDetails(String name, String description, String connectionType) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, textFieldConnectionName);
        String uniqueConnectionName = name + DatesHelper.getTodayDateWithSeconds();
        EnvSetUp.setDataValue(Constant.ConnectionName, uniqueConnectionName);
        textFieldConnectionName.sendKeys(uniqueConnectionName);
        CommonFunction.waitForElementToAppear(driver, dropDownSelect);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connectionOption, connectionType));
        CommonFunction.waitForElementToAppear(driver, textFieldDescription);
        textFieldDescription.sendKeys(description);
    }

    public void enterKerberosPrincipalDetails() {
        CommonFunction.waitForElementToAppear(driver, textFieldKerbPrincipal);
        textFieldKerbPrincipal.sendKeys(configFileReader.getProperties().getProperty("Kerberos_Principal"));
        textFieldKErbFileName.sendKeys(configFileReader.getProperties().getProperty("Kerberos_FileName"));
    }

    public void testConnection() throws InterruptedException {
        CommonFunction.waitLessForElementToAppear(driver, buttonTestConnection);
        buttonTestConnection.click();
        CommonFunction.waitLessForElementToAppear(driver, msgConnected);
        Assert.assertTrue(msgConnected.isDisplayed());

    }

    public void saveTheConnection() {
        CommonFunction.waitForElementToBeClickable(driver, buttonSave);
        buttonSave.click();
    }

    public void validateConnection(String name) throws InterruptedException {

        CommonFunction.waitForElementToAppear(driver, headerMyConnection);
        driver.navigate().refresh();
        CommonFunction.waitForElementToAppear(driver, fieldSearchBoxOnConnectionsPage);
        fieldSearchBoxOnConnectionsPage.sendKeys(Keys.ENTER);
        fieldSearchBoxOnConnectionsPage.sendKeys(EnvSetUp.getDataKeyValue(Constant.ConnectionName));
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, connectionRecordOnConnectionListingPage, EnvSetUp.getDataKeyValue(Constant.ConnectionName)).isDisplayed());
        CommonFunction.waitForElementToAppear(driver, buttonDeleteOnConnectionRecord);
        buttonDeleteOnConnectionRecord.click();
        CommonFunction.waitForMinimalTime();
        CommonFunction.waitForElementToBeClickable(driver, buttonDeleteOnDeleteConnectionPopUp);
        buttonDeleteOnDeleteConnectionPopUp.click();
        CommonFunction.waitForSomeTime();

    }

    public void enterDetailsForSSLConnection(String KFile, String TFile, String KPass, String TPass, String Protocol) throws InterruptedException, IOException {

        //CommonFunction.waitForElementToAppear(driver,textFieldKeyStoreFile);
        textFieldKeyStoreFile.sendKeys(KFile);
        //  CommonFunction.waitForElementToAppear(driver,textFieldTrustStoreFile);
        textFieldTrustStoreFile.sendKeys(TFile);
        CommonFunction.waitForSomeTime();
        CommonFunction.waitForElementToAppear(driver, textFieldKeysStorePass);
        textFieldKeysStorePass.sendKeys(KPass);
        CommonFunction.waitForElementToAppear(driver, textFieldTrustStorePass);
        textFieldTrustStorePass.sendKeys(TPass);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, optionTLSProtocol, Protocol));


    }

}




