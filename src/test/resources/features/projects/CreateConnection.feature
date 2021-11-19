@CreateConnection
Feature: User should be able to Create, Validate Connections on Connections Page

  @Smoke @Reg @Positive @CRC-Test1 @TC1
  Scenario Outline: user is able to create Kerberos connection
    Given user is on DIL login page
    When  enter username and password
    And   navigates to the "<CreateConnection>" tab
    When  enters "<Name>","<Description>","<ConnectionType>",principal and fileType
    Then  connection should be tested successfully
    When  creates the connection
    Then  connection with "<Name>" should be validated on Connection listing page
    Examples:
      | CreateConnection    | Name               | Description         | ConnectionType |
      | Create a connection | AutomationKerberos | Creating Connection | KERBEROS       |


  @Smoke @Reg @Positive @CRC-Test2 @TC2
  Scenario Outline: user is able to create SSL connection
    Given user is on DIL login page
    When  enter username and password
    And   navigates to the "<CreateConnection>" tab
    When  enters "<Name>","<Description>","<ConnectionType>"
    And   enters "<KeyStoreFileName>","<TrustStoreFileName>","<KeyStorePassword>","<TrustScorePassword>","<TLSProtocol>"
    Then  connection should be tested successfully
    When  creates the connection
    Then  connection with "<Name>" should be validated on Connection listing page
    Examples:
      | CreateConnection    | Name          | Description         | ConnectionType | KeyStoreFileName    | TrustStoreFileName   | KeyStorePassword | TrustScorePassword | TLSProtocol |
      | Create a connection | AutomationSSL | Creating Connection | SSL            | kafka-keystore.jks | kafka-truststore.jks | confluent        | confluent          | TLS         |
