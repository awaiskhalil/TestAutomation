describe('my fourth test', () => {
    it('passes', () => {
       cy.visit('https://demopremium.emodal.com/login')
      cy.wait(5000)
      cy.contains('Log In').click()
      cy.wait(3000)
      cy.get('input[name=Username]').type('amazon123')
      cy.get('input[name=Password]').type('Advent12')
      
      cy.get('#btnLogin').click()
      cy.wait(3000)
      cy.contains('My Equipment')
      cy.wait(5000)
      //Click on search box and search by Unit #
      cy.get('.md-chips').click()
      cy.get('#input-5').type('ABCD')
      cy.contains("Unit # Contains").click({Force: true})
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
      cy.wait(5000)
      //Second search with Status 
      cy.get('.md-chips').click()
      cy.get('.md-chip-remove').click()
      cy.get('#input-5').type('IN YARD')
      cy.contains("Status Contains").click({Force: true})
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click() 
      cy.wait(5000)
      //Third search with Origin
      cy.get('.md-chips').click()
      cy.get('.md-chip-remove').click()
      cy.get('#input-5').type('ETSLAX')
      cy.contains("Origin Contains").click({Force: true})
      cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
      cy.wait(5000)
      //Fourth search with Current location 
      //cy.get('.md-chips').click()
      //cy.get('.md-chip-remove').click()
      //cy.get('#input-5').type('Everport Terminal Services')
      //cy.contains("Current Location Contains").click({Force: true})
      //cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').click()
      //cy.wait(10000)
          
      cy.wait(5000)
    })

})