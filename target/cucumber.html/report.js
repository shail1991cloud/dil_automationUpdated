$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/E2EExecutionTest.feature");
formatter.feature({
  "name": "Creation of a End to End Execution of the pipeline for Spark/TMPL services",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to run created acquire kafka pipeline and validate same in logs",
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
      "name": "@E2EExecution1"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.step({
  "name": "creates project with \"\u003cProjectName\u003e\",\"\u003cDescription\u003e\",\"\u003cTag\u003e\" and engine",
  "keyword": "When "
});
formatter.step({
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "AcquireKafka"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "true"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cSourceTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "trigger",
        "10 seconds"
      ]
    },
    {
      "cells": [
        "checkpointLocation",
        "/tmp/1099/"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Key",
        "Value",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "SourceSchema",
        "RegistryName",
        "Offset",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "SourceTopicName",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "STREAMING",
        "k1",
        "v1",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "KAFKA",
        "TMPLKafkaConnection",
        "CSV",
        ".csv",
        "No_Schema",
        "AutoManualSchemaDND",
        "Earlier",
        "DemoDestination",
        "KAFKA",
        "TMPLKafkaConnection",
        "topic1",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created acquire kafka pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution1"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"KAFKA\",\"TMPLKafkaConnection\",\"topic1\",\"No_Schema\",\"AutoManualSchemaDND\",\"Earlier\",\"k1\",\"v1\" and clicks on add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClicksOnAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"KAFKA\",\"TMPLKafkaConnection\",\"CSV\" ,\".csv\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
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
  "name": "user is able to run created acquire kafka Swagger pipeline and validate same in logs",
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
      "name": "@E2EExecution2"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "AcquireKafkaSwagger"
      ]
    },
    {
      "cells": [
        "header",
        "/definitions/ConsentTypeEvent"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "true"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cSourceTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "trigger",
        "10 seconds"
      ]
    },
    {
      "cells": [
        "checkpointLocation",
        "/tmp/1099/"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Key",
        "Value",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "SourceSchema",
        "RegistryName",
        "Offset",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "SourceTopicName",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "STREAMING",
        "k1",
        "v1",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "KAFKA",
        "TMPLKafkaConnection",
        "CSV",
        ".csv",
        "No_Schema",
        "AutoManualSchemaDND",
        "Earlier",
        "DemoDestination",
        "KAFKA",
        "TMPLKafkaConnection",
        "topic1",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created acquire kafka Swagger pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution2"
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027User name\u0027]/following-sibling::input\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.TDwRnX}, goog:chromeOptions: {debuggerAddress: localhost:40997}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: fd1a5e5ca00263cb728caa88ccad3014\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027User name\u0027]/following-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\n\tat com.pagesPF.DIL_loginpage.loginToDIL(DIL_loginpage.java:36)\n\tat com.steps.commonSteps.enterUsernameAndPassword(commonSteps.java:39)\n\tat ✽.enter username and password(file:///home/pihu/dil_automation/src/test/resources/features/projects/E2EExecutionTest.feature:42)\n",
  "status": "failed"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"KAFKA\",\"TMPLKafkaConnection\",\"topic1\",\"No_Schema\",\"AutoManualSchemaDND\",\"Earlier\",\"k1\",\"v1\" and clicks on add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClicksOnAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"KAFKA\",\"TMPLKafkaConnection\",\"CSV\" ,\".csv\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "user_is_able_to_run_created_acquire_kafka_Swagger_pipeline_and_validate_same_in_logs");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to run created acquire File pipeline and validate same in logs",
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
      "name": "@E2EExecution3"
    },
    {
      "name": "@TC33"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "AcquireFile"
      ]
    },
    {
      "cells": [
        "isReturnable",
        "False"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "False"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cS_FilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cD_FilePath\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "mode",
        ":"
      ]
    },
    {
      "cells": [
        "escape",
        ":"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "S_FilePath",
        "D_FilePath",
        "SourceSchema",
        "Separator",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "STREAMING",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv",
        "hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/",
        "No Schema",
        ",",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created acquire File pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution3"
    },
    {
      "name": "@TC33"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"CSV\" ,\"hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
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
  "name": "user is able to run created Publish File Streaming pipeline and validate same in logs",
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
      "name": "@E2EExecution4"
    },
    {
      "name": "@TC34"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "PublishFile"
      ]
    },
    {
      "cells": [
        "isReturnable",
        "False"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "False"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cS_Path\u003e\",\"\u003cSeparator\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cD_Path\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "mode",
        ":"
      ]
    },
    {
      "cells": [
        "escape",
        ":"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "Destination with \"\u003cDestinationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "S_Path",
        "D_Path",
        "SourceSchema",
        "Separator",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "STREAMING",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "DeltaIO",
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv",
        "hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/",
        "No Schema",
        ",",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created Publish File Streaming pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution4"
    },
    {
      "name": "@TC34"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\" ,\"hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Destination with \"DemoDestination\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
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
  "name": "user is able to run created Publish File Batch pipeline and validate same in logs",
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
      "name": "@E2EExecution5"
    },
    {
      "name": "@TC35"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "PublishFile"
      ]
    },
    {
      "cells": [
        "isReturnable",
        "False"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "False"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cS_Path\u003e\",\"\u003cSeparator\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cD_Path\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "mode",
        ":"
      ]
    },
    {
      "cells": [
        "escape",
        ":"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "Destination with \"\u003cDestinationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "S_Path",
        "D_Path",
        "SourceSchema",
        "Separator",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "BATCH",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "DeltaIO",
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv",
        "hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/",
        "No Schema",
        ",",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created Publish File Batch pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution5"
    },
    {
      "name": "@TC35"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"BATCH\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\" ,\"hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Destination with \"DemoDestination\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
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
  "name": "user is able to run created Publish kafka pipeline and validate same in logs",
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
      "name": "@E2EExecution6"
    },
    {
      "name": "@TC53"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "enters pipeline properties",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "PKey",
        "PValue"
      ]
    },
    {
      "cells": [
        "serviceType",
        "PublishKafka"
      ]
    },
    {
      "cells": [
        "isSchemaNeededToBeRegister",
        "true"
      ]
    },
    {
      "cells": [
        "area",
        "area"
      ]
    },
    {
      "cells": [
        "flow",
        "flow"
      ]
    },
    {
      "cells": [
        "step",
        "step"
      ]
    }
  ]
});
formatter.step({
  "name": "Spark properties",
  "keyword": "And ",
  "rows": [
    {
      "cells": [
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "spark.sql.adaptive.coalescePartitions.enabled",
        "true"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cSourceTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cDestTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "enters destination keys and value",
  "keyword": "When ",
  "rows": [
    {
      "cells": [
        "DKey",
        "DValue"
      ]
    },
    {
      "cells": [
        "trigger",
        "10 seconds"
      ]
    },
    {
      "cells": [
        "checkpointLocation",
        "/tmp/1099/"
      ]
    }
  ]
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
  "keyword": "Then "
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
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
        "ExecutionType",
        "Key",
        "Value",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "SourceSchema",
        "RegistryName",
        "Offset",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "SourceTopicName",
        "DestTopicName",
        "Status"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "STREAMING",
        "k1",
        "v1",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "KAFKA",
        "TMPLKafkaConnection",
        "CSV",
        ".csv",
        "No_Schema",
        "AutoManualSchemaDND",
        "Earlier",
        "DemoDestination",
        "KAFKA",
        "TMPLKafkaConnection",
        "topic1",
        "topic2",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to run created Publish kafka pipeline and validate same in logs",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2EExecutionDemo"
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
      "name": "@E2EExecution6"
    },
    {
      "name": "@TC53"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.clicksOnCreateProjectTab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test_Pipeline\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWith(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters pipeline properties",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.enters_pipeline_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Spark properties",
  "rows": [
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.spark_properties(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks on \"Add a Source\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksOn(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enters \"DemoSource\",\"KAFKA\",\"TMPLKafkaConnection\",\"topic1\",\"No_Schema\",\"AutoManualSchemaDND\",\"Earlier\",\"k1\",\"v1\" and clicks on add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClicksOnAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSource\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"KAFKA\",\"TMPLKafkaConnection\",\"CSV\" ,\".csv\",\"topic2\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters destination keys and value",
  "rows": [
    {},
    {},
    {}
  ],
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersDestinationKeysAndValue(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clicksAdd()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine with status \"READY\" is validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineWithStatusIsValidated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "executes the pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.executesThePipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pipeline record is validated on logs page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineRecordIsValidatedOnLogsPage()"
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