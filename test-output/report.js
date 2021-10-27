$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/simpleScenario.feature");
formatter.feature({
  "name": "user should be able to make a connection",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user is able to make kerberos connection",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CNC-1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Positive"
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
  "name": "navigates to \"\u003cCreate Connection\u003e\" page",
  "keyword": "And "
});
formatter.step({
  "name": "he enters \"\u003cname\u003e\",\"\u003cdescription\u003e\",\"\u003cconnectionType\u003e\" ,principal and file name",
  "keyword": "When "
});
formatter.step({
  "name": "when clicks on Test connection",
  "keyword": "And "
});
formatter.step({
  "name": "Connection is created and tested",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Create Connection",
        "name",
        "description",
        "connectionType"
      ]
    },
    {
      "cells": [
        "Create a connection",
        "Connection_Dil",
        "Connection_Dil",
        "KERBEROS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to make kerberos connection",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CNC-1"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Positive"
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
  "name": "navigates to \"Create a connection\" page",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createNewConnection.navigatesToPage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "he enters \"Connection_Dil\",\"Connection_Dil\",\"KERBEROS\" ,principal and file name",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createNewConnection.heEntersPrincipalAndFileName(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "when clicks on Test connection",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createNewConnection.whenClicksOnTestConnection()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Connection is created and tested",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createNewConnection.connectionIsCreatedAndTested()"
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