@E2ETests
Feature:Creation of a End to End scenarios


  @Smoke @Reg @Positive @E2EExecution1 @TC30
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
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>" and click add
    Then PipeLine with status "<Status>" is validated
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | Pipeline | Icon         | SourceName | SourceType | SourceConnection   | fileType | FilePath | SourceSchema | RegistryName        | Offset  | TransformationName | Category | TransformationType | columnValue | DestinationName | DestinationType | DestConnection     | TopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | PipeLIne | Add a Source | DemoSource | KAFKA      | KafkaSSLConnection | CSV      | .csv     | Manual       | AutoManualSchemaDND | Earlier | TestTrans          | Column   | GroupBy            | m_id        | DemoDestination | KAFKA           | KafkaSSLConnection | CDR       | READY  |
