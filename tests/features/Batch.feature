Feature: Batch Module

Background: Admin logs into the application
 Given Admin logs into the application
    

Scenario: Verify Batch link is working in Top navigation bar 
    Given AdminHavila is in the dashboard
    When AdminHavila clicks on Batch link in Top navigation bar 
    Then AdminHavila can see the ManageBatch Page

Scenario: Verify manageBatch Page UI 
    Given AdminHavila is in the dashboard
    When AdminHavila clicks on Batch link in Top navigation bar 
    Then AdminHavila should verify ManageBatch Page UI

Scenario: verify Add Batch popup UI
 Given AdminHavila is in the dashboard
 When AdminHavila clicks on the Add new Batch button
 Then AdminHavila should verify Add new Batch popup elements

#Search Implementation
# Scenario: verify search is working
# Given AdminHavila is in ManageBatch Page
# When AdminHavila searches using text
# Then AdminHavila should see the filtered batches only