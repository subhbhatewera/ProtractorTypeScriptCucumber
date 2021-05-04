Feature: I am going to validate Super Calculator functionality

@Calculator
Scenario: Validate addition of two numbers via Super Calculator

Given Open "Super Calculator" Webpage
When User enter numbers "5" and "26"
Then Result will display as "31"

@Calculator
Scenario: Validate addition of two numbers via Super Calculator

Given Open "Super Calculator" Webpage
When User enter numbers "4" and "5"
Then Result will display as "9"

@Calculator
Scenario: Validate addition of two numbers via Super Calculator

Given Open "Super Calculator" Webpage
When User enter numbers "8" and "6"
Then Result will display as "14"

@Angular
Scenario: Validate entering of data in Search field

Given Open "Angular" Webpage
When User click on new angular app link
Then New Angular web page should display and enter "Hello"