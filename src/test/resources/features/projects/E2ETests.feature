@E2ETests
Feature:Creation of a End to End scenarios

  @Smoke @Reg @Positive @E2ETest1 @TC26
  Scenario Outline: user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as FileSystem
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<Key>","<Value>","<SKey>" and "<SValue>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | SKey | SValue | Pipeline | Icon         | SourceName | SourceType  | SourceConnection | fileType | FilePath | Separator | sourceSchema  | SchemaValue       | TransformationName | Category | TransformationType | columnValue | DestinationName | DestinationType | DestConnection | TopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | s1   | v2     | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND    | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND | TestTrans          | Column   | GroupBy            | m_boolean   | DemoDestination | File System     | Auto_Kerb_DND  | CDR       | READY  |

  @Smoke @Reg @Positive @E2ETest1 @TC27
  Scenario Outline: user is able to create a project with a pipeline in ready status with Kafka as source and Destination as FileSystem
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<Key>","<Value>","<SKey>" and "<SValue>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | SKey | SValue | Pipeline | Icon         | SourceName | SourceType | SourceConnection | fileType | FilePath | SourceSchema | RegistryName      | Offset  | TransformationName | Category | TransformationType | columnValue | DestinationName | DestinationType | DestConnection | TopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | s1   | v2     | PipeLIne | Add a Source | DemoSource | KAFKA      | KafkaSSLConnection   | CSV      | .csv     | Manual       | AutoManualSchemaDND | Earlier | TestTrans          | Column   | GroupBy            | m_boolean   | DemoDestination | File System     | Auto_Kerb_DND  | CDR       | READY  |

  @Smoke @Reg @Positive @E2ETest1 @TC28
  Scenario Outline: user is able to create a project with a pipeline in ready status with FileSystem as source and Destination as Kafka
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<Key>","<Value>","<SKey>" and "<SValue>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | SKey | SValue | Pipeline | Icon         | SourceName | SourceType  | SourceConnection | fileType | FilePath | Separator | sourceSchema  | SchemaValue       | TransformationName   | Category | TransformationType | columnValue | DestinationName | DestinationType | DestConnection | TopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | s1   | v2     | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND    | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND | TestTransFileToKafka | Column   | GroupBy            | m_boolean   | DemoDestination | KAFKA           | KafkaSSLConnection | CDR       | READY  |

  @Smoke @Reg @Positive @E2ETest1 @TC29
  Scenario Outline: user is able to create a project with a pipeline in ready status with Kafka as source and Destination as kafka
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<Key>","<Value>","<SKey>" and "<SValue>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then PipeLine with status "<Status>" is validated
    Examples:
      | ProjectName | Description          | Tag           | ExecutionType | Key | Value | SKey | SValue | Pipeline | Icon         | SourceName | SourceType | SourceConnection | fileType | FilePath | SourceSchema | RegistryName      | Offset  | TransformationName | Category | TransformationType | columnValue | DestinationName | DestinationType | DestConnection | TopicName | Status |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | STREAMING     | k1  | v1    | s1   | v2     | PipeLIne | Add a Source | DemoSource | KAFKA      | KafkaSSLConnection   | CSV      | .csv     | Manual       | AutoManualSchemaDND | Earlier | TestTrans          | Column   | GroupBy            | m_id        | DemoDestination | KAFKA           | KafkaSSLConnection | CDR       | READY  |
