package com.steps;

import com.baselibrary.Baseclass;
import com.dataproviderUtilities.ConfigFileReader;
import com.pagesPF.ConnectionsPage;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class createNewConnection extends Baseclass {

    public ConnectionsPage connectionsPage;
    public ConfigFileReader configFileReader;

    public createNewConnection()
    {

        connectionsPage= PageFactory.initElements(driver,ConnectionsPage.class);
        configFileReader=new ConfigFileReader();

    }

    @And("navigates to {string} page")
    public void navigatesToPage(String createConnection) throws InterruptedException {
        connectionsPage.navigateToCreateConnectionScreen(createConnection);

    }

    @When("he enters {string},{string},{string} ,principal and file name")
    public void heEntersPrincipalAndFileName(String name, String description, String connectionType ) throws IOException, InterruptedException {
        connectionsPage.enterBasicConnectionDetails(name,description,connectionType);
        connectionsPage.enterKerberosPrincipalDetails();
    }

    @And("when clicks on Test connection")
    public void whenClicksOnTestConnection() throws InterruptedException {
        connectionsPage.testConnection();
    }

    @Then("Connection is created and tested")
    public void connectionIsCreatedAndTested() {
        connectionsPage.saveTheConnection();
    }

}