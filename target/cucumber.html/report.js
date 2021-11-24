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
      "name": "@TC2"
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
      "name": "@TC2"
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
formatter.uri("file:src/test/resources/features/projects/CreatePipeLine.feature");
formatter.feature({
  "name": "Creation and Field level validation of pipelines",
  "description": "  As a user I want to Create a Pipeline,Validate the PipelineListing Page\n  and is able to validate individual pipelines for field level validation",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreatePipeLine"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to validate pipeline listing page when there is no pipeline created",
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC3"
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
  "name": "switches to \"\u003cTab\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine listing page is validated for ProjectName,PipelineTag and \"\u003cMessage\u003e\"",
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
        "Tab",
        "Message"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "Overview",
        "There is no pipelines in this project."
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to validate pipeline listing page when there is no pipeline created",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePipeLine"
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC3"
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
  "name": "switches to \"Overview\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.switchesTo(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine listing page is validated for ProjectName,PipelineTag and \"There is no pipelines in this project.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineListingPageIsValidatedForAnd(java.lang.String)"
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
  "name": "user is able validate pipeline properties",
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC4"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cPKey\u003e\",\"\u003cPValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine properties is validated for \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cPKey\u003e\",\"\u003cPValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "PKey",
        "PValue",
        "SKey",
        "SValue"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "STREAMING",
        "k1",
        "v1",
        "s1",
        "v2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able validate pipeline properties",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePipeLine"
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC4"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine properties is validated for \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelinePropertiesIsValidatedForAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "user is able to create pipeline and validate the same in Pipeline Listing page",
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
      "name": "@CP-Test2"
    },
    {
      "name": "@TC5"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine listing page is validated for created Pipeline",
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
        "Pipeline"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create pipeline and validate the same in Pipeline Listing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePipeLine"
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
      "name": "@CP-Test2"
    },
    {
      "name": "@TC5"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine listing page is validated for created Pipeline",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelineListingPageIsValidatedForCreatedPipeline()"
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
  "name": "user is able to delete pipeline and validate the same in Pipeline Listing page",
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
      "name": "@CP-Test3"
    },
    {
      "name": "@TC6"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "deletes pipeline",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003cPipeline\u003e\" should get disappeared",
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
        "Pipeline"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to delete pipeline and validate the same in Pipeline Listing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePipeLine"
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
      "name": "@CP-Test3"
    },
    {
      "name": "@TC6"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "deletes pipeline",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.deletesPipeline()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"PipeLIne\" should get disappeared",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.shouldGetDisappeared(java.lang.String)"
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
  "name": "user is able to edit the pipeline and validate the same",
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC7"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cPKey\u003e\",\"\u003cPValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "changes the \"\u003cNewExecutionType\u003e\",\"\u003cNTag\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "PipeLine properties is validated for \"\u003cDescription\u003e\",\"\u003cNTag\u003e\",\"\u003cNewExecutionType\u003e\",\"\u003cPKey\u003e\",\"\u003cPValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "PKey",
        "PValue",
        "SKey",
        "SValue",
        "NewExecutionType",
        "NTag"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "STREAMING",
        "k1",
        "v1",
        "s1",
        "v2",
        "BATCH",
        "Edit Pipeline"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to edit the pipeline and validate the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreatePipeLine"
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
      "name": "@CP-Test1"
    },
    {
      "name": "@TC7"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "changes the \"BATCH\",\"Edit Pipeline\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.changesThe(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "PipeLine properties is validated for \"ProjectForAutomation\",\"Edit Pipeline\",\"BATCH\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.pipelinePropertiesIsValidatedForAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.uri("file:src/test/resources/features/projects/CreateProject.feature");
formatter.feature({
  "name": "Creation of Projects and validation of Project Setting Pop Up",
  "description": "  As a user I want to Create a Project,Validate the Project Setting Pop Up\n  and validate the Project Listing Page with different fields",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateProject"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to get Create Project Tab on Project Listing page",
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
      "name": "@CRP-Test1"
    },
    {
      "name": "@TC8"
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
  "name": "user is able to verify \"\u003cCreate Project Tab\u003e\" on Project Listing page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Create Project Tab"
      ]
    },
    {
      "cells": [
        "Create Project"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to get Create Project Tab on Project Listing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test1"
    },
    {
      "name": "@TC8"
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
  "name": "user is able to verify \"Create Project\" on Project Listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.userIsAbleToVerifyOnProjectListingPage(java.lang.String)"
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
formatter.scenario({
  "name": "user is able to get Project Setting pop up while selects Create Project Tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateProject"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Positive"
    },
    {
      "name": "@CRP-Test2"
    },
    {
      "name": "@TC9"
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
  "name": "user is able to get Project Setting PopUp",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.userIsAbleToGetProjectSettingPopUp()"
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
formatter.scenario({
  "name": "user is able to validate Project Setting PopUp",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test3"
    },
    {
      "name": "@TC10"
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
  "name": "all the fields on Project Setting up page are validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.allTheFieldsOnProjectSettingUpPageAreValidated()"
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
  "name": "user is able to create a Project and is able to validate it in ProjectListing Page",
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
      "name": "@CRP-Test4"
    },
    {
      "name": "@TC11"
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
  "name": "created \"\u003cProjectName\u003e\" with \"\u003cTag\u003e\"is validated in project listing page",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto_Pro",
        "CreatingPipeLine",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a Project and is able to validate it in ProjectListing Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test4"
    },
    {
      "name": "@TC11"
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
  "name": "creates project with \"Auto_Pro\",\"CreatingPipeLine\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "created \"Auto_Pro\" with \"Test\"is validated in project listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.MQgJPs}, goog:chromeOptions: {debuggerAddress: localhost:41933}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 92ce392d24b6429bf63cd62e23eb3503\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\n\tat com.managersUtilities.CommonFunction.clickOnShadowElement(CommonFunction.java:144)\n\tat com.pagesPF.ProjectsPage.validateProjectName(ProjectsPage.java:169)\n\tat com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(createProjectSteps.java:142)\n\tat ✽.created \"Auto_Pro\" with \"Test\"is validated in project listing page(file:///home/pihu/dil_automation/src/test/resources/features/projects/CreateProject.feature:35)\n",
  "status": "failed"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "user_is_able_to_create_a_Project_and_is_able_to_validate_it_in_ProjectListing_Page");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to validate details for project on project listing page",
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
      "name": "@CRP-Test5"
    },
    {
      "name": "@TC12"
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
  "name": "searches the \"\u003cProjectName\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "created \"\u003cProjectName\u003e\"is validated for details like status,tag,projectName,run button,run button,delete button etc.",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto-Test",
        "CreatingPipeLine",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to validate details for project on project listing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test5"
    },
    {
      "name": "@TC12"
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
  "name": "searches the \"Auto-Test\" with \"CreatingPipeLine\",\"Test\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.searchesTheWith(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "created \"Auto-Test\"is validated for details like status,tag,projectName,run button,run button,delete button etc.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.createdIsValidatedForDetailsLikeStatusTagProjectNameRunButtonRunButtonDeleteButton(java.lang.String)"
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
  "name": "user is able to Search Project on Project Listing by the use of Search Functionality",
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
      "name": "@CRP-Test6"
    },
    {
      "name": "@TC13"
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
  "name": "searches the \"\u003cProjectName\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\"",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto-Pro",
        "CreatingPipeLine",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to Search Project on Project Listing by the use of Search Functionality",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test6"
    },
    {
      "name": "@TC13"
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
  "name": "searches the \"Auto-Pro\" with \"CreatingPipeLine\",\"Test\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.searchesTheWith(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "user is able to validate updated project on Project Listing page",
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
      "name": "@CRP-Test7"
    },
    {
      "name": "@TC14"
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
  "name": "created \"\u003cProjectName\u003e\" with \"\u003cTag\u003e\"is validated in project listing page",
  "keyword": "And "
});
formatter.step({
  "name": "\"\u003cNewTag\u003e\" and \"\u003cDescription\u003e\" is updated and validated",
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
        "NewTag",
        "Description"
      ]
    },
    {
      "cells": [
        "Auto-Pro_Test",
        "CreatingPipeLine",
        "Test",
        "TestTag",
        "Updated Project"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to validate updated project on Project Listing page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
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
      "name": "@CRP-Test7"
    },
    {
      "name": "@TC14"
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
  "name": "creates project with \"Auto-Pro_Test\",\"CreatingPipeLine\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "created \"Auto-Pro_Test\" with \"Test\"is validated in project listing page",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.ck6VGF}, goog:chromeOptions: {debuggerAddress: localhost:35305}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 48f7c882381d364a70e4f47c9bf7c76c\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\n\tat com.managersUtilities.CommonFunction.clickOnShadowElement(CommonFunction.java:144)\n\tat com.pagesPF.ProjectsPage.validateProjectName(ProjectsPage.java:169)\n\tat com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(createProjectSteps.java:142)\n\tat ✽.created \"Auto-Pro_Test\" with \"Test\"is validated in project listing page(file:///home/pihu/dil_automation/src/test/resources/features/projects/CreateProject.feature:66)\n",
  "status": "failed"
});
formatter.step({
  "name": "\"TestTag\" and \"CreatingPipeLine\" is updated and validated",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.andIsUpdatedAndValidated(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded1.png", "user_is_able_to_validate_updated_project_on_Project_Listing_page");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is not able to create Project when left mandatory field blank",
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
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test8"
    },
    {
      "name": "@TC15"
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
  "name": "submit button is displaying disable",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto-DemoProject",
        "",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is not able to create Project when left mandatory field blank",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test8"
    },
    {
      "name": "@TC15"
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
  "name": "creates project with \"Auto-DemoProject\",\"\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "submit button is displaying disable",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.submitButtonIsDisplayDisable()"
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
  "name": "user should not be able to validate cancelled project in ProjectListing Page",
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
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test9"
    },
    {
      "name": "@TC16"
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
  "name": "enters \"\u003cProjectName\u003e\",\"\u003cDescription\u003e\",\"\u003cTag\u003e\" and select engine and Cancel",
  "keyword": "When "
});
formatter.step({
  "name": "cancelled \"\u003cProjectName\u003e\"is not validated in project listing page",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto-DemoProject",
        "CreatingPipeLine",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user should not be able to validate cancelled project in ProjectListing Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test9"
    },
    {
      "name": "@TC16"
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
  "name": "enters \"Auto-DemoProject\",\"CreatingPipeLine\",\"Test\" and select engine and Cancel",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngineAndCancel(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "cancelled \"Auto-DemoProject\"is not validated in project listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.cancelledIsNotValidatedInProjectListingPage(java.lang.String)"
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
  "name": "user is not able to find deleted project on ProjectListing Page",
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
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test10"
    },
    {
      "name": "@TC17"
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
  "name": "created \"\u003cProjectName\u003e\" with \"\u003cTag\u003e\"is validated in project listing page",
  "keyword": "Then "
});
formatter.step({
  "name": "deletes the project",
  "keyword": "When "
});
formatter.step({
  "name": "deleted \"\u003cProjectName\u003e\" disappear from Project Listing Page",
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
        "Tag"
      ]
    },
    {
      "cells": [
        "Auto-DemoTestProject",
        "CreatingPipeLine",
        "Test"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is not able to find deleted project on ProjectListing Page",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateProject"
    },
    {
      "name": "@Smoke"
    },
    {
      "name": "@Reg"
    },
    {
      "name": "@Negative"
    },
    {
      "name": "@CRP-Test10"
    },
    {
      "name": "@TC17"
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
  "name": "creates project with \"Auto-DemoTestProject\",\"CreatingPipeLine\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "created \"Auto-DemoTestProject\" with \"Test\"is validated in project listing page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.JavascriptException: javascript error: Cannot read property \u0027click\u0027 of null\n  (Session info: chrome\u003d90.0.4430.212)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.0DqClX}, goog:chromeOptions: {debuggerAddress: localhost:45903}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 4629043cd4253eea80d21a8cfabad870\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:489)\n\tat com.managersUtilities.CommonFunction.clickOnShadowElement(CommonFunction.java:144)\n\tat com.pagesPF.ProjectsPage.validateProjectName(ProjectsPage.java:169)\n\tat com.steps.createProjectSteps.createdWithIsValidatedInProjectListingPage(createProjectSteps.java:142)\n\tat ✽.created \"Auto-DemoTestProject\" with \"Test\"is validated in project listing page(file:///home/pihu/dil_automation/src/test/resources/features/projects/CreateProject.feature:100)\n",
  "status": "failed"
});
formatter.step({
  "name": "deletes the project",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.deletesTheProject()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "deleted \"Auto-DemoTestProject\" disappear from Project Listing Page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createProjectSteps.deletedDisappearFromProjectListingPage(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded2.png", "user_is_not_able_to_find_deleted_project_on_ProjectListing_Page");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/projects/Delta%20Source%20and%20Destination.feature");
formatter.feature({
  "name": "User is able to create Delta Source and Destination",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@Delta"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to create delta source",
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
      "name": "@Delta1"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create delta source",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@Delta1"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create delta Destination",
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
      "name": "@@Delta2"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003csaveMode\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "saveMode"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection",
        "DEstinationAutoDelta",
        "DELTA",
        "HIveConnection",
        "Ignore"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create delta Destination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@@Delta2"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "enters \"DEstinationAutoDelta\",\"DELTA\",\"HIveConnection\",\"Ignore\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Destination with \"DEstinationAutoDelta\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
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
  "name": "user is able to delete delta source",
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
      "name": "@@Delta3"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on \"\u003cDeleteButton\u003e\" to delete",
  "keyword": "And "
});
formatter.step({
  "name": "source \"\u003cSourceName\u003e\" should get deleted",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "DeleteButton"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection",
        "Delete Source"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to delete delta source",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@@Delta3"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "click on \"Delete Source\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "source \"DemoSource\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetDeleted(java.lang.String)"
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
  "name": "user is able to delete delta Destination",
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
      "name": "@Delta4"
    },
    {
      "name": "@TC36"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003csaveMode\u003e\"",
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
  "name": "click on \"\u003cDeleteButton\u003e\" to delete",
  "keyword": "And "
});
formatter.step({
  "name": "destination \"\u003cDestinationName\u003e\" should get deleted",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "saveMode",
        "DeleteButton"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection",
        "DestinationDelta",
        "DELTA",
        "HIveConnection",
        "Ignore",
        "Delete Destination"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to delete delta Destination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@Delta4"
    },
    {
      "name": "@TC36"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "enters \"DestinationDelta\",\"DELTA\",\"HIveConnection\",\"Ignore\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Destination with \"DestinationDelta\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on \"Delete Destination\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "destination \"DestinationDelta\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationShouldGetDeleted(java.lang.String)"
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
  "name": "user is able to update delta source and validate the same at Source properties panel",
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
      "name": "@Delta5"
    },
    {
      "name": "@TC37"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "edits record for \"\u003cNewSourceNmae\u003e\" and \"\u003cNewSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Updated record validated for \"\u003cNewSourceNmae\u003e\" and \"\u003cNewSourceConnection\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "NewSourceNmae",
        "NewSourceConnection"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection",
        "UpdatedNameSource",
        "HIveConnection"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to update delta source and validate the same at Source properties panel",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@Delta5"
    },
    {
      "name": "@TC37"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "edits record for \"UpdatedNameSource\" and \"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.editsRecordForAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Updated record validated for \"UpdatedNameSource\" and \"HIveConnection\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.updatedRecordValidatedForAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[@title\u003d\u0027UpdatedNameSource\u0027]\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.DaTe5q}, goog:chromeOptions: {debuggerAddress: localhost:34387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 38b0095597aa293cb1da1114db3f4918\n*** Element info: {Using\u003dxpath, value\u003d//*[@title\u003d\u0027UpdatedNameSource\u0027]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat com.managersUtilities.CommonFunction.getCustomisedWebElement(CommonFunction.java:216)\n\tat com.pagesPF.PipeLIne_BuilderPage.validateUpdatedRecord(PipeLIne_BuilderPage.java:263)\n\tat com.steps.createSourceDestAndTransform.updatedRecordValidatedForAnd(createSourceDestAndTransform.java:171)\n\tat ✽.Updated record validated for \"UpdatedNameSource\" and \"HIveConnection\"(file:///home/pihu/dil_automation/src/test/resources/features/projects/Delta%20Source%20and%20Destination.feature:147)\n",
  "status": "failed"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded3.png", "user_is_able_to_update_delta_source_and_validate_the_same_at_Source_properties_panel");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to update the destination and validate the same at destinationProperties",
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
      "name": "@Delta6"
    },
    {
      "name": "@TC38"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003csaveMode\u003e\"",
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
  "name": "edits record for \"\u003cNewDestName\u003e\" and \"\u003cNewDestConnection\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Updated record validated for \"\u003cNewDestName\u003e\" and \"\u003cNewDestConnection\u003e\"",
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
        "Pipeline",
        "ExecutionType",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "saveMode",
        "NewDestName",
        "NewDestConnection"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test",
        "AutoDemoPipeline",
        "STREAMING",
        "Add a Source",
        "DemoSource",
        "DELTA",
        "HIveConnection",
        "DEstinationAutoDelta",
        "DELTA",
        "HIveConnection",
        "Ignore",
        "UpdatedNameDest",
        "HIveConnection"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to update the destination and validate the same at destinationProperties",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Delta"
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
      "name": "@Delta6"
    },
    {
      "name": "@TC38"
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "enters \"DEstinationAutoDelta\",\"DELTA\",\"HIveConnection\",\"Ignore\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Destination with \"DEstinationAutoDelta\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "edits record for \"UpdatedNameDest\" and \"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.editsRecordForAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Updated record validated for \"UpdatedNameDest\" and \"HIveConnection\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.updatedRecordValidatedForAnd(java.lang.String,java.lang.String)"
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
formatter.uri("file:src/test/resources/features/projects/E2EExecutionTest.feature");
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
formatter.uri("file:src/test/resources/features/projects/Kafka,FileSystem_CreateSourceDestAndTransformation.feature");
formatter.feature({
  "name": "Creation of Sources and Destination",
  "description": "  As a user I want to Create a Source and Destination,Validate Source and Destination attributes",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to create file type source for ManualSchema",
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC18"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cName\u003e\",\"\u003cType\u003e\",\"\u003cconnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cName\u003e\"",
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
        "Pipeline",
        "Icon",
        "Name",
        "Type",
        "connection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create file type source for ManualSchema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC18"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create FileSystem source with No schema",
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
      "name": "@CSource-Test2"
    },
    {
      "name": "@TC19"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cName\u003e\",\"\u003cType\u003e\",\"\u003cconnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cName\u003e\"",
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
        "Pipeline",
        "Icon",
        "Name",
        "Type",
        "connection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "DeleteButton"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "No Schema",
        "Delete Source"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create FileSystem source with No schema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CSource-Test2"
    },
    {
      "name": "@TC19"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to delete created source",
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
      "name": "@CSource-Test3"
    },
    {
      "name": "@TC20"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cName\u003e\",\"\u003cType\u003e\",\"\u003cconnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on \"\u003cDeleteButton\u003e\" to delete",
  "keyword": "And "
});
formatter.step({
  "name": "source \"\u003cName\u003e\" should get deleted",
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
        "Pipeline",
        "Icon",
        "Name",
        "Type",
        "connection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "DeleteButton"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "No Schema",
        "Delete Source"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to delete created source",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CSource-Test3"
    },
    {
      "name": "@TC20"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
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
  "name": "click on \"Delete Source\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "source \"DemoSource\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetDeleted(java.lang.String)"
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
  "name": "user is able to create Transformation",
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
      "name": "@CTransformation-Test1"
    },
    {
      "name": "@TC21"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cType\u003e\",\"\u003cconnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cTransformationName\u003e\",\"\u003cCategory\u003e\",\"\u003cTransformationType\u003e\",\"\u003ccolumnValue\u003e\" and click add",
  "keyword": "When "
});
formatter.step({
  "name": "Transformation with \"\u003cTransformationName\u003e\" should get created",
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
        "Pipeline",
        "Icon",
        "SourceName",
        "Type",
        "connection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue",
        "TransformationName",
        "Category",
        "TransformationType",
        "columnValue"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND",
        "TestTrans",
        "Column",
        "GroupBy",
        "m_boolean"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create Transformation",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CTransformation-Test1"
    },
    {
      "name": "@TC21"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
  "name": "enters \"TestTrans\",\"Column\",\"GroupBy\",\"m_boolean\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClick(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transformation with \"TestTrans\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.transformationWithShouldGetCreated(java.lang.String)"
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
  "name": "user is able to create File System type Destination",
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
      "name": "@CDestination-Test1"
    },
    {
      "name": "@TC22"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "Destination with \"\u003cDestinationName\u003e\" should get created",
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
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "CDR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create File System type Destination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CDestination-Test1"
    },
    {
      "name": "@TC22"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create Kafka type Destination",
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
      "name": "@CDestination-Test1"
    },
    {
      "name": "@TC23"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "Destination with \"\u003cDestinationName\u003e\" should get created",
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
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND",
        "DemoDestination",
        "KAFKA",
        "KafkaSSLConnection",
        "CDR"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create Kafka type Destination",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CDestination-Test1"
    },
    {
      "name": "@TC23"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
  "name": "enters \"DemoDestination\",\"KAFKA\",\"KafkaSSLConnection\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create Kafka source for Manual Schema",
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC24"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
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
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "TopicName",
        "SourceSchema",
        "RegistryName",
        "Offset",
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSourceKafka",
        "KAFKA",
        "KafkaSSLConnection",
        "CDR",
        "Manual",
        "AutoManualSchemaDND",
        "Earlier",
        "K",
        "v"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create Kafka source for Manual Schema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC24"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSourceKafka\",\"KAFKA\",\"KafkaSSLConnection\",\"CDR\",\"Manual\",\"AutoManualSchemaDND\",\"Earlier\",\"K\",\"v\" and clicks on add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClicksOnAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSourceKafka\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
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
  "name": "user is able to create Kafka source for NoSchema",
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC25"
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
  "name": "creates a \"\u003cPipeline\u003e\" having \"\u003cDescription\u003e\" and \"\u003cTag\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
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
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "TopicName",
        "SourceSchema",
        "RegistryName",
        "Offset",
        "Key",
        "Value"
      ]
    },
    {
      "cells": [
        "AutoDIL",
        "ProjectForAutomation",
        "Test_Pipeline",
        "PipeLIne",
        "Add a Source",
        "DemoSourceKafka",
        "KAFKA",
        "KafkaSSLConnection",
        "CDR",
        "No_Schema",
        "AutoManualSchemaDND",
        "Earlier",
        "K",
        "v"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create Kafka source for NoSchema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@CSource-Test1"
    },
    {
      "name": "@TC25"
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
  "name": "creates a \"PipeLIne\" having \"ProjectForAutomation\" and \"Test_Pipeline\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.createsAHavingAnd(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSourceKafka\",\"KAFKA\",\"KafkaSSLConnection\",\"CDR\",\"No_Schema\",\"AutoManualSchemaDND\",\"Earlier\",\"K\",\"v\" and clicks on add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClicksOnAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Source should get created with \"DemoSourceKafka\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetCreatedWith(java.lang.String)"
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
  "name": "user is able to create file source with delta as type for No Schema",
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
      "name": "@TC39"
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
        "SourceSchema",
        "Separator"
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
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput",
        "No Schema",
        ","
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create file source with delta as type for No Schema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@TC39"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput\",\",\",\"No Schema\",\"\u003cSchemaValue\u003e\"",
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create file source with delta as type for Manual Schema",
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
      "name": "@TC40"
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
        "SourceSchema",
        "Separator",
        "SchemaValue"
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
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput",
        "No Schema",
        ",",
        "AutoManualSchemaDND"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create file source with delta as type for Manual Schema",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@TC40"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput\",\",\",\"No Schema\",\"AutoManualSchemaDND\"",
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create file source with delta as type for Manual Schema and would be able to delete the same",
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
      "name": "@TC41"
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
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cS_Path\u003e\",\"\u003cSeparator\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on \"\u003cDeleteButton\u003e\" to delete",
  "keyword": "And "
});
formatter.step({
  "name": "source \"\u003cSourceName\u003e\" should get deleted",
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
        "SourceSchema",
        "Separator",
        "SchemaValue",
        "DeleteButton"
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
        "hdfs://10.0.1.92:8020/user/hdfstodeltaInput",
        "No Schema",
        ",",
        "AutoManualSchemaDND",
        "Delete Source"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create file source with delta as type for Manual Schema and would be able to delete the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@TC41"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"DeltaIO\",\"hdfs://10.0.1.92:8020/user/hdfstodeltaInput\",\",\",\"No Schema\",\"AutoManualSchemaDND\"",
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
  "name": "click on \"Delete Source\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of [[ChromeDriver: chrome on LINUX (b5191e2e458728adf21d37121551350d)] -\u003e xpath: //*[text()\u003d\u0027 Delete \u0027]] (tried for 50 second(s) with 500 milliseconds interval)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.sO9X9W}, goog:chromeOptions: {debuggerAddress: localhost:46265}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: b5191e2e458728adf21d37121551350d\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\n\tat com.managersUtilities.CommonFunction.waitForElementToAppear(CommonFunction.java:154)\n\tat com.steps.createSourceDestAndTransform.clickOnToDeleteSource(createSourceDestAndTransform.java:69)\n\tat ✽.click on \"Delete Source\" to delete(file:///home/pihu/dil_automation/src/test/resources/features/projects/Kafka,FileSystem_CreateSourceDestAndTransformation.feature:200)\n",
  "status": "failed"
});
formatter.step({
  "name": "source \"DemoSource\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.sourceShouldGetDeleted(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded4.png", "user_is_able_to_create_file_source_with_delta_as_type_for_Manual_Schema_and_would_be_able_to_delete_the_same");
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able create file destination with delta as type",
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
      "name": "@TC42"
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
        "DestTopicName"
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
        "topic2"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able create file destination with delta as type",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@TC42"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able delete file destination with type as Delta",
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
      "name": "@TC43"
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
  "name": "click on \"\u003cDeleteButton\u003e\" to delete",
  "keyword": "And "
});
formatter.step({
  "name": "destination \"\u003cDestinationName\u003e\" should get deleted",
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
        "DeleteButton"
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
        "Delete Destination"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able delete file destination with type as Delta",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@CreateSourceAndDestination"
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
      "name": "@TC43"
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
  "name": "click on \"Delete Destination\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "destination \"DemoDestination\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationShouldGetDeleted(java.lang.String)"
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
formatter.uri("file:src/test/resources/features/projects/StandardE2EPipeline.feature");
formatter.feature({
  "name": "This Feature deals with standard End to End Pipeline having Source,Destination and Transformation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2ETests"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as FileSystem",
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
      "name": "@E2ETest1"
    },
    {
      "name": "@TC28"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cTransformationName\u003e\",\"\u003cCategory\u003e\",\"\u003cTransformationType\u003e\",\"\u003ccolumnValue\u003e\" and click add",
  "keyword": "When "
});
formatter.step({
  "name": "Transformation with \"\u003cTransformationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
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
        "SKey",
        "SValue",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue",
        "TransformationName",
        "Category",
        "TransformationType",
        "columnValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName",
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
        "s1",
        "v2",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND",
        "TestTrans",
        "Column",
        "GroupBy",
        "m_boolean",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "CDR",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as FileSystem",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2ETests"
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
      "name": "@E2ETest1"
    },
    {
      "name": "@TC28"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
  "name": "enters \"TestTrans\",\"Column\",\"GroupBy\",\"m_boolean\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClick(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transformation with \"TestTrans\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.transformationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create a project with a pipeline in ready status with Kafka as source and Destination as FileSystem",
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
      "name": "@E2ETest1"
    },
    {
      "name": "@TC29"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cTransformationName\u003e\",\"\u003cCategory\u003e\",\"\u003cTransformationType\u003e\",\"\u003ccolumnValue\u003e\" and click add",
  "keyword": "When "
});
formatter.step({
  "name": "Transformation with \"\u003cTransformationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
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
        "SKey",
        "SValue",
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
        "TransformationName",
        "Category",
        "TransformationType",
        "columnValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName",
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
        "s1",
        "v2",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "KAFKA",
        "KafkaSSLConnection",
        "CSV",
        ".csv",
        "Manual",
        "AutoManualSchemaDND",
        "Earlier",
        "TestTrans",
        "Column",
        "GroupBy",
        "m_boolean",
        "DemoDestination",
        "File System",
        "Auto_Kerb_DND",
        "CDR",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a project with a pipeline in ready status with Kafka as source and Destination as FileSystem",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2ETests"
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
      "name": "@E2ETest1"
    },
    {
      "name": "@TC29"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"KAFKA\",\"KafkaSSLConnection\",\"CDR\",\"Manual\",\"AutoManualSchemaDND\",\"Earlier\",\"k1\",\"v1\" and clicks on add",
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
  "name": "enters \"TestTrans\",\"Column\",\"GroupBy\",\"m_boolean\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClick(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transformation with \"TestTrans\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.transformationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"File System\",\"Auto_Kerb_DND\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as Kafka",
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
      "name": "@E2ETest1"
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
  "name": "clicks on createProject tab",
  "keyword": "And "
});
formatter.step({
  "name": "creates project with \"\u003cProjectName\u003e\",\"\u003cDescription\u003e\",\"\u003cTag\u003e\" and engine",
  "keyword": "When "
});
formatter.step({
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cfileType\u003e\",\"\u003cFilePath\u003e\",\"\u003cSeparator\u003e\",\"\u003csourceSchema\u003e\",\"\u003cSchemaValue\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cTransformationName\u003e\",\"\u003cCategory\u003e\",\"\u003cTransformationType\u003e\",\"\u003ccolumnValue\u003e\" and click add",
  "keyword": "When "
});
formatter.step({
  "name": "Transformation with \"\u003cTransformationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
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
        "SKey",
        "SValue",
        "Pipeline",
        "Icon",
        "SourceName",
        "SourceType",
        "SourceConnection",
        "fileType",
        "FilePath",
        "Separator",
        "sourceSchema",
        "SchemaValue",
        "TransformationName",
        "Category",
        "TransformationType",
        "columnValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName",
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
        "s1",
        "v2",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "File System",
        "Auto_Kerb_DND",
        "CSV",
        ".csv",
        ",",
        "Manual Schema",
        "AutoManualSchemaDND",
        "TestTransFileToKafka",
        "Column",
        "GroupBy",
        "m_boolean",
        "DemoDestination",
        "KAFKA",
        "KafkaSSLConnection",
        "CDR",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as Kafka",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2ETests"
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
      "name": "@E2ETest1"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"File System\",\"Auto_Kerb_DND\",\"CSV\",\".csv\",\",\",\"Manual Schema\",\"AutoManualSchemaDND\"",
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
  "name": "enters \"TestTransFileToKafka\",\"Column\",\"GroupBy\",\"m_boolean\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClick(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transformation with \"TestTransFileToKafka\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.transformationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"KAFKA\",\"KafkaSSLConnection\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user is able to create a project with a pipeline in ready status with Kafka as source and Destination as kafka",
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
      "name": "@E2ETest1"
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
  "name": "creates a \"\u003cPipeline\u003e\" with \"\u003cDescription\u003e\",\"\u003cTag\u003e\",\"\u003cExecutionType\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\",\"\u003cSKey\u003e\" and \"\u003cSValue\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "clicks on \"\u003cIcon\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Enters \"\u003cSourceName\u003e\",\"\u003cSourceType\u003e\",\"\u003cSourceConnection\u003e\",\"\u003cTopicName\u003e\",\"\u003cSourceSchema\u003e\",\"\u003cRegistryName\u003e\",\"\u003cOffset\u003e\",\"\u003cKey\u003e\",\"\u003cValue\u003e\" and clicks on add",
  "keyword": "When "
});
formatter.step({
  "name": "Source should get created with \"\u003cSourceName\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cTransformationName\u003e\",\"\u003cCategory\u003e\",\"\u003cTransformationType\u003e\",\"\u003ccolumnValue\u003e\" and click add",
  "keyword": "When "
});
formatter.step({
  "name": "Transformation with \"\u003cTransformationName\u003e\" should get created",
  "keyword": "Then "
});
formatter.step({
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "clicks add",
  "keyword": "And "
});
formatter.step({
  "name": "PipeLine with status \"\u003cStatus\u003e\" is validated",
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
        "SKey",
        "SValue",
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
        "TransformationName",
        "Category",
        "TransformationType",
        "columnValue",
        "DestinationName",
        "DestinationType",
        "DestConnection",
        "TopicName",
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
        "s1",
        "v2",
        "PipeLIne",
        "Add a Source",
        "DemoSource",
        "KAFKA",
        "KafkaSSLConnection",
        "CSV",
        ".csv",
        "Manual",
        "AutoManualSchemaDND",
        "Earlier",
        "TestTrans",
        "Column",
        "GroupBy",
        "m_id",
        "DemoDestination",
        "KAFKA",
        "KafkaSSLConnection",
        "CDR",
        "READY"
      ]
    }
  ]
});
formatter.scenario({
  "name": "user is able to create a project with a pipeline in ready status with Kafka as source and Destination as kafka",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@E2ETests"
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
      "name": "@E2ETest1"
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
  "name": "creates a \"PipeLIne\" with \"ProjectForAutomation\",\"Test_Pipeline\",\"STREAMING\",\"k1\",\"v1\",\"s1\" and \"v2\"",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createPipeLineSteps.createsAWithAnd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Enters \"DemoSource\",\"KAFKA\",\"KafkaSSLConnection\",\"CDR\",\"Manual\",\"AutoManualSchemaDND\",\"Earlier\",\"k1\",\"v1\" and clicks on add",
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
  "name": "enters \"TestTrans\",\"Column\",\"GroupBy\",\"m_id\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClick(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Transformation with \"TestTrans\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.transformationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"DemoDestination\",\"KAFKA\",\"KafkaSSLConnection\",\"CSV\" ,\".csv\",\"CDR\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
formatter.after({
  "status": "passed"
});
formatter.write("---Closing the Browser---");
formatter.after({
  "status": "passed"
});
});