// login.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('my first test', () => {
    it('passes', () => {
       cy.visit('https://demopremium.emodal.com/login')
      // to search using css selector
      // cy.get('.a_login').click()
      // To search using specific text
      cy.wait(5000)
      cy.contains('Log In').click()
      cy.wait(3000)
      cy.get('input[name=Username]').type('amazon123')
      cy.get('input[name=Password]').type('Advent12')
      
      cy.get('#btnLogin').click()
      //wait command for 10 sec
      cy.wait(5000)
      cy.contains('My Equipment')
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .layout-align-end-end > .md-icon-button > .ng-scope').click()
      //cy.xpath("//md-card[1]//div[1]//div[1]//div[1]//div[11]//div[1]//button[1]//md-icon[1]").click()
      cy.contains('Amazon')
     // cy.xpath("//md-card[1]//div[1]//div[1]//div[1]//div[11]//div[1]//button[1]//md-icon[1]").click()
      cy.wait(3000)
      
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      cy.get('#menu_container_7 > md-menu-content > :nth-child(2) > .md-button > .ng-binding').click()
      //cy.xpath("//span[contains(text(),'FCIU9885526')]").click()
      //test comment
      // cy.contains('Unit Details').click()
      cy.wait(3000)
      //check for service requested details
      cy.get('.m-left-12 > .flex-100 > .flex-10').click()
      cy.wait(3000)
      // Go to next container unit details screen
      cy.get('[ng-disabled="CurrentUnitId >= DrayUnits.length"] > .ng-scope').click()
      cy.wait(4000)
      //Click on Close button
      cy.get('[ng-click="closeDialog()"] > .material-icons').click()
      
      cy.wait(5000)
      close
      
    })
  })