$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/E2EExecutionTest.feature");
formatter.feature({
  "name": "Creation of a End to End Execution of the pipeline for Spark/TMPL services",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2EExecution"
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
      "name": "@TC26"
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
      "name": "@E2EExecution"
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
      "name": "@TC26"
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
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.1cKyce}, goog:chromeOptions: {debuggerAddress: localhost:46583}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 3bba2adc3d89894dd8cf6f230581d645\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions.deleteAllCookies(RemoteWebDriver.java:694)\n\tat com.managersUtilities.CommonFunction.deleteAllCookies(CommonFunction.java:33)\n\tat com.steps.commonSteps.userIsOnDILLoginPage(commonSteps.java:31)\n\tat ✽.user is on DIL login page(file:///home/pihu/dil_automation/src/test/resources/features/projects/E2EExecutionTest.feature:8)\n",
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
      "name": "@E2EExecution2"
    },
    {
      "name": "@TC27"
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
      "name": "@E2EExecution"
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
      "name": "@TC27"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: java.io.IOException: unexpected end of stream on Connection{localhost:26438, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:26438 cipherSuite\u003dnone protocol\u003dhttp/1.1}\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:157)\n\tat com.baselibrary.Baseclass.selectBrowser(Baseclass.java:34)\n\tat com.steps.Hooks.\u003cinit\u003e(Hooks.java:22)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\n\tat io.cucumber.picocontainer.PicoFactory.getInstance(PicoFactory.java:47)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\nCaused by: java.io.IOException: unexpected end of stream on Connection{localhost:26438, proxy\u003dDIRECT hostAddress\u003dlocalhost/127.0.0.1:26438 cipherSuite\u003dnone protocol\u003dhttp/1.1}\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:208)\n\tat okhttp3.internal.http.CallServerInterceptor.intercept(CallServerInterceptor.java:88)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat org.openqa.selenium.remote.internal.OkHttpClient$Factory$1.lambda$createClient$1(OkHttpClient.java:152)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:45)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:105)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\t... 55 more\nCaused by: java.io.EOFException: \\n not found: limit\u003d0 content\u003d…\n\tat okio.RealBufferedSource.readUtf8LineStrict(RealBufferedSource.java:237)\n\tat okhttp3.internal.http1.Http1Codec.readHeaderLine(Http1Codec.java:215)\n\tat okhttp3.internal.http1.Http1Codec.readResponseHeaders(Http1Codec.java:189)\n\t... 78 more\n",
  "status": "failed"
});
