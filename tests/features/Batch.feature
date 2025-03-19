Feature: Batch Module

Background: Admin logs into the application
 Given Admin logs into the application
    

Scenario: Verify Batch link is working in Top navigation bar 
    Given AdminHavila is in the dashboard
    When AdminHavila clicks on Batch link in Top navigation bar 
    Then AdminHavila can see the ManageBatch Page

Scenario: Verify managePage UI 
    Given AdminHavila is in the dashboard
    When AdminHavila clicks on Batch link in Top navigation bar 
    Then AdminHavila should verify ManageBatch Page UI


