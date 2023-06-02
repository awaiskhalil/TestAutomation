/// <reference types="Cypress" />
describe('Login to DrayX',function()
{


it('Login to DrayX through fixture',function(){

//Below line is used to access Url
cy.visit("http://premium.uatemodal.com/ ");
cy.get('.a_login').contains('Log In').click()
cy.wait(5000)
cy.get('input[name=Username]').type('jlim@tsgfleet.com');
cy.get('input[name=Password]').type('advent12');
cy.wait(3000);

cy.get('#btnLogin').contains('LOGIN').click({force:true});
cy.wait(3000)


  //cros fix           
 cy.origin("https://drayx.uatemodal.com/container/mycontainers/",function(){

  cy.visit("https://drayx.uatemodal.com/container/mycontainers/");
             
   //fab button on my container
    cy.get('.md-fab md-icon.ng-scope').click({force:true})
    cy.wait(3000)
  //click on add import orchestration  
  cy.get('button>span.ng-scope').contains('Add Import Drayage Orchestration').click()
  //company dropdown
 cy.get('#select_13').click();
 cy.wait(3000)
  //select and click options in company dropdown menu
  cy.get('#select_option_35 > div.md-text.ng-binding').contains('ISG Trucking Company').click()
   cy.wait(3000)
//enter the container number
cy.get('textarea.md-input').type(Container())
function Container(){
    var result = "";
    var x = "QATE";
    var y =8966735

    for(var i = 0; i < 4; i++)
    result += x.charAt(Math.floor(Math.random() * x.length));
    
        console.log(result);
        return result.concat("",y);
    
        
      }

      //enter bill of lading
      cy.get('input[ng-model=billoflading]').type(BOL());
      function BOL(){
          var result="";
          var b = "ABCSEDT34"
          for(var i=0;i<9;i++)
          result += b.charAt(Math.floor(Math.random() * b.length));

          console.log(result);
          return result;

      

      }
      //select port
      cy.get('[placeholder="Port"]').click();
      cy.contains('Port of Oakland').click();
      // click on next button
      cy.get('button.md-raised span').contains('Next').click();
      cy.wait(10000);
       //pickup date and time.
     // cy.get('input[value=true]').check()
      //cy.get('input[name=dateSelection]').contains('Single Date').check()
     // cy.wait(5000)
     // cy.get('.md-datepicker-button.md-icon-button.md-button.md-ink-ripple').click();
     cy.get('button[tabindex="-1"]').click({multiple:true}) 
     cy.get('td#md-22-month-2022-6-16.md-calendar-date.md-calendar-selected-date.md-focus').click();
     cy.get('.ng-binding.ng-scope').contains('Submit').click();
     cy.wait(5000)
    })


})

})