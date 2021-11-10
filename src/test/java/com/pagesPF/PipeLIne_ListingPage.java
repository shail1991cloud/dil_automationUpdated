package com.pagesPF;

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
import java.util.List;


public class PipeLIne_ListingPage {

    private final String recordPipeLine = "//*[text()='%s']";
    public ProjectsPage projectspage;
    public Functions_LeanPageObject functions_leanPageObject;
    public String pipeLineNameOnPipelineProperties = "//div[@title=\"%s\"]";
    public String descriptionOnPipeLineProperties = "//p[@title=\"%s\"]";
    public String tagOnPipeLineProperties = "//span[normalize-space()=\"%s\"]";
    public String executionTypeOnPipeLineProperties = "//span[normalize-space()=\"%s\"]";
    public String executionTypeToSelect = "//*[text()='%s ']";
    public String pipeLineStatus = "//*[text()=' %s ']";
    WebDriver driver;
    String tSystemsJSPath = "return document.querySelector(\"#header\").shadowRoot.querySelector(\"div > scale-app-header > header > div > div > div.header__brand-branding > app-logo > a > svg > g > g > path:nth-child(2)\")";
    String labelDIJSPath = "document.querySelector(\"#header\").shadowRoot.querySelector(\"div > scale-app-header > header > div > div > div.header__brand-sector > ul > li\")";
    String noPipeLIneText = "//*[text()=\" %s \"]";
    @FindBy(how = How.XPATH, using = "//button[1]")
    List<WebElement> buttonsAdd;
    @FindBy(how = How.XPATH, using = "//*[text()=\"STREAMING \"]")
    WebElement executionType;
    @FindBy(how = How.XPATH, using = "//fieldset[@data-test-id=\"pipeline-creator\"]//div")
    WebElement pipeLineCreator;
    @FindBy(how = How.XPATH, using = "//fieldset[@data-test-id=\"creation-date\"]//div")
    WebElement pipeLineCreationDate;
    @FindBy(how = How.XPATH, using = "//input[1][@name='keyAdd']")
    List<WebElement> keysForPipeLine;
    @FindBy(how = How.XPATH, using = "//input[1][@name='valueAdd']")
    List<WebElement> valuesForPipeLine;
    @FindBy(how = How.XPATH, using = "//*[text()='Pipelines']")
    WebElement tagPipeLineOnProjectListingPage;
    @FindBy(how = How.XPATH, using = "//*[contains(@id,'input-text-')]")
    WebElement textFieldPipeLineName;
    @FindBy(how = How.XPATH, using = "//*[contains(@id,'input-textarea')]")
    WebElement textFieldDescription;
    @FindBy(how = How.XPATH, using = "//*[@placeholder=\"Add tags to categorize pipeline\"]")
    WebElement textFieldTag;
    @FindBy(how = How.XPATH, using = "//*[text()=\" Create Pipeline\"]")
    WebElement createPipelineIcon;
    @FindBy(how = How.XPATH, using = "//*[@id=\"app\"]/div[1]//scale-button[2]")
    WebElement buttonCreatePipeline;
    @FindBy(how = How.XPATH, using = "//body//div[@data-test-id=\"pipeline-builder-sidebar-heading\"]//div//div//div[2]//span[1]")
    WebElement pipeLineKey;
    @FindBy(how = How.XPATH, using = "//body//div[@data-test-id=\"pipeline-builder-sidebar-heading\"]//div//div//div[2]//span[2]")
    WebElement pipelineValue;
    @FindBy(how = How.XPATH, using = "//fieldset[7]//div[1]//span[1]")
    WebElement sparkKey;
    @FindBy(how = How.XPATH, using = "//fieldset[7]//div[1]//span[2]")
    WebElement sparkValue;
    @FindBy(how = How.XPATH, using = "//*[text()='Open']")
    WebElement buttonOpen;
    @FindBy(how = How.XPATH, using = "//*[text()='LAST LAUNCH']")
    WebElement lastLaunch;
    @FindBy(how = How.XPATH, using = "//*[text()='Builder ']")
    WebElement tabBuilder;
    @FindBy(how = How.XPATH, using = "//*[@id=\"app\"]//scale-icon-action-edit")
    WebElement editPipelineToolTip;
    @FindBy(how = How.XPATH, using = "//button[normalize-space()=\"×\"]")
    WebElement deleteTagIcon;
    @FindBy(how = How.XPATH, using = "//*[text()=' Save ']")
    WebElement buttonSave;

    public PipeLIne_ListingPage(WebDriver driver) {

        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);
    }

    public void validateDetailsOnProjectListingPageWithNORecords(String message) throws InterruptedException {
        Assert.assertTrue(functions_leanPageObject.fetchProjectNameOnProjectListingORBuilderPage().isDisplayed());
        Assert.assertTrue(tagPipeLineOnProjectListingPage.isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, noPipeLIneText, message).isDisplayed());
    }

    public void createPipeLine(String piplineName, String description, String tag) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, createPipelineIcon);
        createPipelineIcon.click();
        String uniquePipeLineName = CommonFunction.generateRandomString(5) + piplineName + DatesHelper.getTodayDateWithSeconds();
        CommonFunction.waitForElementToAppear(driver, textFieldPipeLineName);
        textFieldPipeLineName.sendKeys(uniquePipeLineName);
        EnvSetUp.setDataValue(Constant.PipeLineName, uniquePipeLineName);
        CommonFunction.waitForElementToAppear(driver, textFieldDescription);
        textFieldDescription.sendKeys(description);
        textFieldTag.sendKeys(tag, Keys.ENTER);
        CommonFunction.scrollOnElement(driver, executionType);
        CommonFunction.scrollToElement(driver, buttonCreatePipeline);
        buttonCreatePipeline.click();
        CommonFunction.waitForSomeTime();

    }

    public void createPipeLineWithKeyAndValues(String piplineName, String description, String tag, String execution, String pKey, String pValue, String sKey, String sValue) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, createPipelineIcon);
        createPipelineIcon.click();
        String uniquePipeLineName = CommonFunction.generateRandomString(5) + piplineName + DatesHelper.getTodayDateWithSeconds();
        CommonFunction.waitForElementToAppear(driver, textFieldPipeLineName);
        textFieldPipeLineName.sendKeys(uniquePipeLineName);
        EnvSetUp.setDataValue(Constant.PipeLineName, uniquePipeLineName);
        CommonFunction.waitForElementToAppear(driver, textFieldDescription);
        textFieldDescription.sendKeys(description);
        textFieldTag.sendKeys(tag, Keys.ENTER);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, executionTypeToSelect, execution));
        CommonFunction.scrollToElement(driver, buttonCreatePipeline);
        keysForPipeLine.get(0).sendKeys(pKey);
        valuesForPipeLine.get(0).sendKeys(pValue);
        CommonFunction.waitForElementToBeClickable(driver, buttonsAdd.get(0));
        buttonsAdd.get(0).click();
        keysForPipeLine.get(1).sendKeys(sKey);
        valuesForPipeLine.get(1).sendKeys(sValue);
        CommonFunction.waitForElementToBeClickable(driver, buttonsAdd.get(1));
        buttonsAdd.get(1).click();
        CommonFunction.waitForElementToBeClickable(driver, buttonCreatePipeline);
        buttonCreatePipeline.click();
        CommonFunction.waitForSomeTime();
    }

    public void validatePipeLineProperties(String description, String tag, String executionT, String pKey, String pValue, String sKey, String sValue) throws InterruptedException {
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLineNameOnPipelineProperties, EnvSetUp.getDataKeyValue(Constant.PipeLineName)).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, descriptionOnPipeLineProperties, description).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, tagOnPipeLineProperties, tag).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, executionTypeOnPipeLineProperties, executionT).isDisplayed());
        Assert.assertTrue(pipeLineCreationDate.isDisplayed());
        Assert.assertTrue(pipeLineCreator.isDisplayed());
        Assert.assertEquals(pipelineValue.getText(), pValue);
        Assert.assertEquals(sparkValue.getText(), sValue);
        Assert.assertEquals(pipeLineKey.getText().substring(0, 2), pKey);
        Assert.assertEquals(sparkKey.getText().substring(0, 2), sKey);


    }

    public void validatePipeLineRecord() throws InterruptedException {
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, recordPipeLine, EnvSetUp.getDataKeyValue(Constant.PipeLineName)).isDisplayed());

    }

    public void validatePipeLineStatus(String status) throws InterruptedException {
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, pipeLineStatus, status));
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLineStatus, status).isDisplayed());
    }

    public void editPipeline(String executionType,String tag) throws InterruptedException, IOException {
      CommonFunction.clickByHoveringMouse(driver,editPipelineToolTip);
      CommonFunction.clickByHoveringMouse(driver,deleteTagIcon);
        textFieldTag.sendKeys(tag);
        textFieldTag.sendKeys(Keys.ENTER);
       CommonFunction.scrollToElement(driver,buttonSave);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, executionTypeToSelect, executionType));
        CommonFunction.waitForElementToBeClickable(driver,buttonSave);
        buttonSave.click();

    }


}


