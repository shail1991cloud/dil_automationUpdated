$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/Delta%20Source%20and%20Destination.feature");
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027User name\u0027]/following-sibling::input\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.N0Z1OM}, goog:chromeOptions: {debuggerAddress: localhost:46747}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 460174d66a2345cbe8f5e9a2de386b9b\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027User name\u0027]/following-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\n\tat com.pagesPF.DIL_loginpage.loginToDIL(DIL_loginpage.java:36)\n\tat com.steps.commonSteps.enterUsernameAndPassword(commonSteps.java:39)\n\tat ✽.enter username and password(file:///home/pihu/dil_automation/src/test/resources/features/projects/Delta%20Source%20and%20Destination.feature:94)\n",
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "enters \"DestinationDelta\",\"DELTA\",\"HIveConnection\",\"Ignore\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "Destination with \"DestinationDelta\" should get created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationWithShouldGetCreated(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on \"Delete Destination\" to delete",
  "keyword": "And "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.clickOnToDeleteSource(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "destination \"DestinationDelta\" should get deleted",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.destinationShouldGetDeleted(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded0.png", "user_is_able_to_delete_delta_Destination");
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
        "UpdatedName",
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[text()\u003d\u0027User name\u0027]/following-sibling::input\"}\n  (Session info: chrome\u003d90.0.4430.212)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027pihu-Latitude-5400\u0027, ip: \u0027127.0.1.1\u0027, os.name: \u0027Linux\u0027, os.arch: \u0027amd64\u0027, os.version: \u00275.11.0-40-generic\u0027, java.version: \u002711.0.11\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 90.0.4430.212, chrome: {chromedriverVersion: 90.0.4430.24 (4c6d850f087da..., userDataDir: /tmp/.com.google.Chrome.VkIr2u}, goog:chromeOptions: {debuggerAddress: localhost:40949}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: LINUX, platformName: LINUX, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: ac54afcd5bf1483ceb95458cbdc6c06c\n*** Element info: {Using\u003dxpath, value\u003d//*[text()\u003d\u0027User name\u0027]/following-sibling::input}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy23.sendKeys(Unknown Source)\n\tat com.pagesPF.DIL_loginpage.loginToDIL(DIL_loginpage.java:36)\n\tat com.steps.commonSteps.enterUsernameAndPassword(commonSteps.java:39)\n\tat ✽.enter username and password(file:///home/pihu/dil_automation/src/test/resources/features/projects/Delta%20Source%20and%20Destination.feature:128)\n",
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
  "name": "creates project with \"AutoDIL\",\"ProjectForAutomation\",\"Test\" and engine",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createProjectSteps.entersAndSelectEngine(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "creates a \"AutoDemoPipeline\" with \"ProjectForAutomation\",\"Test\",\"STREAMING\"",
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
  "name": "Enters \"DemoSource\",\"DELTA\",\"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.enters(java.lang.String,java.lang.String,java.lang.String)"
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
  "name": "edits record for \"UpdatedName\" and \"HIveConnection\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.editsRecordForAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Updated record validated for \"UpdatedName\" and \"HIveConnection\"",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.createSourceDestAndTransform.updatedRecordValidatedForAnd(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.write("this is my failure message");
formatter.embedding("image/png", "embedded1.png", "user_is_able_to_update_delta_source_and_validate_the_same_at_Source_properties_panel");
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
});