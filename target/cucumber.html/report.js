$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/CreateConnection.feature");
formatter.feature({
  "name": "User should be able to Create, Validate Connections on Connections Page",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateConnection"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to create Kerberos connection",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@CRC-Test1"
    },
    {
      "name": "@TC1"
    }
  ]
});
formatter.step({
  "name": "user is on DIL login page",
  "keyword": "Given "
});
formatter.step({
  "name": "enter username and password",
  "keyword": "When "
});
formatter.step({
  "name": "navigates to the \"\u003cCreateConnection\u003e\" tab",
  "keyword": "And "
});
formatter.step({
  "name": "enters \"\u003cName\u003e\",\"\u003cDescription\u003e\",\"\u003cConnectionType\u003e\",principal and fileType",
  "keyword": "When "
});
formatter.step({
  "name": "connection should be tested successfully",
  "keyword": "Then "
});
formatter.step({
  "name": "creates the connection",
  "keyword": "When "
});
formatter.step({
  "name": "connection with \"\u003cName\u003e\" should be validated on Connection listing page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "CreateConnection",
        "Name",
        "Description",
        "ConnectionType"
      ]
    },
    {
      "cells": [
        "Create a connection",
        "AutomationKerberos",
        "Creating Connection",
        "KERBEROS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create Kerberos connection",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateConnection"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@CRC-Test1"
    },
    {
      "name": "@TC1"
    }
  ]
});
formatter.write("--Starting the Execution--");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on DIL login page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.commonSteps.userIsOnDILLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.commonSteps.enterUsernameAndPassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigates to the \"Create a connection\" tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.navigatesToTheTab(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"AutomationKerberos\",\"Creating Connection\",\"KERBEROS\",principal and fileType",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.entersPrincipalAndFileType(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection should be tested successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.connectionShouldBeTestedSuccessfully()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates the connection",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.createsTheConnection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "connection with \"AutomationKerberos\" should be validated on Connection listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.connectionWithShouldBeValidatedOnConnectionListingPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
});