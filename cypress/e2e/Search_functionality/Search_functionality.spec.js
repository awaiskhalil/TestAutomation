/// <reference types="Cypress"/>
import {Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

    Given('User at the Login Page',() => {
        cy.visit(Cypress.env("baseUrl"));
        cy.wait(5000);
        cy.get('.a_login').contains('Log In').click()
        cy.wait(5000)
    
       });
    
    When('a User enters the username', () => {
        cy.get('input[name=Username').type('amazon123')
        return true;
});
 
    Then('User enters the password', ()=> {
        cy.get('input[name=Password').type('Advent12')
})

    Then('a User clicks on the login button', ()=> {
        cy.get('#btnLogin').click()
})
    When('a User will be logged in', () => {
        cy.url().should('contains', '/MyContainers')
        cy.wait(5000)
})

Then('User search by Unit #', () =>{
//Click on search box and search by Unit #
cy.get('.md-chips').click().type('DEMO')
//cy.get('#input-5').type('DEMO')
//cy.get('#input-6').type('DEMO')
cy.get('.selected > .ng-scope').should('be.visible').click()
//cy.contains("Unit # Contains",{timeout: 5000}).should('be.visible').click()
cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').should('be.visible').click()
cy.wait(10000)
})

Then('Search with Container Status', () => {
   //Second search with Status 
   cy.get('.md-chips').click()
   cy.get('.md-chip-remove').click()
   cy.get('#input-5').type('IN YARD')
   cy.get('#ul-5 > :nth-child(2) > .ng-scope').should('be.visible').click()
   //cy.contains("Status Contains",{timeout: 5000}).should('be.visible').click()
   cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click() 
   cy.wait(10000)
    
})

Then('Search with Origin', () => {
   //Third search with Origin
   cy.get('.md-chips').click()
   cy.get('.md-chip-remove').click()
   cy.get('#input-5').type('ETSLAX')
   cy.get('#ul-5 > :nth-child(4) > .ng-scope').should('be.visible').click()
  
   //cy.contains("Origin Contains",{timeout: 5000}).should('be.visible').click()
   cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
   cy.wait(10000)
    
})

Then('Search with Current location', () => {
   //Fourth search with Current location 
   cy.get('.md-chips').click()
   cy.get('.md-chip-remove').click()
   cy.get('#input-5').type('Everport Terminal Services')
   cy.get('#ul-5 > :nth-child(3) > .ng-scope').should('be.visible').click()
   //cy.contains("Current Location Contains",{timeout: 5000}).should('be.visible').click({Force: true})
   cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
   cy.wait(10000)
    
})