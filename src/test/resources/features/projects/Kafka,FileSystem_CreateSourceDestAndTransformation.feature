@CreateSourceAndDestination
Feature:Creation of Sources and Destination
  As a user I want to Create a Source and Destination,Validate Source and Destination attributes


  @Smoke @Reg @Positive @CSource-Test1 @TC18
  Scenario Outline: user is able to create file type source for ManualSchema
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND     |

  @Smoke @Reg @Positive @CSource-Test2 @TC19
  Scenario Outline: user is able to create FileSystem source with No schema
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema | DeleteButton  |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | No Schema    | Delete Source |



  @Smoke @Reg @Positive @CSource-Test3 @TC20
  Scenario Outline: user is able to delete created source
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    And  click on "<DeleteButton>" to delete
    Then source "<Name>" should get deleted
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema | DeleteButton  |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | No Schema    | Delete Source |

  @Smoke @Reg @Positive @CTransformation-Test1 @TC21
  Scenario Outline: user is able to create Transformation
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue | TransformationName | Category | TransformationType | columnValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND      | TestTrans          | Column   | GroupBy            | m_boolean         |

  @Smoke @Reg @Positive @CDestination-Test1 @TC22
  Scenario Outline: user is able to create File System type Destination
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | SourceType  | SourceConnection       | fileType | FilePath | Separator | sourceSchema  | SchemaValue | DestinationName | DestinationType | DestConnection         | TopicName |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND      | DemoDestination | File System     | Auto_Kerb_DND | CDR       |

  @Smoke @Reg @Positive @CDestination-Test1 @TC23
  Scenario Outline: user is able to create Kafka type Destination
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>"
    And  clicks add
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | SourceType  | SourceConnection       | fileType | FilePath | Separator | sourceSchema  | SchemaValue | DestinationName | DestinationType | DestConnection | TopicName    |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | Auto_Kerb_DND | CSV      | .csv     | ,         | Manual Schema | AutoManualSchemaDND      | DemoDestination | KAFKA           | KafkaSSLConnection    | CDR |

  @Smoke @Reg @Positive @CSource-Test1 @TC24
  Scenario Outline: user is able to create Kafka source for Manual Schema
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName      | SourceType | SourceConnection | TopicName | SourceSchema | RegistryName            | Offset|Key | Value |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSourceKafka | KAFKA      | KafkaSSLConnection      | CDR       | Manual    | AutoManualSchemaDND | Earlier |K   | v     |
  @Smoke @Reg @Positive @CSource-Test1 @TC25
  Scenario Outline: user is able to create Kafka source for NoSchema
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName      | SourceType | SourceConnection | TopicName | SourceSchema | RegistryName            | Offset|Key | Value |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSourceKafka | KAFKA      | KafkaSSLConnection      | CDR       | No_Schema    | AutoManualSchemaDND | Earlier |K   | v     |

#-----------------------------------In Progress__-----------------------








  @Positive @CSource-Test2 @TC**
  Scenario Outline: user is able to validate SourceProperties should be able to delete same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      |


  @Positive @CTransformation-Test1 @TC**
  Scenario Outline: user is able to validate Transformation Properties and should be able to delete same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<TransformationName>","<Category>","<TransformationType>","<columnValue>" and click add
    Then Transformation with "<TransformationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue | TransformationName | Category | TransformationType | columnValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      | TestTrans          | Column   | GroupBy            | age         |

  @Positive @CDestination-Test1 @**
  Scenario Outline: user is able to validate Destination Properties should be able to delete same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>" and click add
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | SourceType  | SourceConnection       | fileType | FilePath | Separator | sourceSchema  | SchemaValue | DestinationName | DestinationType | DestConnection | TopicName    |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      | DemoDestination | KAFKA           | Kafka_plain    | testkafkacmp |

  @Positive @CSource-Test2 @TC**
  Scenario Outline: user is able to edit file source from Manual Schema to No Schema and validate the same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      |

  @Positive @CSource-Test1 @**
  Scenario Outline: user is able to edit source from No Schema to Manual Schema and validate the same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<TopicName>","<SourceSchema>","<RegistryName>","<Offset>","<Key>","<Value>" and clicks on add
    Then Source should get created with "<SourceName>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName      | SourceType | SourceConnection | TopicName | SourceSchema | RegistryName            | Offset|Key | Value |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSourceKafka | KAFKA      | Kafka_plain      | CDR       | No_Schema    | AAA_Automation_DoNotDEl | Earlier |K   | v     |


  @Positive @CSource-Test2 @TC**
  Scenario Outline: user is able to edit file source from Manual Schema to No Schema and validate the same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<Name>","<Type>","<connection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<Name>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | Name       | Type        | connection             | fileType | FilePath | Separator | sourceSchema  | SchemaValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      |

  @Positive @CDestination-Test1 @**
  Scenario Outline: user is able to edit destination and validate the same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" having "<Description>" and "<Tag>"
    And  clicks on "<Icon>"
    When Enters "<SourceName>","<SourceType>","<SourceConnection>","<fileType>","<FilePath>","<Separator>","<sourceSchema>","<SchemaValue>"
    Then Source should get created with "<SourceName>"
    When enters "<DestinationName>","<DestinationType>","<DestConnection>","<fileType>" ,"<FilePath>","<TopicName>" and click add
    Then Destination with "<DestinationName>" should get created
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | Icon         | SourceName | SourceType  | SourceConnection       | fileType | FilePath | Separator | sourceSchema  | SchemaValue | DestinationName | DestinationType | DestConnection         | TopicName |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | Add a Source | DemoSource | File System | AUTOMATION_DONOTDELETE | CSV      | .csv     | ,         | Manual Schema | H_JSON      | DemoDestination | File System     | AUTOMATION_DONOTDELETE | CDR       |

