@CreatePipeLine
Feature:Creation and Field level validation of pipelines
  As a user I want to Create a Pipeline,Validate the PipelineListing Page
  and is able to validate individual pipelines for field level validation

#-----------------------------UI Validation test Cases------------------------------------------------

  @Smoke @Reg @Positive @CP-Test1 @TC3
  Scenario Outline: user is able to validate pipeline listing page when there is no pipeline created
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  switches to "<Tab>"
    Then PipeLine listing page is validated for ProjectName,PipelineTag and "<Message>"
    Examples:
      | ProjectName | Description          | Tag           | Tab      | Message                                |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | Overview | There is no pipelines in this project. |

  @Smoke @Reg @Positive @CP-Test1 @TC4
  Scenario Outline: user is able validate pipeline properties
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<PKey>","<PValue>","<SKey>" and "<SValue>"
    Then PipeLine properties is validated for "<Description>","<Tag>","<ExecutionType>","<PKey>","<PValue>","<SKey>" and "<SValue>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | ExecutionType | PKey | PValue | SKey | SValue |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | STREAMING     | k1   | v1     | s1   | v2     |

#------------------------------Functional Validation Test Cases------------------------------------------

  @Smoke @Reg @Positive @CP-Test2 @TC5
  Scenario Outline: user is able to create pipeline and validate the same in Pipeline Listing page
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>" and "<Tag>"
    Then PipeLine listing page is validated for created Pipeline
    Examples:
      | ProjectName | Description          | Tag           | Pipeline |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne |

  @Smoke @Reg @Positive @CP-Test3 @TC6
  Scenario Outline: user is able to delete pipeline and validate the same in Pipeline Listing page
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>" and "<Tag>"
    When deletes pipeline
    Then "<Pipeline>" should get disappeared
    Examples:
      | ProjectName | Description          | Tag           | Pipeline |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne |


  @Smoke @Reg @Positive @CP-Test1 @TC7
  Scenario Outline: user is able to edit the pipeline and validate the same
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  creates a "<Pipeline>" with "<Description>","<Tag>","<ExecutionType>","<PKey>","<PValue>","<SKey>" and "<SValue>"
    When changes the "<NewExecutionType>","<NTag>"
    Then PipeLine properties is validated for "<Description>","<NTag>","<NewExecutionType>","<PKey>","<PValue>","<SKey>" and "<SValue>"
    Examples:
      | ProjectName | Description          | Tag           | Pipeline | ExecutionType | PKey | PValue | SKey | SValue | NewExecutionType | NTag          |
      | AutoDIL     | ProjectForAutomation | Test_Pipeline | PipeLIne | STREAMING     | k1   | v1     | s1   | v2     | BATCH            | Edit Pipeline |

