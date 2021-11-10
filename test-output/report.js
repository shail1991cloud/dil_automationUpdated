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
  "name": "user is able to create SSL connection",
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
      "name": "@CRC-Test2"
    },
    {
      "name": "@TC31"
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
  "name": "enters \"\u003cName\u003e\",\"\u003cDescription\u003e\",\"\u003cConnectionType\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters \"\u003cKeyStoreFileName\u003e\",\"\u003cTrustStoreFileName\u003e\",\"\u003cKeyStorePassword\u003e\",\"\u003cTrustScorePassword\u003e\",\"\u003cTLSProtocol\u003e\"",
  "keyword": "And "
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
        "ConnectionType",
        "KeyStoreFileName",
        "TrustStoreFileName",
        "KeyStorePassword",
        "TrustScorePassword",
        "TLSProtocol"
      ]
    },
    {
      "cells": [
        "Create a connection",
        "AutomationSSL",
        "Creating Connection",
        "SSL",
        "kafka-keystore.jks",
        "kafka-truststore.jks",
        "confluent",
        "confluent",
        "TLS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create SSL connection",
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
      "name": "@CRC-Test2"
    },
    {
      "name": "@TC31"
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
  "name": "enters \"AutomationSSL\",\"Creating Connection\",\"SSL\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.enters(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"kafka-keystore.jks\",\"kafka-truststore.jks\",\"confluent\",\"confluent\",\"TLS\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "connection with \"AutomationSSL\" should be validated on Connection listing page",
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