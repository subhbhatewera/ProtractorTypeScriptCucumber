Feature: I am going to validate login functionality.

Scenario Outline: Login feature

Given Gili Products Homepage is open
When User click on login link
And Enter "<uname>", "<pwd>" and click on signin button
Then My Account page should display

Examples:
    | uname | pwd |
    | LilliJWhite@einrot.com  | webgility | 
    | LindaJPrice@fleckens.hu | webgility |
