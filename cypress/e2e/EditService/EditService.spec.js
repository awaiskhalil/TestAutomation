/// <reference types="Cypress"/>

import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

    Given ('a User visit the Drayxchange App', () => {
        
        //cy.visit(Cypress.env("baseUrl"));
        cy.visit('https://demopremium.emodal.com/')
        cy.contains('Log In').click()
          cy.wait(5000)
         
    })
    When ('a User enters the username', () => {
            cy.get('input[name=Username').type('amazon123')
    })
    
    Then ('a User enters the password', () => {
        cy.get('input[name=Password').type('Advent12')
    })
    
    Then ('a User clicks on the login button', ()=> {
        cy.get('#btnLogin').click()
    })
    Then ('a User will be logged in', () => {
        cy.url().should('contains', '/MyContainers')
        
    })
    
    Then ('User click edit service screen', () => {
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      cy.get('#menu_container_7 > md-menu-content > md-menu-item.ng-scope > .md-button').click()
      cy.wait(3000)
      cy.get('.flex-50 > .layout-row > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').click()    
    
      //checkbox ticked for empty return
      //cy.get('.md-container').click()
      cy.get(':nth-child(5) > :nth-child(2) > :nth-child(1) > .flex > .layout-row > .flex-50 > .ng-valid > .md-label > .ng-binding').click()
      //click on submit button
      cy.get('.md-raised').click()
      cy.get('.md-dialog-content > .layout-row > .md-button').click()
      cy.wait(7000)
      
    })
//verify the service updated successfully
    Then ('User verify the edit service screen', () => {
        cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      cy.get('#menu_container_6 > md-menu-content > md-menu-item.ng-scope > .md-button').click()
      cy.wait(3000)
      cy.get('.m-right-0 > .ng-binding').click()
      cy.wait(5000)
        
    })