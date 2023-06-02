/// <reference types="Cypress"/>

const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");

describe('Add Appointment Thru UI', () => {
  let today="";
var tomorrow="";
var t1="";
var dayaftertomorrow="";
var dt1=""; 
var onedayaftertomorrow="";
  var odat1="";
  var twodaysaftertomorrow="";
  var statustime = "";
  var pickdate = "";
  
const currentDate = new Date();
currentDate.setDate(currentDate.getDate());
//pickdate=(currentDate.toLocaleDateString())
const time1 = "2:45:00";
const time2= "10:00:00";
const t3= "06:00:00"
const currentDayOfMonth = currentDate.getDate();
const currentMonth = currentDate.getMonth(); 
const currentYear = currentDate.getFullYear();
 let trade;
 trade="?trade_type=I";
 
 it('Create Containers API then add thru UI', () => {
    function Containernum(){
    var container = "";
    var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var y =Math.random().toString().substring(2,9)
    
    for(var i = 0; i < 4; i++)
    container += x.charAt(Math.floor(Math.random() * x.length));

    console.log(container);
    return container.concat("",y);

}
  
statustime=currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + "T" + t3;
//pickdate =  (currentMonth + 1) + "/" + (currentDayOfMonth )  + "/" + currentYear;
//let statustime="";
//statustime=currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + "T" + time1;

today = currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + "T" + time2 ;
tomorrow=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 1) + "T" + time1 ;
t1=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 1) + "T" +time2;
dayaftertomorrow=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 2)+ "T" + time1 ;
dt1=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 2)+ "T" + time2;
onedayaftertomorrow=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 3)+ "T" + time1 ;
odat1=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 3)+ "T" + time2;
twodaysaftertomorrow=currentYear + "-" + (currentMonth + 1) + "-" + (currentDayOfMonth + 4)+ "T" + time1;
    cy.request({
      method: "POST",
      url:'http://10.20.41.36:8023/Imports/Post315Message',
      failOnStatusCode: false,
      headers:{
        'Content-Type': 'application/json',
        },
      body:
      `'{
                  "msgheader": { 
                  "source-cd": "ETSLAX", 
                  "sender-cd": "ETSLAX",
                  "receiver-cd": "ECP",
                  "gsn-nbr": "8115529",
                  "control-nbr": "400599283",
                  "interchange-dttm": "2022-12-30T16:00:00",
                  "trans-cnt": "1",
                  "rcvdtrans-cnt": "1"
              },
              "msgdata": [
                  {
                      "trans-dttm": "2023-04-27T02:30:00",
                      "unitinfo": {
                          "terminal-cd": "ETSLAX",
                          "unit-cat": "CONTAINER",
                          "unit-nbr": "`+Containernum()+`",
                          "unittypeISO-cd": "4270",
                          "unitsztype-cd": "40TK",
                          "ownerline-scac": "ONEY",
                          "ownerline-cd": "ONE"
                      },
                      "SvcEventinfo": [],
                      "unitStatusinfo": {
                          "unituse-cd": "I",
                          "unituse-desc": "IMPORT"
                      },
                      "arrivalinfo": {},
                      "departureinfo": {
                          "direction-cd": "DEPARTURE"
                      },
                      "routeinfo": {
                          "vessel-cd": "9588079",
                          "vessel-nm": "ONE HONOLULU",
                          "voyage-nbr": "217E",
                          "vslcdtype-cd": "Z"
                      },
                      "cargoinfo": {
                          "pol-cd": "CNYTN",
                          "pod-cd": "USOAK",
                          "bol-nbr": "QA123",
                          "reefer-flg": "N",
                          "hazmat-flg": "N",
                          "od-flg": "Y"
                      },
                      "feeinfo": [
                          {
                              "feetype-cd": "4I",
                              "feetype-desc": "Demurrage",
                              "fee-amt": 150,
                              "feeuntil-dttm": "`+tomorrow+`",
                              "fee-dttm": "`+today+`"
                          },
                          {
                              "feetype-cd": "4I1",
                              "feetype-desc": "Demurrage Day 1",
                              "fee-amt": 250,
                              "feeuntil-dttm": "`+dayaftertomorrow+`",
                              "fee-dttm": "`+t1+`"
                          },
                          {
                              "feetype-cd": "4I2",
                              "feetype-desc": "Demurrage Day 2",
                              "fee-amt": 350,
                              "feeuntil-dttm": "`+onedayaftertomorrow+`",
                              "fee-dttm": "`+dt1+`"
                          },
                          {
                              "feetype-cd": "4I3",
                              "feetype-desc": "Demurrage Day 3",
                              "fee-amt": 450,
                              "feeuntil-dttm": "`+twodaysaftertomorrow+`",
                              "fee-dttm": "`+odat1+`"
                          },
                          {
                              "feetype-cd": "FLIP",
                              "feetype-desc": "Flip Fee",
                              "fee-amt": 40
                          },
                          {
                              "feetype-cd": "EXAM",
                              "feetype-desc": "Container Exam Fee",
                              "fee-amt": 50
                          },
                          {
                              "feetype-cd": "USDA",
                              "feetype-desc": "USDA",
                              "fee-amt": 60
                          }
                      ],
                      "ShipmentStatusinfo": [
                          {
                              "shipmentstatus-cd": "AV",
                              "shipmentstatus-desc": "Available For Delivery",
                              "shipmentstatus-dttm": "`+statustime+`"
                          },
                          {
                              "shipmentstatus-cd": "NF",
                              "shipmentstatus-desc": "Free Time To Expire",
                              "shipmentstatus-dttm": "2023-02-27T06:10:00"
                          }
                      ],
                      "currentconditioninfo": {
                          "yard-loc": "AA1",
                          "fullempty-cd": "FULL",
                          "gate-cd": "3235"
                      },
                      "GateTransactioninfo": {
                          "Terminal-cd": null,
                          "trans-Id": null,
                          "con-nbr": null,
                          "cargoref": null,
                          "Vessel": null,
                          "Voyage": null,
                          "Line-cd": null,
                          "Weight": null,
                          "DriverLicState-Cd": null,
                          "Trucker-scac": null,
                          "licPlate-nbr": null,
                          "position": null,
                          "unitsztype-cd": null,
                          "chassis-count": null,
                          "chassis-thresh": null,
                          "trans-hist": [
                              {
                                  "Move-type": null,
                                  "trans-Status": null,
                                  "Trans-dttm": null,
                                  "lane-Id": null,
                                  "chassis-Nbr": null,
                                  "Accessory": null,
                                  "Genset-Fuel": null,
                                  "ChassisDmg-Flg": null,
                                  "AccessoryDmg-Flg": null,
                                  "Remarks": null,
                                  "Errors": null
                              }
                          ],
                          "damages": [],
                          "hazinfo": []
                      }
                  }
              ]
          }'`
        
    }).then(response => {
       expect(response.status).to.eq(200);
     
      const data2 = response.body.Keys[0].Key;
       cy.log(data2);

       expect(response.body.Keys[0]).to.have.property("Key")
       cy.log(JSON.stringify(response.body));
  

    var start_date="";
    var end_date= "";
    //cy.log(data2);
    let variable="";
    variable=data2;
    
    const start_time = "08:00 AM";
    const end_time= "09:00 PM";
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate());
    start_date=(currentDate.toLocaleDateString());

    currentDate.setDate(currentDate.getDate()+5);
    end_date=(currentDate.toLocaleDateString());
   
     cy.visit('https://demopremium.emodal.com/login')
     cy.wait(5000)
     cy.contains('Log In').click()
     cy.wait(3000)
     cy.get('input[name=Username]').type('amazon123')
     cy.get('input[name=Password]').type('Advent12')
    
     cy.get('#btnLogin').click()
    //wait command for 5 sec
     cy.wait(5000)
     cy.contains('My Equipment')
     cy.wait(5000)
  
    //Add container thru + button on UI
     //fab button on my container
    cy.get('.md-fab md-icon.ng-scope').click({force:true})
    cy.wait(1000)
  //click on add import orchestration  
     cy.get('button>span.ng-scope').contains('Add Import Drayage Orchestration').click()
  //company dropdown
     cy.get('#select_13').click();
     cy.wait(1000)
  //select and click options in company dropdown menu
     cy.get('#select_option_34').click()
     cy.wait(2000)
    // cy.get('#select_option_35 > div.md-text.ng-binding').contains('AMZ Test Company').click()
    
 //enter the container number
     cy.get('#input_19').type(variable)
     cy.wait(1000)
   //  cy.get('textarea.md-input').type(cn)
 //enter bill of lading
     cy.get('#input_20').type('QA123')
 //select port 
 //cy.get('[placeholder="Port"]').click();
     cy.get('#select_23').click()
     cy.contains('Ports of Los Angeles/Long Beach').click()
//Select Terminal
     cy.get('#select_26').click()
     cy.contains('Everport Terminal Services - Los Angeles').click()
     //cy.get('#select_option_81').click()
 // click on next button
     cy.get('button.md-raised span').contains('Next').click();
     cy.wait(2000);
     cy.get('.flex-50 > .layout-row > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').clear().type(end_date).click()
     //click on add appt checkbox
     cy.get(':nth-child(3) > .layout-row > .flex-50 > .ng-untouched > .md-label > .ng-binding').click()
     //click on date range
     cy.get('.flex-50 > :nth-child(2) > .ng-pristine').click() 
    //select start date and time
     cy.get('.md-1-line > :nth-child(1) > :nth-child(1) > div.layout-row > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').clear().type(start_date).click()
     cy.get('#input_87').clear()
     cy.get('.md-dialog-content > .layout-row > .md-button').click({multiple: true})
     cy.get('#input_87').type(start_time).click()
    // select end date and time
     cy.get(':nth-child(2) > div.layout-row > .ng-pristine > .md-datepicker-input-container > .md-datepicker-input').clear().type(end_date).click()
    
     //select assign later
     cy.get('#select_76').click()
     cy.get('Assign Later').click({force: true})
     cy.get('#step-content-6 > .ng-scope.ng-isolate-scope > .emPro-border-top > .layout-row > .md-raised').click()
    // cy.get('.ng-binding.ng-scope').contains('Submit').click();
       cy.wait(10000)
    //visit my container watchlist screen
    cy.visit('https://demoenvio360.emodal.com/Container/MyContainers',{timeout: 12000})
    cy.wait(20000)
      //click on the container
      // cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
      // cy.get('#menu_container_6 > md-menu-content > :nth-child(2) > .md-button').click()
       //Click on search box and search by Container #
     cy.get('.md-chips').click()
     cy.get('#input-8').type( variable )
    // cy.get('#span-title').click()
    // cy.get('.ng-binding')
     cy.contains("Unit # Contains",{timeout: 5000}).should('be.visible').click()
     cy.get('[ng-click="btnSOSearch_Click()"] > .ng-scope > .material-icons').should('be.visible').click()
    // cy.get('[md-virtual-repeat="item in containerList"][aria-hidden="false"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > :nth-child(1) > span.layout-row > .pro-lbl-text-16').click()
    cy.get('[md-virtual-repeat="item in containerList"][aria-hidden="false"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
    cy.get('md-menu-content > :nth-child(2) > .md-button').click()
    cy.wait(30000)
     cy.get('[ng-disabled="showLoader"]').click()
     cy.wait(80000)
     //cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click({multiple: true})
    //click on unit details
    // cy.get('#menu_container_6 > md-menu-content > :nth-child(2) > .md-button').click()
     //cy.wait(15000)
    //verify the appointment status and date/time
     cy.get('[ng-disabled="showLoader"]').click()
     cy.wait(1000)
     //Verify with pregate# and appt status
     cy.get(':nth-child(6) > .layout-row > :nth-child(1) > .pro-lbl-text-16').contains('ETSLAX')
     cy.wait(3000)
     cy.get(':nth-child(7) > :nth-child(1) > .layout-row > .pro-lbl-text-16').contains('Pending', {matchCase: false})
    
     cy.get('[ng-click="closeDialog()"]').click() 
     cy.wait(2000)
     
    //click again on edit services screen
    cy.get('[md-virtual-repeat="item in containerList"][aria-hidden="false"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
    cy.get('md-menu-content > md-menu-item.ng-scope > .md-button').click()

    // cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .layout-column.flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click()
    // cy.get('#menu_container_6 > md-menu-content > md-menu-item.ng-scope > .md-button').click()
     cy.wait(3000)
     
     //Select the trucker company 
    // cy.get('#select_value_label_5').click()
    // cy.get('#select_value_label_5 > :nth-child(1)').click()
    cy.get('#select_6').click()
     //cy.get('#select_option_25 > .md-text').click({force: true}) 
     cy.contains('Sophilabs trucking , Long Beach').click() 
    //click on submit button 
     cy.get('.md-raised > .ng-binding').click()
     cy.wait(25000)

     cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > .flex-xl-5 > .md-menu-height > .md-icon-button > .ng-scope').click({multiple: true})
    //click on unit details
    cy.get('md-menu-content > :nth-child(2) > .md-button').click()
    // cy.get('#menu_container_6 > md-menu-content > :nth-child(2) > .md-button').click()
     cy.wait(130000)
    //verify the appointment status as Confirmed
     cy.get('[ng-disabled="showLoader"]').click()
     cy.wait(5000)
     cy.get(':nth-child(7) > :nth-child(1) > .layout-row > .pro-lbl-text-16').contains('Confirmed', {matchCase: false})
     cy.wait(5000)
     close
    })
  })

})


