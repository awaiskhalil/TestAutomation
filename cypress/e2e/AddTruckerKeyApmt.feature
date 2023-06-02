
Feature: Add Trucker Key Appointment

Scenario: Add Appt by Selecting Trucker key only

Given 315 Add container in demo
Then AddTruckerKeyAppointment
Given User at Login Page
When a User enters the username
Then User enters the password
Given a User clicks on the login button
When a User will be logged in
Then Add container thru + button on UI
Then User visit mycontainer screen
Then Search by container #
Then Verify the Trucker company