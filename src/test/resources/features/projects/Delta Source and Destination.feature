Feature: User is able to create Delta Source and Destination

  @Smoke @Reg @Positive @E2EExecution2 @TC33
  Scenario Outline: user is able to create delta source
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>"
    When enters pipeline properties
      | PKey                       | PValue      |
      | serviceType                | AcquireFile |
      | isReturnable               | False       |
      | isSchemaNeededToBeRegister | False       |
      | area                       | area        |
      | flow                       | flow        |
      | step                       | step        |
    And  Spark properties
      | SKey                                          | SValue |
      | spark.sql.adaptive.coalescePartitions.enabled | true   |
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>"
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag  | Pipeline  | ExecutionType | Icon         | SourceName | SourceType  | SourceConnection |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline |STREAMING | Add a Source | DemoSource | DELTA| HIveConnection     |


  @Smoke @Reg @Positive @E2EExecution2 @TC34
  Scenario Outline: user is able to create delta Destination
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>"
    When enters pipeline properties
      | PKey                       | PValue      |
      | serviceType                | AcquireFile |
      | isReturnable               | False       |
      | isSchemaNeededToBeRegister | False       |
      | area                       | area        |
      | flow                       | flow        |
      | step                       | step        |
    And  Spark properties
      | SKey                                          | SValue |
      | spark.sql.adaptive.coalescePartitions.enabled | true   |
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<saveMode>"
    When enters destination keys and value
      | DKey   | DValue |
      | mode   | :      |
      | escape | :      |
    And  clicks add
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag  | Pipeline  | ExecutionType | Icon         | SourceName | SourceType  | SourceConnection |DestinationName|DestinationType|DestConnection|saveMode|
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline |STREAMING | Add a Source | DemoSource | DELTA| HIveConnection     | DEstinationAutoDelta|DELTA       |HIveConnection| Ignore |