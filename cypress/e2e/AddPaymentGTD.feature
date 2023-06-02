Feature: Add Payment Guarantee Date
Scenario: Add Pay GTD thru UI
Given 315 File processing in Demo
When Re-Add Payment GTD
Given User at Login Page
When a User enters the username
Then User enters the password
Given a User clicks on the login button
When a User will be logged in
Then User upload the csv file
Given User visit the mycontainers screen
When Payment GTD shows as NA
Then Click on Edit services screen and Add Payment GTD
Then Verify the Payment GTD