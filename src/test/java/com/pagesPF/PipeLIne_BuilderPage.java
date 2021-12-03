package com.pagesPF;

import com.managersUtilities.CommonFunction;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.List;


public class PipeLIne_BuilderPage {

    public ProjectsPage projectspage;
    public PipeLIne_ListingPage pipeLIne_listingPage;
    public Functions_LeanPageObject functions_leanPageObject;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"Name*\"]//input[@type=\"text\"]")
    public WebElement FieldEnterName;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"File Path*\" or @label=\"Folder Path*\"]//input[@type=\"text\"]")
    public WebElement filePath;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"File Path*\" or @label=\"Folder Path*\"]//input[@type=\"text\"]")
    public List<WebElement> filePathOnDest;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Column seperator*\"]/following::input[1]")
    public WebElement columnSeparatorOnSource;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"Column separator*\"]//input[@type=\"text\"]")
    public WebElement columnSeparatorOnDest;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Add \"]")
    public WebElement buttonAdd;
    @FindBy(how = How.XPATH, using = "//scale-button[normalize-space()=\"Save\"]")
    WebElement buttonSaveRecord;
    @FindBy(how = How.XPATH, using = "//*[text()=\"Status\"]")
    public WebElement status;
    @FindBy(how = How.XPATH, using = "//*[@id=\"base-layout-sidebar\"]//div[2]//div//scale-dropdown[3]/div")
    public WebElement manualSchemaConnectionDropDown;
    @FindBy(how = How.XPATH, using = "//scale-dropdown[@label=\"Registry Name*\"]//div//select")
    public WebElement RegistryNameDropDown;
    @FindBy(how = How.XPATH, using = "//*[text()=' + ']")
    public WebElement addButtonIcon;
    @FindBy(how = How.XPATH, using = "//*[text()=' Destination ']")
    public WebElement selectDestination;
    @FindBy(how = How.XPATH, using = "//*[text()=' Transformation ']")
    public WebElement selectTransformation;
    @FindBy(how = How.XPATH, using = "//*[text()=' Custom SQL ']")
    public WebElement selectCustomSQL;
    @FindBy(how = How.XPATH, using = "//scale-text-field[@label=\"Custom Name*\"]//input[@type=\"text\"]")
    public WebElement textFieldCustomSQLName;
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
    public static String saveMode = "//*[text()='%s ']";
    public String connection = "//*[text()='%s ']";
    public String fileType = "//*[text()='%s ']";
    public String schemaSource = "//*[text()='%s ']";
    public String manualSchemaConnection = "//*[text()='%s ']";
    public String deleteRecord = "//*[text()=' %s ']";
    public String recordName = "//*[@title='%s']";
    public String destinationName = "//*[@title='%s']";
    public String transformation = "//*[@title='%s']";
    public String iconOnPipeLineBuilderPage = "//*[text()='%s']";
    public String topicName = "//*[text()='%s ']";
    public String offSet = "//*[text()='%s ']";
    public String registryName = "//*[text()=' %s '] ";
    @FindBy(how = How.XPATH, using = "//span[text()=' Choose Database ']")
    public WebElement chooseDatabase;
    @FindBy(how = How.XPATH, using = "//input[@placeholder='Database']")
    public WebElement textFieldDatabaseName;
    @FindBy(how = How.XPATH, using = "//input[@placeholder='Schema']")
    public WebElement textFieldDatabaseSchema;
    @FindBy(how = How.XPATH, using = "//input[@placeholder='Table']")
    public WebElement textFieldDatabaseTable;
    @FindBy(how = How.XPATH, using = "//input[@placeholder='Columns']")
    public WebElement textFieldDatabaseColumn;
    public String databaseName = "//label[text()=' %s ']";
    public String databaseSchema = "//label[text()=' %s ']";
    public String databaseTable = "//label[text()=' %s ']";
    public String databaseCol1 = "//label[text()=' %s ']";
    @FindBy(how = How.XPATH, using = "//*[@accessibility-title='Edit']")
    public WebElement btnEditSource;
    @FindBy(how = How.XPATH, using = "//*[text()='Save ']")
    public WebElement btnEditSourceSave;
    @FindBy(how = How.XPATH, using = "//*[text()=' Save ']")
    public WebElement btnDatabaseConfigSave;
    @FindBy(how = How.XPATH, using = "//scale-button[normalize-space()=\"+ Add node\"]")
    public WebElement addNodeButton;
    @FindBy(how = How.XPATH, using = "//scale-button[normalize-space()=\"+ Add subquery\"]")
    public WebElement addSubQuery;
    @FindBy(how = How.XPATH, using = "//scale-button[normalize-space()=\"+ Add subquery\"]")
    public WebElement queryNameTextField;
    @FindBy(how = How.XPATH, using = "//scale-textarea[@label=\"Custom SQL*\"]//div//textarea")
    public WebElement queryTextField;
    @FindBy(how = How.XPATH, using = "//scale-modal[@heading=\"Add Subquery\"]//scale-button[@slot=\"action\"][normalize-space()=\"Add\"]")
    public WebElement buttonAddOnSubQuery;
    @FindBy(how = How.XPATH, using = "//scale-button[@xpath='1'][text()=' Add ']")
    public WebElement buttonAddOnCustomSQL;
    @FindBy(how = How.XPATH, using = "//*[text()='Direct Query ']")
    public WebElement directQueryOption;
    public String nodeNameOnCustomSQL="//*[text()='%s ']";
    public String updatedDababaseName = "//div[text()='%s']";
    public String updatedDababaseTableName = "//div[text()='%s']";
    public String updatedDababaseColName = "//div[text()=' %s ']";



    public String recordNameOnProperties = "//div[text()=\"%s\"]";
    public String connectionNameOnProperties = "//div[text()=\"%s\"]";
    WebDriver driver;


    public PipeLIne_BuilderPage(WebDriver driver) {

        this.driver = driver;
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        pipeLIne_listingPage = PageFactory.initElements(driver, PipeLIne_ListingPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);

    }

    public void createCustomSQL(String customName,String nodeName,String sqlName,String customSQL)
    {
        CommonFunction.waitForElementToAppear(driver, addButtonIcon);
        addButtonIcon.click();
        CommonFunction.waitForElementToAppear(driver, selectCustomSQL);
        selectCustomSQL.click();
        CommonFunction.waitForElementToAppear(driver, selectCustomSQL);

    }
    public void clickOnAddSourceORDestinationIcon(String icon) throws InterruptedException {
        CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon);
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon));
        CommonFunction.getCustomisedWebElement(driver, iconOnPipeLineBuilderPage, icon).click();
    }

    public void createSourceWithFile(String sourceName, String typeToAdd, String connectionToAdd, String fileTypeToAdd, String filepath, String colSeparator, String schemaSourceToAdd, String manualSchema) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, fileType, fileTypeToAdd));
        CommonFunction.waitForElementToAppear(driver, filePath);
        CommonFunction.scrollToElement(driver, filePath);
        filePath.sendKeys(filepath);
        enterColumnSeparator(colSeparator);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, schemaSource, schemaSourceToAdd));
        selectManualSchemaConnectionForFile(manualSchema);
        CommonFunction.waitForElementToAppear(driver, buttonAdd);
        buttonAdd.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);
    }



    public void selectManualSchemaConnectionForFile(String schemaName) {
        try {
            if (manualSchemaConnectionDropDown.isDisplayed()) {
                CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, manualSchemaConnection, schemaName));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void enterColumnSeparator(String colSeparator)
    {
        try {
            if (columnSeparatorOnSource.isDisplayed()) {
                columnSeparatorOnSource.sendKeys(colSeparator);            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createTransformation(String transformationName, String category, String transformationType, String columnValue) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonIcon);
        addButtonIcon.click();
        CommonFunction.waitForElementToAppear(driver, selectTransformation);
        selectTransformation.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(transformationName);
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, categoryToSelect, category));
        CommonFunction.getCustomisedWebElement(driver, categoryToSelect, category).click();
        CommonFunction.waitForElementToAppear(driver, CommonFunction.getCustomisedWebElement(driver, transformationTypeToSelect, transformationType));
        CommonFunction.getCustomisedWebElement(driver, transformationTypeToSelect, transformationType).click();
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, columnOptionToSelect, columnValue));
        selectAddColumn.click();
        CommonFunction.scrollToElement(driver, selectAddButton);
        CommonFunction.waitForElementToAppear(driver, selectAddButton);
        selectAddButton.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);

    }

    public void createDestinationKafka_FileSystem(String destName, String typeToAdd, String connectionToAdd, String fileToAdd, String filePath, String topicToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonIcon);
        addButtonIcon.click();
        CommonFunction.waitForElementToAppear(driver, selectDestination);
        selectDestination.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(destName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, fileType, fileToAdd));
        CommonFunction.scrollToElement(driver, selectAddButton);
        selectDestType(filePath, topicToAdd);




    }

    public void selectDestType(String filePathToAdd, String topicToAdd) throws InterruptedException, IOException {

        if (filePathOnDest.size() > 0) {

            CommonFunction.scrollToElement(driver, filePath);
            filePath.sendKeys(filePathToAdd);
            try {
                if (columnSeparatorOnDest.isDisplayed()) {
                    columnSeparatorOnDest.sendKeys(",");            }
            } catch (Exception e) {
                e.printStackTrace();
            }
        } else {
            CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, topicName, topicToAdd));
        }
    }


    public void createSourceWithKafka(String sourceName, String typeToAdd, String connectionToAdd, String topicToAdd, String schemaToAdd, String registryNameToAdd, String offsetToAdd, String key, String value) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, topicName, topicToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, schemaSource, schemaToAdd));
        selectRegistryForManualSchemaKafka(registryNameToAdd);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, offSet, offsetToAdd));
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
                CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, registryName, registryNameToAdd));
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    public void createSourceWithDelta(String sourceName, String typeToAdd, String connectionToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        buttonAdd.click();
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, status);
    }

    public void createSourceWithRDBMS(String sourceName, String typeToAdd, String connectionToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(sourceName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.waitForSomeTime();
    }

    public void createDestinationDelta(String destName, String typeToAdd, String connectionToAdd, String modeToAdd) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, addButtonIcon);
        addButtonIcon.click();
        CommonFunction.waitForElementToAppear(driver, selectDestination);
        selectDestination.click();
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        FieldEnterName.sendKeys(destName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, type, typeToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, connectionToAdd));
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, saveMode, modeToAdd));


    }

    public void selectFlowType(String type) {
        CommonFunction.waitForElementToAppear(driver, addButtonIcon);
        addButtonIcon.click();
        if (type.equalsIgnoreCase("Transaformation")) {
            CommonFunction.waitForElementToAppear(driver, selectTransformation);
            selectTransformation.click();
        } else if (type.equalsIgnoreCase("CustomSQL")) {
            CommonFunction.waitForElementToAppear(driver, selectCustomSQL);
            selectCustomSQL.click();
        } else {
            CommonFunction.waitForElementToAppear(driver, selectDestination);
            selectDestination.click();
        }

    }

    public void enterRDBMS_DBConfigurations(String dbName, String dbSchema, String dbTable, String dbCol) throws InterruptedException {
        CommonFunction.waitForSomeTime();
        CommonFunction.waitForElementToBeClickable(driver, chooseDatabase);
        chooseDatabase.click();

        CommonFunction.waitForElementToAppear(driver, textFieldDatabaseName);
        CommonFunction.enterText(textFieldDatabaseName, dbName);
        (CommonFunction.getCustomisedWebElement(driver, databaseName, dbName)).click();

        CommonFunction.waitForElementToAppear(driver, textFieldDatabaseSchema);
        CommonFunction.enterText(textFieldDatabaseSchema, dbSchema);
        (CommonFunction.getCustomisedWebElement(driver, databaseSchema, dbSchema)).click();

        CommonFunction.waitForElementToAppear(driver, textFieldDatabaseTable);
        CommonFunction.enterText(textFieldDatabaseTable, dbTable);
        (CommonFunction.getCustomisedWebElement(driver, databaseTable, dbTable)).click();

        CommonFunction.waitForElementToAppear(driver, textFieldDatabaseColumn);
        CommonFunction.enterText(textFieldDatabaseColumn, dbCol);
        (CommonFunction.getCustomisedWebElement(driver, databaseCol1, dbCol)).click();

        CommonFunction.waitForElementToBeClickable(driver, btnDatabaseConfigSave);
        btnDatabaseConfigSave.click();

    }

    public void editRDBMSSourceDetails(String dbName, String dbSchema, String dbTable, String dbCol) throws InterruptedException {
        CommonFunction.waitForElementToAppear(driver, btnEditSource);
        btnEditSource.click();
        enterRDBMS_DBConfigurations(dbName, dbSchema, dbTable, dbCol);
        CommonFunction.waitForSomeTime();
        CommonFunction.waitForElementToBeClickable(driver, btnEditSourceSave);
        btnEditSourceSave.click();
    }
    public void editRecordOnPipelineBuilder(String updatedRecordName, String updatedConnection) throws InterruptedException, IOException {
        CommonFunction.waitForElementToAppear(driver, pipeLIne_listingPage.editToolTip);
        CommonFunction.clickByHoveringMouse(driver, pipeLIne_listingPage.editToolTip);
        CommonFunction.waitForElementToAppear(driver, FieldEnterName);
        CommonFunction.waitForMinimalTime();
        FieldEnterName.clear();
        FieldEnterName.sendKeys(updatedRecordName);
        CommonFunction.scrollOnElementToClick(driver, CommonFunction.getCustomisedWebElement(driver, connection, updatedConnection));


    }

    public void saveDetails() throws InterruptedException {
        CommonFunction.scrollToElement(driver, buttonSaveRecord);
        CommonFunction.waitForMinimalTime();
        CommonFunction.clickByHoveringMouse(driver, buttonSaveRecord);

    }

    public void validateUpdatedRecord(String updatedRecordName, String updatedConnection) throws InterruptedException {
        CommonFunction.scrollToElement(driver, status);
        (CommonFunction.getCustomisedWebElement(driver, recordName, updatedRecordName)).click();
        CommonFunction.waitForSomeTime();
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, recordNameOnProperties, updatedRecordName).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, connectionNameOnProperties, updatedConnection).isDisplayed());


    }

}




