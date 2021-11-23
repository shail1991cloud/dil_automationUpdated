@E2EExecution
Feature:Creation of a End to End Execution of the pipeline for Spark/TMPL services

  #---------------------------------------E2E Execution-----------------------------------------#

  @Smoke @Reg @Positive @E2EExecution1 @TC24
  Scenario Outline: user is able to run created acquire kafka pipeline and validate same in logs
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>"
    When enters pipeline properties
      | PKey                       | PValue       |
      | serviceType                | AcquireKafka |
      | isSchemaNeededToBeRegister | true         |
      | area                       | area         |
      | flow                       | flow         |
      | step                       | step         |
    And  Spark properties
      | SKey                                          | SValue |
      | spark.sql.adaptive.coalescePartitions.enabled | true   |
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<SourceTopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<DestTopicName>"
    When enters destination keys and value
      | DKey               | DValue     |
      | trigger            | 10 seconds |
      | checkpointLocation | /tmp/1099/ |
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    When executes the pipeline
    Then Pipeline record is validated on logs page
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | Pipeline | Icon         | SourceName | SourceType | SourceConnection    | fileType | FilePath | SourceSchema | RegistryName        | Offset  | DestinationName | DestinationType | DestConnection      | SourceTopicName | DestTopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | PipeLIne | Add a Source | DemoSource | KAFKA      | TMPLKafkaConnection | CSV      | .csv     | No_Schema    | AutoManualSchemaDND | Earlier | DemoDestination | KAFKA           | TMPLKafkaConnection | topic1          | topic2        | READY  |

  @Smoke @Reg @Positive @E2EExecution2 @TC25
  Scenario Outline: user is able to run created acquire File pipeline and validate same in logs
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
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<S_FilePath>","<Separator>","<SourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<D_FilePath>","<DestTopicName>"
    When enters destination keys and value
      | DKey   | DValue |
      | mode   | :      |
      | escape | :      |
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    When executes the pipeline
    Then Pipeline record is validated on logs page
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Pipeline | Icon         | SourceName | SourceType  | SourceConnection | fileType | S_FilePath                                                 | D_FilePath                                            | SourceSchema | Separator | DestinationName | DestinationType | DestConnection | DestTopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND    | CSV      | hdfs://10.0.1.92:8020/user/hdfstodeltaInput/sourceData.csv | hdfs://10.0.1.92:8020/user/hdfsFileToFileDestination/ | No Schema    | ,         | DemoDestination | File System     | Auto_Kerb_DND  | topic2        | READY  |
