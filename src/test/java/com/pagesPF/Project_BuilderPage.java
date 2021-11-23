package com.pagesPF;

import com.managersUtilities.CommonFunction;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;


public class Project_BuilderPage {

    public ProjectsPage projectspage;
    WebDriver driver;
    @FindBy(how = How.XPATH, using = "//*[@id=\"app\"]//scale-icon-action-edit")
    WebElement editProjectToolTipOnProjectBuilder;
    @FindBy(how = How.XPATH, using = "//*[@aria-keyshortcuts='Delete']")
    WebElement deleteTagToolTipOnProjectBuilderPage;
    @FindBy(how = How.XPATH, using = "//*[@placeholder='Create new tag']")
    WebElement textFieldTagName;
    @FindBy(how = How.XPATH, using = "//*[text()='Save']")
    WebElement buttonSaveOnProjectBuilderPage;
    String projectNameOnProjectBuilderPage = "//*[contains(text(),' %s ')]";

    public Project_BuilderPage(WebDriver driver) {

        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);

    }

    public void editProjectDetailsOnProjectBuilder(String tagName, String Description) throws InterruptedException {
        CommonFunction.waitForElementToAppear(driver, projectspage.existingProjectOnProjectListingPage);
        projectspage.existingProjectOnProjectListingPage.click();
        CommonFunction.waitForElementToAppear(driver,projectspage.builderTabOnProjectListingPage);
        projectspage.builderTabOnProjectListingPage.click();
        CommonFunction.clickByHoveringMouse(driver, editProjectToolTipOnProjectBuilder);
        CommonFunction.clickByHoveringMouse(driver, deleteTagToolTipOnProjectBuilderPage);
        textFieldTagName.sendKeys(Keys.ENTER);
        textFieldTagName.sendKeys(tagName);
        textFieldTagName.sendKeys(Keys.ENTER);
        CommonFunction.scrollToElement(driver, buttonSaveOnProjectBuilderPage);
        CommonFunction.waitForElementToAppear(driver, buttonSaveOnProjectBuilderPage);
        CommonFunction.waitForMinimalTime();
        buttonSaveOnProjectBuilderPage.click();

    }


}


