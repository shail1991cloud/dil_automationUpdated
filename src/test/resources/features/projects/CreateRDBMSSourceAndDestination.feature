Feature: User is able to create RDBMS Source and Destination

  @Smoke @Reg @Positive @E2EExecution2 @TC18
  Scenario Outline: user is able to create RDBMS source
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
    When Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       |

  @Smoke @Reg @Positive @E2EExecution2 @TC19
  Scenario Outline: user is able to create RDBMS Destination
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
    And Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    And Source should get created with "<SourceName>"
    When Select flow as "Destination"
    And Enters "<DestinationName>","<DestinationType>","<DestConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And Enter Save mode "<saveMode>"
    And enters destination keys and value
      | DKey   | DValue |
      | mode   | :      |
      | escape | :      |
    And  clicks add button of "Destination"
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | DestinationType | DestConnection  | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn | saveMode |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | DestinationAutoRDBMS | RDBMS           | RDBMSConnection | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       | Ignore   |

  @Smoke @Reg @Positive @E2EExecution3 @TC20
  Scenario Outline: user is able to delete RDBMS source
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
    And Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    And Source should get created with "<SourceName>"
    When  click on "<DeleteButton>" to delete
    Then source "<SourceName>" should get deleted
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DeleteButton  | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | Delete Source | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       |


  @Smoke @Reg @Positive @E2EExecution4 @TC21
  Scenario Outline: user is able to delete RDBMS Destination
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
    And Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    And Source should get created with "<SourceName>"
    And Select flow as "Destination"
    And Enters "<DestinationName>","<DestinationType>","<DestConnection>" for RDBMS Connection
    And Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And Enter Save mode "<saveMode>"
    And enters destination keys and value
      | DKey   | DValue |
      | mode   | :      |
      | escape | :      |
    And  clicks add button of "Destination"
    And Destination with "<DestinationName>" should get created
    When  click on "<DeleteButton>" to delete
    Then destination "<DestinationName>" should get deleted
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | DestinationType | DestConnection  | saveMode | DeleteButton       | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn | saveMode |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | DestinationAutoRDBMS | RDBMS           | RDBMSConnection | Ignore   | Delete Destination | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       | Ignore   |

  @Positive @CSource-Test2 @TC23
  Scenario Outline: user is able to edit RDBMS source details and validate the same
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
    And Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    And Source should get created with "<SourceName>"
    When Edit "<UpdatedDatabase>" "<DatabaseSchema>" "<UpdatedDatabaseTable>" "<UpdatedDataBaseColumn>" fields for Source
    And Source should get created with "<SourceName>"
    Then Validate updated "<UpdatedDatabase>","<UpdatedDatabaseTable>","<UpdatedDataBaseColumn>" RDBMS Source
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn | UpdatedDatabase | UpdatedDatabaseTable | UpdatedDataBaseColumn |
      | AutoDIL     | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       | test_dil        | testDataSource       | m_id                  |

  @Positive @CDestination-Test1  @TC24
  Scenario Outline: user is able to edit RDBMS destination and validate the same
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
    And Enters "<SourceName>","<SourceType>","<SourceConnection>" for RDBMS Connection
    And  Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And  clicks add button of "Source"
    And Source should get created with "<SourceName>"
    And Select flow as "Destination"
    And Enters "<DestinationName>","<DestinationType>","<DestConnection>" for RDBMS Connection
    And Enters "<DatabaseName>" "<DatabaseSchema>" "<DatabaseTable>" "<DataBaseColumn>" for Database configuration
    And Enter Save mode "<saveMode>"
    And enters destination keys and value
      | DKey   | DValue |
      | mode   | :      |
      | escape | :      |
    And clicks add button of "Destination"
    And Destination with "<DestinationName>" should get created
    When Update "<updatedDestinationName>" for RDBMS connection
    Then Validate updated "<updatedDestinationName>" for RDBMS Destination
    Examples:
      | ProjectName | Description          | Tag  | Pipeline         | ExecutionType | Icon         | SourceName | SourceType | SourceConnection | DestinationName      | updatedDestinationName | DestinationType | DestConnection  | saveMode | DatabaseName | DatabaseSchema | DatabaseTable     | DataBaseColumn | saveMode |
      | AutoDIL_1   | ProjectForAutomation | Test | AutoDemoPipeline | STREAMING     | Add a Source | DemoSource | RDBMS      | RDBMSConnection  | DestinationAutoRDBMS | New_DestName           | RDBMS           | RDBMSConnection | Ignore   | landing_dil  | DEFAULT        | destinationBigInt | m_bigint       | Ignore   |