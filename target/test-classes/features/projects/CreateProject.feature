@CreateProject
Feature:Creation of Projects and validation of Project Setting Pop Up
  As a user I want to Create a Project,Validate the Project Setting Pop Up
  and validate the Project Listing Page with different fields

  @Smoke @Reg @Positive @CRP-Test1 @TC6
  Scenario Outline: user is able to get Create Project Tab on Project Listing page
    Given user is on DIL login page
    When  enter username and password
    Then  user is able to verify "<Create Project Tab>" on Project Listing page
    Examples:
      | Create Project Tab |
      | Create Project     |

  @Reg @Positive @CRP-Test2  @TC7
  Scenario: user is able to get Project Setting pop up while selects Create Project Tab
    Given user is on DIL login page
    When  enter username and password
    And   clicks on createProject tab
    Then  user is able to get Project Setting PopUp

  @Smoke @Reg @Positive @CRP-Test3 @TC8
  Scenario: user is able to validate Project Setting PopUp
    Given user is on DIL login page
    When  enter username and password
    And   clicks on createProject tab
    Then  all the fields on Project Setting up page are validated

  @Smoke @Reg @Positive @CRP-Test4 @TC9
  Scenario Outline: user is able to create a Project and is able to validate it in ProjectListing Page
    Given user is on DIL login page
    When  enter username and password
    And   clicks on createProject tab
    When  creates project with "<ProjectName>","<Description>","<Tag>" and engine
    Then  created "<ProjectName>" with "<Tag>"is validated in project listing page
    Examples:
      | ProjectName | Description      | Tag  |
      | Auto_Pro    | CreatingPipeLine | Test |

  @Smoke @Reg @Positive @CRP-Test5 @TC10
  Scenario Outline: user is able to validate details for project on project listing page
    Given user is on DIL login page
    When enter username and password
    And searches the "<ProjectName>" with "<Description>","<Tag>"
    Then created "<ProjectName>"is validated for details like status,tag,projectName,run button,run button,delete button etc.
    Examples:
      | ProjectName | Description      | Tag  |
      | Auto-Test   | CreatingPipeLine | Test |


  @Smoke @Reg @Positive @CRP-Test6 @TC11
  Scenario Outline: user is able to Search Project on Project Listing by the use of Search Functionality
    Given user is on DIL login page
    When  enter username and password
    Then searches the "<ProjectName>" with "<Description>","<Tag>"
    Examples:
      | ProjectName | Description      | Tag  |
      | Auto-Pro    | CreatingPipeLine | Test |

  @Smoke @Reg @Positive @CRP-Test7 @TC12
  Scenario Outline: user is able to validate updated project on Project Listing page
    Given user is on DIL login page
    When enter username and password
    And  clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    And  created "<ProjectName>" with "<Tag>"is validated in project listing page
    Then "<NewTag>" and "<Description>" is updated and validated
    Examples:
      | ProjectName   | Description      | Tag  | NewTag  | Description     |
      | Auto-Pro_Test | CreatingPipeLine | Test | TestTag | Updated Project |

  @Smoke @Reg @Negative @CRP-Test8 @TC13
  Scenario Outline: user is not able to create Project when left mandatory field blank
    Given user is on DIL login page
    When  enter username and password
    And   clicks on createProject tab
    When  creates project with "<ProjectName>","<Description>","<Tag>" and engine
    Then  submit button is displaying disable
    Examples:
      | ProjectName      | Description | Tag  |
      | Auto-DemoProject |             | Test |

  @Smoke @Reg @Negative @CRP-Test9 @TC14
  Scenario Outline: user should not be able to validate cancelled project in ProjectListing Page
    Given user is on DIL login page
    When  enter username and password
    And clicks on createProject tab
    When enters "<ProjectName>","<Description>","<Tag>" and select engine and Cancel
    Then cancelled "<ProjectName>"is not validated in project listing page
    Examples:
      | ProjectName      | Description      | Tag  |
      | Auto-DemoProject | CreatingPipeLine | Test |

  @Smoke @Reg @Negative @CRP-Test10 @TC15
  Scenario Outline: user is not able to find deleted project on ProjectListing Page
    Given user is on DIL login page
    When  enter username and password
    And clicks on createProject tab
    When creates project with "<ProjectName>","<Description>","<Tag>" and engine
    Then created "<ProjectName>" with "<Tag>"is validated in project listing page
    When deletes the project
    Then deleted "<ProjectName>" disappear from Project Listing Page
    Examples:
      | ProjectName          | Description      | Tag  |
      | Auto-DemoTestProject | CreatingPipeLine | Test |


    # Do not run it *****
  @SmokeInNotScope @Test11 @TC16
  Scenario: user is able to delete all Projects from Project listing page
    Given user is on DIL login page
    When  enter username and password
    Then  he should be able to delete all the Projects from Project Listing Page

