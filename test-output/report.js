$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/projects/GoogleSearch.feature");
formatter.feature({
  "name": "To search result in Google Search box",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User is able to search a result and verify the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "user passes \"\u003curl\u003e\" and navigates to Google page",
  "keyword": "Given "
});
formatter.step({
  "name": "enters \"\u003cItem\u003e\" to Google Search box",
  "keyword": "When "
});
formatter.step({
  "name": "\"\u003cItemWithDescription\u003e\" should be validated in Search result",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "url",
        "Item",
        "ItemWithDescription"
      ]
    },
    {
      "cells": [
        "https://www.google.com/",
        "Fiserv",
        "Fiserv: Financial Services Technology, Mobile Banking ..."
      ]
    }
  ]
});
formatter.scenario({
  "name": "User is able to search a result and verify the same",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.write("--Starting the Execution--");
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user passes \"https://www.google.com/\" and navigates to Google page",
  "keyword": "Given "
});
formatter.match({
  "location": "com.steps.googleSearchSteps.userPassesAndNavigatesToGooglePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enters \"Fiserv\" to Google Search box",
  "keyword": "When "
});
formatter.match({
  "location": "com.steps.googleSearchSteps.entersToGoogleSearchBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "\"Fiserv: Financial Services Technology, Mobile Banking ...\" should be validated in Search result",
  "keyword": "Then "
});
formatter.match({
  "location": "com.steps.googleSearchSteps.shouldBeValidatedInSearchResult(java.lang.String)"
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