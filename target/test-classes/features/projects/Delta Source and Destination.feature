@Delta
Feature: User is able to create Delta Source and Destination

  @Smoke @Reg @Positive @Delta1 @TC18
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
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   |


  @Smoke @Reg @Positive @@Delta2 @TC19
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
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | DestinationType | DestConnection | saveMode |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | DEstinationAutoDelta | DELTA           | HIveConnection | Ignore   |


  @Smoke @Reg @Positive @@Delta3 @TC20
  Scenario Outline: user is able to delete delta source
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


  @Smoke @Reg @Positive @Delta4 @TC21
  Scenario Outline: user is able to delete delta Destination
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

  @Smoke @Reg @Positive @Delta5 @TC22
  Scenario Outline: user is able to update delta source and validate the same at Source properties panel
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
    When edits record for "<NewSourceNmae>" and "<NewSourceConnection>"
    Then Updated record validated for "<NewSourceNmae>" and "<NewSourceConnection>"
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | NewSourceNmae     | NewSourceConnection |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | UpdatedNameSource | HIveConnection      |

  @Smoke @Reg @Positive @Delta6 @TC23
  Scenario Outline: user is able to update the destination and validate the same at destinationProperties
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
    When edits record for "<NewDestName>" and "<NewDestConnection>"
    Then Updated record validated for "<NewDestName>" and "<NewDestConnection>"
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | DestinationType | DestConnection | saveMode | NewDestName     | NewDestConnection |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | DELTA      | HIveConnection   | DEstinationAutoDelta | DELTA           | HIveConnection | Ignore   | UpdatedNameDest | HIveConnection    |
