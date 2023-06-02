describe('my fourth test', () => {
    it('passes', () => {
       cy.visit('https://demopremium.emodal.com/login')
      cy.wait(5000)
      cy.contains('Log In').click()
      cy.wait(3000)
      cy.get('input[name=Username]').type('amazon123')
      cy.get('input[name=Password]').type('Advent12')
      
      cy.get('#btnLogin').click()
      cy.wait(5000)
      cy.contains('My Equipment')
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      cy.get('#menu_container_7 > md-menu-content > md-menu-item.ng-scope > .md-button').click()
      cy.wait(3000)
      cy.get('.flex-50 > .layout-row > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').click()    
    
      //checkbox ticked for empty return
      cy.get('.md-container').click()
      //click on submit button
      cy.get('.md-raised').click()
      cy.get('.md-dialog-content > .layout-row > .md-button').click()
      cy.wait(7000)
      //verify the service updated successfully
      cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      cy.get('#menu_container_6 > md-menu-content > md-menu-item.ng-scope > .md-button').click()
      cy.wait(3000)
      cy.get('.m-right-0 > .ng-binding').click()
      cy.wait(5000)
    })

})