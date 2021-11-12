$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/E2EExecutionTest.feature");
formatter.feature({
  "name": "Creation of a End to End scenarios",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@E2ETests"
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
  "name": "enters \"\u003cDestinationName\u003e\",\"\u003cDestinationType\u003e\",\"\u003cDestConnection\u003e\",\"\u003cfileType\u003e\" ,\"\u003cFilePath\u003e\",\"\u003cTopicName\u003e\" and click add",
  "keyword": "When "
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
  "name": "user is able to run created acquire kafka pipeline and validate same in logs",
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
      "name": "@E2EExecution1"
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
  "name": "enters \"DemoDestination\",\"KAFKA\",\"KafkaSSLConnection\",\"CSV\" ,\".csv\",\"CDR\" and click add",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.entersAndClickAdd(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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