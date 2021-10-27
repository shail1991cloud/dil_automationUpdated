Feature: user should be able to make a connection

  @CNC-1  @Smoke @Reg @Positive
  Scenario Outline: user is able to make kerberos connection
    Given user is on DIL login page
    When  enter username and password
    And   navigates to "<Create Connection>" page
    When  he enters "<name>","<description>","<connectionType>" ,principal and file name
    And   when clicks on Test connection
    Then  Connection is created and tested
    Examples:
      | Create Connection | name | description | connectionType |
      | Create a connection|Connection_Dil| Connection_Dil|KERBEROS  |