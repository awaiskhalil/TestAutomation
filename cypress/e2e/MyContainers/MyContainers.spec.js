/// <reference types="Cypress"/>
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given('User at Login Page',() => {

        cy.visit(Cypress.env("baseUrl"));
    
        cy.wait(5000);
    
        // cy.get('.logo').should('be.visible');
    
        cy.get('.a_login').contains('Log In').click()
    
        cy.wait(5000)
    
       });
When('a User enters the username', () => {
        cy.get('input[name=Username').type('amazon123')
});

Then('a User enters the password', () => {
    cy.get('input[name=Password').type('Advent12')
})

Then('a User clicks on the login button', ()=> {
    cy.get('#btnLogin').click()
})
Then('a User will be logged in', () => {
    cy.url().should('contains', '/MyContainers')
    
})

Then('User check service details screen', () => {
    cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .layout-align-end-end > .md-icon-button > .ng-scope').click()
      cy.wait(2000)
      cy.contains('AMZ Test Company')
      cy.contains('Drayage Orchestration Service')
      cy.wait(5000)
})