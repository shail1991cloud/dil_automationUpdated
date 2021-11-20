package com.pagesPF;

import com.managersUtilities.CommonFunction;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.List;


public class PipeLIne_BuilderPage {

    public ProjectsPage projectspage;
    public Functions_LeanPageObject functions_leanPageObject;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"Name*\"]//input[@type=\"text\"]")
    public WebElement FieldEnterName;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"File Path*\"]//input[@type=\"text\"]")
    public WebElement filePath;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"File Path*\"]//input[@type=\"text\"]")
    public List<WebElement> filePathOnDest;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Column seperator*\"]/following::input[1]")
    public WebElement columnSeparatorOnSource;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"Column separator*\"]//input[@type=\"text\"]")
    public WebElement columnSeparatorOnDest;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Add \"]")
    public WebElement buttonAdd;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Status\"]")
    public WebElement status;
    @FindBy(how = How.XPATH, using = "//*[@id=\"base-layout-sidebar\"]//div[2]//div//scale-dropdown[3]/div")
    public WebElement manualSchemaConnectionDropDown;
    @FindBy(how = How.XPATH, using = "//scale-dropdown[@label=\"Registry Name*\"]//div//select")
    public WebElement RegistryNameDropDown;
    @FindBy(how = How.XPATH, using = "//*[text()=' + ']")
    public WebElement addButtonOnSourceOrTrans;
    @FindBy(how = How.XPATH, using = "//*[text()=' Destination ']")
    public WebElement selectDestination;
    @FindBy(how = How.XPATH, using = "//*[text()=' Transformation ']")
    public WebElement selectTransformation;
    @FindBy(how = How.XPATH, using = "//scale-accordion[@expanded=\"true\"]//scale-button[@variant=\"secondary\"][normalize-space()=\"+ Add Column\"]")
    public WebElement selectAddColumn;
    @FindBy(how = How.XPATH, using = "//scale-button[normalize-space()=\"Add\"]")
    public WebElement selectAddButton;
    @FindBy(how = How.XPATH, using = "//*[text()=' Delete ']")
    public WebElement deleteButtonOnDeleteSourcePopUp;
    @FindBy(how = How.XPATH, using = "//input[1][@name='keyAdd']")
    public WebElement keyForSource;
    @FindBy(how = How.XPATH, using = "//input[1][@name='valueAdd']")
    public WebElement valueForSource;
    @FindBy(how = How.XPATH, using = "//button[1]")
    public WebElement buttonAddForKeyValue;
    public String categoryToSelect = "//*[text()='%s ']";
    public String transformationTypeToSelect = "//*[text()='%s ']";
    public String columnOptionToSelect = "//scale-accordion[@expanded=\"true\"]//option[normalize-space()=\"%s\"]";
    public String type = "//*[text()='%s ']";
    public String saveMode = "//*[text()='%s ']";
    public String connection = "//*[text()='%s ']";
    public String fileType = "//*[text()='%s ']";
    public String schemaSource = "//*[text()='%s ']";
    public String manualSchemaConnection = "//*[text()='%s ']";
    public String deleteRecord = "//*[text()=' %s ']";
    public String sourceName = "//*[@title='%s']";
    public String destinationName = "//*[@title='%s']";
    public String transformation = "//*[@title='%s']";
    public String iconOnPipeLineBuilderPage = "//*[text()='%s']";
    public String topicName = "//*[text()='%s ']";
    public String offSet = "//*[text()='%s ']";
    public String registryName = "//*[text()=' %s '] ";
    @FindBy(how = How.XPATH, using = "//span[text()=' Choose Database ']")
    public WebElement chooseDatabe;
    @FindBy(how = How.ID, using = "Database Name0")
    public WebElement databaseName;
    @FindBy(how = How.ID, using = "Schema0")
    public WebElement databaseSchema;
    @FindBy(how = How.ID, using = "Table0")
    public WebElement databaseTable;
    @FindBy(how = How.ID, using = "Column0")
    public WebElement databaseCol1;


    WebDriver driver;


    public PipeLIne_BuilderPage(WebDriver driver) {

        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);
    }

    public void clickOnAddSourceORDestinationIcon(String icon) throws InterruptedException {
        CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon);
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon));
        CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon).click();
    }

    public void createSourceWithFile(String sourceName, String typeToAdd, String connectionToAdd, String fileTypeToAdd, String filepath, String colSeparator, String schemaSourceToAdd, String manualSchema) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, fileType, fileTypeToAdd));
        CommonFunction.waitForElementToAppear(driver, filePath);
        CommonFunction.scrollToElement(driver, filePath);
        filePath.sendKeys(filepath);
        CommonFunction.waitForElementToAppear(driver, columnSeparatorOnSource);
        columnSeparatorOnSource.sendKeys(colSeparator);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, schemaSource, schemaSourceToAdd));
        selectManualSchemaConnectionForFile(manualSchema);
        CommonFunction.waitForElementToAppear(driver, buttonAdd);
        buttonAdd.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);
    }

    public void selectManualSchemaConnectionForFile(String schemaName) throws InterruptedException, IOException {
        try {
            if (manualSchemaConnectionDropDown.isDisplayed()) {
                CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, manualSchemaConnection, schemaName));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createTransformation(String transformationName, String category, String transformationType, String columnValue) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonOnSourceOrTrans);
        addButtonOnSourceOrTrans.click();
        CommonFunction.waitForElementToAppear(driver, selectTransformation);
        selectTransformation.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(transformationName);
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, categoryToSelect, category));
        CommonFunction.getCustomisedWebElement(driver, categoryToSelect, category).click();
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, transformationTypeToSelect, transformationType));
        CommonFunction.getCustomisedWebElement(driver, transformationTypeToSelect, transformationType).click();
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, columnOptionToSelect, columnValue));
        selectAddColumn.click();
        CommonFunction.scrollToElement(driver, selectAddButton);
        CommonFunction.waitForElementToAppear(driver, selectAddButton);
        selectAddButton.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);

    }

    public void createDestinationKafka_FileSystem(String destName, String typeToAdd, String connectionToAdd, String fileToAdd, String filePath, String topicToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonOnSourceOrTrans);
        addButtonOnSourceOrTrans.click();
        CommonFunction.waitForElementToAppear(driver, selectDestination);
        selectDestination.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(destName);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, fileType, fileToAdd));
        CommonFunction.scrollToElement(driver, selectAddButton);
        selectDestType(filePath, topicToAdd);


    }

    public void selectDestType(String filePathToAdd, String topicToAdd) throws InterruptedException, IOException {

        if (filePathOnDest.size() > 0) {

            CommonFunction.scrollToElement(driver, filePath);
            filePath.sendKeys(filePathToAdd);
            columnSeparatorOnDest.sendKeys(",");
        } else {
            CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, topicName, topicToAdd));
        }
    }


    public void createSourceWithKafka(String sourceName, String typeToAdd, String connectionToAdd, String topicToAdd, String schemaToAdd, String registryNameToAdd, String offsetToAdd, String key, String value) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, topicName, topicToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, schemaSource, schemaToAdd));
        selectRegistryForManualSchemaKafka(registryNameToAdd);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, offSet, offsetToAdd));
        CommonFunction.scrollToElement(driver, keyForSource);
        CommonFunction.waitForElementToAppear(driver, keyForSource);
        keyForSource.sendKeys(key);
        valueForSource.sendKeys(value);
        CommonFunction.waitForElementToBeClickable(driver, buttonAddForKeyValue);
        CommonFunction.waitForElementToAppear(driver, buttonAdd);
        CommonFunction.waitForElementToBeClickable(driver, buttonAdd);
        buttonAdd.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);
    }

    public void selectRegistryForManualSchemaKafka(String registryNameToAdd) {
        try {
            if (RegistryNameDropDown.isDisplayed()) {
                CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, registryName, registryNameToAdd));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createSourceWithDelta(String sourceName, String typeToAdd, String connectionToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        buttonAdd.click();
        CommonFunction.waitForSomeTime();
//        CommonFunction.scrollToElement(driver, status);
    }

    public void createDestinationDelta(String destName, String typeToAdd, String connectionToAdd, String modeToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonOnSourceOrTrans);
        addButtonOnSourceOrTrans.click();
        CommonFunction.waitForElementToAppear(driver, selectDestination);
        selectDestination.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(destName);
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, saveMode, modeToAdd));


    }

    public void enterRDBMS_DBConfigurations() {
        CommonFunction.waitForElementToBeClickable(driver, chooseDatabe);
        chooseDatabe.click();
        CommonFunction.waitForElementToBeClickable(driver, databaseName);
        databaseName.click();
        CommonFunction.waitForElementToBeClickable(driver, databaseSchema);
        databaseSchema.click();
        CommonFunction.waitForElementToBeClickable(driver, databaseTable);
        databaseTable.click();
        CommonFunction.waitForElementToBeClickable(driver, databaseCol1);
        databaseTable.click();
    }


}




