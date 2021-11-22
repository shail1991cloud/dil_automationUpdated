package com.steps;

import com.baselibrary.Baseclass;
import com.dataproviderUtilities.ConfigFileReader;
import com.helperUtilities.LoggerHelper;
import com.managersUtilities.CommonFunction;
import com.pagesPF.*;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.apache.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.Map;

public class createSourceDestAndTransform extends Baseclass {
    ProjectsPage projectspage;
    Project_BuilderPage projectBuilderpage;
    public ConfigFileReader configFileReader;
    Functions_LeanPageObject functions_leanPageObject;
    PipeLIne_ListingPage pipeLIne_listingPage;
    PipeLIne_BuilderPage pipeLIne_builderPage;
    Logger log = LoggerHelper.getLogger(createSourceDestAndTransform.class);

    public createSourceDestAndTransform() {
        projectspage = PageFactory.initElements(driver, ProjectsPage.class);
        projectBuilderpage = PageFactory.initElements(driver, Project_BuilderPage.class);
        functions_leanPageObject = PageFactory.initElements(driver, Functions_LeanPageObject.class);
        pipeLIne_listingPage = PageFactory.initElements(driver, PipeLIne_ListingPage.class);
        pipeLIne_builderPage = PageFactory.initElements(driver, PipeLIne_BuilderPage.class);
        configFileReader = new ConfigFileReader();

    }

    @And("creates a {string} having {string} and {string}")
    public void createsAHavingAnd(String pipelineName, String description, String tag) throws InterruptedException, IOException {
        pipeLIne_listingPage.createPipeLine(pipelineName, description, tag);
        log.info("Pipe line is created with name-->" + pipelineName);

    }


    @And("clicks on {string}")
    public void clicksOn(String Icon) throws InterruptedException {
        pipeLIne_builderPage.clickOnAddSourceORDestinationIcon(Icon);
        log.info("Icon is clicked-->" + Icon);

    }

    @Then("Source should get created with {string}")
    public void sourceShouldGetCreatedWith(String sourceName) throws InterruptedException {
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.sourceName, sourceName).isDisplayed());
        CommonFunction.waitForSomeTime();
        (CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.sourceName, sourceName)).click();
        log.info("DRecord validated-->" + sourceName);

    }

    @When("Enters {string},{string},{string},{string},{string},{string},{string},{string}")
    public void enters(String Name, String type, String connection, String fileType, String filePath, String separator, String schemaSource, String manualSchema) throws IOException, InterruptedException {
        pipeLIne_builderPage.createSourceWithFile(Name, type, connection, fileType, filePath, separator, schemaSource, manualSchema);
        log.info("Details entered-->" + filePath + "--" + connection);
    }

    @And("click on {string} to delete")
    public void clickOnToDeleteSource(String deleteSource) throws InterruptedException {
        functions_leanPageObject.deleteRecord(pipeLIne_builderPage.deleteRecord, deleteSource);
        CommonFunction.waitForElementToAppear(driver, pipeLIne_builderPage.deleteButtonOnDeleteSourcePopUp);
        pipeLIne_builderPage.deleteButtonOnDeleteSourcePopUp.click();
        CommonFunction.waitForSomeTime();
        log.info("Button Clicked-->" + deleteSource);

    }


    @Then("source {string} should get deleted")
    public void sourceShouldGetDeleted(String name) {
        functions_leanPageObject.validatePresenceOfRecord(pipeLIne_builderPage.sourceName, name);
        log.info("Source Is not Present with Name-->" + name);

    }

    @Then("destination {string} should get deleted")
    public void destinationShouldGetDeleted(String name) {
        functions_leanPageObject.validatePresenceOfRecord(pipeLIne_builderPage.sourceName, name);
        log.info("Source Is not Present with Name-->" + name);

    }

    @When("enters {string},{string},{string},{string} and click add")
    public void entersAndClick(String TransformationName, String Category, String TransformationType, String columnValue) throws IOException, InterruptedException {
        pipeLIne_builderPage.createTransformation(TransformationName, Category, TransformationType, columnValue);
        log.info("Transformation is Created with Name-->" + TransformationName);

    }

    @Then("Transformation with {string} should get created")
    public void transformationWithShouldGetCreated(String TransformationName) throws InterruptedException {
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.transformation, TransformationName).isDisplayed());
        CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.transformation, TransformationName).click();
        log.info("Transformation is validated with Name-->" + TransformationName);
    }

    @When("enters {string},{string},{string},{string} ,{string},{string}")
    public void entersAndClickAdd(String DestinationName, String DestinationType, String DestConnection, String fileType, String filePath, String TopicName) throws IOException, InterruptedException {
        pipeLIne_builderPage.createDestinationKafka_FileSystem(DestinationName, DestinationType, DestConnection, fileType, filePath, TopicName);
        log.info("Destination is Created with Name-->" + DestinationName);
    }

    @Then("Destination with {string} should get created")
    public void destinationWithShouldGetCreated(String DestinationName) throws InterruptedException {
        CommonFunction.waitForSomeTime();
        CommonFunction.scrollToElement(driver, pipeLIne_builderPage.status);
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.destinationName, DestinationName).isDisplayed());
        (CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.destinationName, DestinationName)).click();
        log.info("DRecord validated-->" + DestinationName);

    }


    @When("Enters {string},{string},{string},{string},{string},{string},{string},{string},{string} and clicks on add")
    public void entersAndClicksOnAdd(String SourceName, String SourceType, String SourceConnection, String TopicName, String SourceSchema, String RegistryName, String Offset, String Key, String Value) throws IOException, InterruptedException {
        pipeLIne_builderPage.createSourceWithKafka(SourceName, SourceType, SourceConnection, TopicName, SourceSchema, RegistryName, Offset, Key, Value);
        log.info("Kafka Source  is created with Name-->" + SourceName);

    }

    @And("clicks add")
    public void clicksAdd() {
        CommonFunction.waitForElementToAppear(driver, pipeLIne_builderPage.selectAddButton);
        pipeLIne_builderPage.selectAddButton.click();
        log.info("Button add clicked for Dest creation");
    }

    @And("clicks add button of {string}")
    public void clicksAddButtonOf(String type) throws InterruptedException {
        if (type.equalsIgnoreCase("Source")) {
            CommonFunction.waitForElementToAppear(driver, pipeLIne_builderPage.buttonAdd);
            pipeLIne_builderPage.buttonAdd.click();
        } else {
            CommonFunction.waitForElementToAppear(driver, pipeLIne_builderPage.selectAddButton);
            pipeLIne_builderPage.selectAddButton.click();
        }
        log.info("Button add clicked for " + type + " creation");
        CommonFunction.waitForSomeTime();


    }

    @When("enters destination keys and value")
    public void entersDestinationKeysAndValue(io.cucumber.datatable.DataTable dProperties) throws InterruptedException {
        for (Map<Object, Object> pProp : dProperties.asMaps(String.class, String.class)) {
            CommonFunction.waitForElementToBeClickable(driver, pipeLIne_listingPage.keysForDest);
            pipeLIne_listingPage.keysForDest.sendKeys((CharSequence) pProp.get("DKey"));
            pipeLIne_listingPage.valuesForDest.sendKeys((CharSequence) pProp.get("DValue"));
            CommonFunction.waitForElementToBeClickable(driver, pipeLIne_listingPage.buttonsAdd.get(0));
            pipeLIne_listingPage.buttonsAdd.get(0).click();
            CommonFunction.waitForSomeTime();


        }
        log.info("Destination properties entered");

    }

    @When("Enters {string},{string},{string}")
    public void enters(String sourceName, String type, String sourceConnection) throws IOException, InterruptedException {

        pipeLIne_builderPage.createSourceWithDelta(sourceName, type, sourceConnection);
    }

    @When("enters {string},{string},{string},{string}")
    public void enters(String nameDest, String destType, String destConn, String destMode) throws IOException, InterruptedException {
        pipeLIne_builderPage.createDestinationDelta(nameDest, destType, destConn, destMode);
    }

    @And("Enters {string} {string} {string} {string} for Database configuration")
    public void entersForDatabaseConfiguration(String dataBaseName, String databaseSchema, String databaseTable, String databaseCol)  throws InterruptedException {
        pipeLIne_builderPage.enterRDBMS_DBConfigurations(dataBaseName,databaseSchema,databaseTable,databaseCol);
    }

    @And("Select flow as {string}")
    public void selectFlowAs(String type) {
        pipeLIne_builderPage.selectFlowType(type);
    }


    @When("Enters {string},{string},{string} for RDBMS Connection")
    public void entersForRDBMSConnection(String sourceName, String type, String sourceConnection) throws IOException, InterruptedException {
        pipeLIne_builderPage.createSourceWithRDBMS(sourceName, type, sourceConnection);
    }

    @And("Enter Save mode {string}")
    public void enterSaveMode(String modeToAdd) throws InterruptedException, IOException {
        CommonFunction.scrollOnElement(driver, CommonFunction.getCustomisedWebElement(driver, PipeLIne_BuilderPage.saveMode, modeToAdd));
    }

    @When("Edit {string} {string} {string} {string} fields for Source")
    public void editFieldsForSource(String updatedDatabase,String updatedSchema, String updatedTableName, String updatedColumnName) throws InterruptedException {
        pipeLIne_builderPage.editRDBMSSourceDetails(updatedDatabase,updatedSchema,updatedTableName,updatedColumnName);
    }

    @Then("Validate updated {string},{string},{string} RDBMS Source")
    public void validateUpdatedRDBMSSource(String updatedDatabase, String updatedTableName, String updatedColumnName) throws InterruptedException {
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.updatedDababaseName, updatedDatabase).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.updatedDababaseTableName, updatedTableName).isDisplayed());
        Assert.assertTrue(CommonFunction.getCustomisedWebElement(driver, pipeLIne_builderPage.updatedDababaseColName, updatedColumnName).isDisplayed());
    }
}