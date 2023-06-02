
describe('my third test', () => {
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
      cy.wait(5000)
      //default search by unit details
      cy.get('.sort-btn > .ng-scope').click()
      cy.get('.layout-align-end-center > .md-icon-button > .ng-scope').click()
      cy.wait(3000)
      //Search by Status
      cy.get('.sort-btn').click()
      cy.get('#select_value_label_30 > :nth-child(1)').click()
      cy.get('.md-select-icon').click({force: true})
      //cy.get(//md-option[@id='select_option_26']).click()
      //cy.contains("Status").click({force: true})
      cy.get('#select_option_35').click()
      cy.get('.layout-align-end-center > .md-icon-button').click()
      cy.wait(5000)
      //Search by Current location
      cy.get('.sort-btn').click()
      cy.get('#select_value_label_40 > :nth-child(1)').click()
      cy.get('.md-select-icon').click({force: true})
      cy.get('#select_option_46').click()
      //cy.contains("Current Location").click({force: true})
      cy.get('.layout-align-end-center > .md-icon-button > .ng-scope').click()
      cy.wait(5000)
      //Search by Origin
      cy.get('.sort-btn').click()
      cy.get('#select_value_label_50 > :nth-child(1)').click()
      cy.get('.md-select-icon').click({force: true})
      cy.get('#select_option_57').click()
      //cy.contains("Origin").click({force: true})
      cy.wait(5000)
      cy.get('.layout-align-end-center > .md-icon-button > .ng-scope').click()
      //Sort by Destination
      cy.get('.sort-btn').click()
      cy.get('#select_value_label_60 > :nth-child(1)').click()
      cy.get('.md-select-icon').click({force: true})
      cy.get('#select_option_68').click()
      //cy.contains("Destination").click({force: true})
      cy.get('.layout-align-end-center > .md-icon-button > .ng-scope').click()
      cy.wait(5000)
      close
      
    })
  })