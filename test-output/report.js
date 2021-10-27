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
      "name": "@PBE-API-Test1"
    },
    {
      "name": "@TC30"
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
      "name": "@PBE-API-Test1"
    },
    {
      "name": "@TC30"
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
      "name": "@PBE-API-Test1"
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
      "name": "@PBE-API-Test1"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-38-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.5aw9Kv}, goog:chromeOptions: {debuggerAddress: localhost:46389}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2718bddd5bbb6c0a92b85cb353b3c84f\n*** Element info: {Using\u003dxpath, value\u003d//div[contains(text(),\"Connected\")]}\n\tat jdk.internal.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy21.toString(Unknown Source)\n\tat java.base/java.lang.String.valueOf(String.java:2951)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:168)\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.toString(ExpectedConditions.java:305)\n\tat java.base/java.lang.String.valueOf(String.java:2951)\n\tat java.base/java.lang.StringBuilder.append(StringBuilder.java:168)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:268)\n\tat com.managersUtilities.CommonFunction.waitLessForElementToAppear(CommonFunction.java:141)\n\tat com.pagesPF.ConnectionsPage.testConnection(ConnectionsPage.java:120)\n\tat com.steps.createConnectionsSteps.connectionShouldBeTestedSuccessfully(createConnectionsSteps.java:43)\n\tat ✽.connection should be tested successfully(file:///home/pihu/dil_automation/src/test/resources/features/projects/CreateConnection.feature:25)\n",
  "status": "failed"
});
formatter.step({
  "name": "creates the connection",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.createsTheConnection()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "connection with \"AutomationSSL\" should be validated on Connection listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createConnectionsSteps.connectionWithShouldBeValidatedOnConnectionListingPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/projects/ProjectsApiCalls.feature");
formatter.feature({
  "name": "To validate created Project with backend API",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "user is able to create a Project and is able to validate it in backend Api",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@RegN"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@PBE-API-Test1"
    },
    {
      "name": "@TC32"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.step({
  "name": "creates project with \"\u003cProjectName\u003e\",\"\u003cDescription\u003e\",\"\u003cTag\u003e\" and engine",
  "keyword": "When "
});
formatter.step({
  "name": "authenticated for backend api with \"\u003cclientId\u003e\",\"\u003cclientSecret\u003e\",\"\u003cpassWord\u003e\",\"\u003cuserName\u003e\" and \"\u003cpathParam\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "fetches the response with \"\u003cjsonPath\u003e\" to get \"\u003cbearerToken\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to use \"\u003cQueryParam\u003e\" to validate project on \"\u003cBackendApiPath\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "ProjectName",
        "Description",
        "Tag",
        "QueryParam",
        "BackendApiPath",
        "clientId",
        "clientSecret",
        "passWord",
        "userName",
        "pathParam",
        "jsonPath",
        "bearerToken"
      ]
    },
    {
      "cells": [
        "Auto_Pro",
        "CreatingPipeLine",
        "Test",
        "projectName",
        "/projects",
        "dil-ui",
        "ovrzCm54Zu+q2SuJIhaOnA\u003d\u003d",
        "Lp4,mLd:",
        "parihars",
        "/authservice/login",
        "tokenDetails",
        "access_token"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a Project and is able to validate it in backend Api",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Smoke"
    },
    {
      "name": "@RegN"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@PBE-API-Test1"
    },
    {
      "name": "@TC32"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-38-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.kNWZNV}, goog:chromeOptions: {debuggerAddress: localhost:44961}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: befebcc8961b69230d78ce0770565256\n\tat jdk.internal.reflect.GeneratedConstructorAccessor15.newInstance(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\n\tat com.managersUtilities.CommonFunction.deleteAllCookies(CommonFunction.java:33)\n\tat com.steps.commonSteps.userIsOnDILLoginPage(commonSteps.java:31)\n\tat ✽.user is on DIL login page(file:///home/pihu/dil_automation/src/test/resources/features/projects/ProjectsApiCalls.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "enter username and password",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.commonSteps.enterUsernameAndPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates project with \"Auto_Pro\",\"CreatingPipeLine\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "authenticated for backend api with \"dil-ui\",\"ovrzCm54Zu+q2SuJIhaOnA\u003d\u003d\",\"Lp4,mLd:\",\"parihars\" and \"/authservice/login\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.apiSteps.authenticatedForBackendApiWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "fetches the response with \"tokenDetails\" to get \"access_token\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.apiSteps.fetchesTheResponseWithToGet(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to use \"projectName\" to validate project on \"/projects\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.apiSteps.userShouldBeAbleToUseToValidateProjectOn(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
});