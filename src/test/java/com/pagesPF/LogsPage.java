package com.pagesPF;

import com.dataproviderUtilities.ConfigFileReader;
import com.helperUtilities.Constant;
import com.helperUtilities.EnvSetUp;
import com.managersUtilities.CommonFunction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;


public class LogsPage {

    public ProjectsPage projectspage;
    public Functions_LeanPageObject functions_leanPageObject;


    @FindBy(how = How.XPATH, using = "//input[@placeholder=\"Pipeline Name\"]")
    public WebElement filterFieldPipelineName;


    String jsLogsTab="return document.querySelector(\"#header\").shadowRoot.querySelector(\"div > scale-app-header > header > nav.header__nav > div > div.header__nav-menu-wrapper > div.header__nav-menu-main > ul > scale-nav-main:nth-child(3) > li > a > span\")";
    WebDriver driver;
    ConfigFileReader configFileReader;
    PipeLIne_ListingPage pipeLIne_listingPage;

    public LogsPage(WebDriver driver) {
        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        pipeLIne_listingPage = PageFactory.initElements(driver, PipeLIne_ListingPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);
        configFileReader = new ConfigFileReader();


    }

    public void navigateToLogsPage() throws InterruptedException {
        CommonFunction.clickOnShadowElement(driver,jsLogsTab);
    }
    public void validatePipelineName() throws InterruptedException {
        CommonFunction.waitForElementToAppear(driver,filterFieldPipelineName);
        filterFieldPipelineName.sendKeys(EnvSetUp.getDataKeyValue(EnvSetUp.getDataKeyValue(Constant.PipeLineName)));
        pipeLIne_listingPage.validatePipeLineRecord();

    }

}




