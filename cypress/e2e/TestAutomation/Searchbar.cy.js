describe('Search functionality test', () => {
    it('passes', () => {
       cy.visit('https://demopremium.emodal.com/login')
      cy.wait(5000)
      cy.contains('Log In').click()
      cy.wait(3000)
      cy.get('input[name=Username]').type('amazon123')
      cy.get('input[name=Password]').type('Advent12')
      
      cy.get('#btnLogin').click()
      cy.wait(3000)
      cy.contains('Container #', {timeout: 30000}).should('be.visible')
      cy.wait(2000)
      //Click on search box and search by Unit #
      cy.get('.md-chips').click()
      cy.get('#input-5').type('DEMO')
      cy.contains("Unit # Contains",{timeout: 5000}).should('be.visible').click()
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').should('be.visible').click()
      cy.wait(5000)
      //Second search with Status 
      cy.get('.md-chips').click()
      cy.get('.md-chip-remove').click()
      cy.get('#input-5').type('IN YARD')
      cy.contains("Status Contains",{timeout: 5000}).should('be.visible').click()
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click() 
      cy.wait(5000)
      //Third search with Origin
      cy.get('.md-chips').click()
      cy.get('.md-chip-remove').click()
      cy.get('#input-5').type('ETSLAX')
      cy.contains("Origin Contains",{timeout: 5000}).should('be.visible').click()
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
      cy.wait(5000)
      //Fourth search with Current location 
      cy.get('.md-chips').click()
      cy.get('.md-chip-remove').click()
      cy.get('#input-5').type('Everport Terminal Services')
      cy.contains("Current Location Contains",{timeout: 5000}).should('be.visible').click({Force: true})
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
      cy.wait(1000)
          
      cy.wait(5000)
    })

})