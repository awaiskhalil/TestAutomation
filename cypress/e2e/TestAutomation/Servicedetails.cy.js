
describe('my second test', () => {
    it('passes', () => {
       cy.visit('https://demopremium.emodal.com/login')
      // to search using css selector
      // cy.get('.a_login').click()
      // To search using specific text
     // cy.wait(5000)
     // cy.contains('Log In').click()
      cy.wait(3000)
      cy.get('input[name=Username]').type('amazon123')
      cy.get('input[name=Password]').type('Advent12')
      
      cy.get('#btnLogin').click()
      //wait command for 10 sec
      cy.wait(5000)
      cy.contains('My Equipment')
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .layout-align-end-end > .md-icon-button > .ng-scope').click()
      cy.wait(2000)
      cy.contains('AMZ')
      cy.contains('Service')
      cy.contains('Req Date/Time')
      cy.contains('Point of Contact')
      cy.contains('Company Name')
      cy.contains('Status')
      //top of the container
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > :nth-child(1) > span.layout-row > .pro-lbl-text-16').click()
      //selected container without any Fees
     // cy.get(':nth-child(3) > .layout-row.flex > :nth-child(1) > .layout-xs-column > :nth-child(1) > span.layout-row > .pro-lbl-text-16').click()
      cy.wait(5000)
      // expect(intValue).to.be.greaterThan(0)
       cy.get('.flex-5 > .layout-align-end-end > .md-icon-button').click()
       cy.get('[style="font-weight:bold;margin-top:5px;"] > .flex-15')
       .should('have.length.above', 0)
       .should('contain', '$')
       //expect(intValue).to.be.greaterThan(0)
       //expect(100).to.be.greaterThan(0)
      close
      
    })
  })