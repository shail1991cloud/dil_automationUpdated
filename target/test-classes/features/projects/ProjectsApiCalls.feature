Feature: To validate created Project with backend API

  @Smoke @Reg @Positive @PBE-API-Test1 @TC47
  Scenario Outline: user is able to create a Project and is able to validate it in backend Api
    Given user is on DIL login page
    When  enter username and password
    And   clicks on createProject tab
    When  creates project with "<ProjectName>","<Description>","<Tag>" and engine
    When  authenticated for backend api with "<clientId>","<clientSecret>","<passWord>","<userName>" and "<pathParam>"
    And   fetches the response with "<jsonPath>" to get "<bearerToken>"
    Then  user should be able to use "<QueryParam>" to validate project on "<BackendApiPath>"
    Examples:
      | ProjectName | Description      | Tag  | QueryParam  | BackendApiPath | clientId | clientSecret             | passWord | userName | pathParam          | jsonPath     | bearerToken  |
      | Auto_Pro    | CreatingPipeLine | Test | projectName | /projects      | dil-ui   | ovrzCm54Zu+q2SuJIhaOnA== | Parihars@123 | parihars | /authservice/login | tokenDetails | access_token |

