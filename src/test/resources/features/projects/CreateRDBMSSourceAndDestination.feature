Feature: User is able to create RDBMS Source and Destination

  @Smoke @Reg @Positive @E2EExecution2
  Scenario Outline: user is able to create RDBMS sourcedasdsadsa
    Given user is on DIL login page
    And enter username and password
    And  clicks on createProject tab
    And creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>"
    And enters pipeline properties
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
    And  Enters Database configuration for RDBMS Connection
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  |


  @Smoke @Reg @Positive @E2EExecution2 @TC34
  Scenario Outline: user is able to create RDBMS Destination
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
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | DestinationType | DestConnection | saveMode |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | DEstinationAutoDelta | DELTA           | HIveConnection | Ignore   |


  @Smoke @Reg @Positive @E2EExecution3 @TC35
  Scenario Outline: user is able to delete RDBMS source
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
    And  click on "<DeleteButton>" to delete
    Then source "<SourceName>" should get deleted
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DeleteButton  |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | Delete Source |


  @Smoke @Reg @Positive @E2EExecution4 @TC36
  Scenario Outline: user is able to delete RDBMS Destination
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
    And  click on "<DeleteButton>" to delete
    Then destination "<DestinationName>" should get deleted
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName  | DestinationType | DestConnection | saveMode | DeleteButton       |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | DestinationDelta | DELTA           | HIveConnection | Ignore   | Delete Destination |

