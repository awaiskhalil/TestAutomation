
import {Given} from "@badeball/cypress-cucumber-preprocessor";

    Given('login testing',  () => {
        cy.visit(Cypress.env("baseUrl"));
        cy.wait(5000);
        cy.get('.a_login').contains('Log In').click()
        cy.wait(5000)
    
       });