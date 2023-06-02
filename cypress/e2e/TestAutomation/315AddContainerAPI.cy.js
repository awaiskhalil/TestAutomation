/// <reference types="Cypress"/>

describe('315 File processing', () => {
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
    var pickdate1 = "";
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate());
  pickdate=(currentDate.toLocaleDateString());

  const currentDate1 = new Date();
  currentDate1.setDate(currentDate1.getDate()+10);
  pickdate1=(currentDate1.toLocaleDateString());
  const time1 = "2:45:00";
  const time2= "10:00:00";
  const t3= "06:00:00"
  const currentDayOfMonth = currentDate.getDate();
  const currentMonth = currentDate.getMonth(); 
  const currentYear = currentDate.getFullYear();
   let trade;
   trade="?trade_type=I";
   
   it('Create Containers API', () => {
      function Containernum(){
      var container = "";
      var x = "ANMK";
      var y = 2023489

      for(var i = 0; i < 4; i++)
      container += x.charAt(Math.floor(Math.random() * x.length));
  
      console.log(container);
      return container.concat("",y);

    
  }
    
  statustime=currentYear + "-" + (currentMonth + 1) + "-" + currentDayOfMonth + "T" + t3;
  //pickdate =  (currentMonth + 1) + "/" + (currentDayOfMonth + 10)  + "/" + currentYear;
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
                    "source-cd": "TRP1", 
                    "sender-cd": "TRP1",
                    "receiver-cd": "ECP",
                    "gsn-nbr": "8115529",
                    "control-nbr": "400599283",
                    "interchange-dttm": "2022-12-30T16:00:00",
                    "trans-cnt": "1",
                    "rcvdtrans-cnt": "1"
                },
                "msgdata": [
                    {
                        "trans-dttm": "2023-02-16T02:30:00",
                        "unitinfo": {
                            "terminal-cd": "PCT",
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
         const data = [ 
          ["Container number", "Trade Type", "Port", "Terminal", "Bill of Lading Number", "Vessel", "Voyage", "Guarantee Through Date"], 
          [response.body.Keys[0].Key, "I", "LALB","PCT", "QA123","","",pickdate1]
         ]
         cy.task("writeToCSV", { 
          name : 'test',
          rows: data
         })

         expect(response.body.Keys[0]).to.have.property("Key")
        
         cy.log(JSON.stringify(response.body));
           
      
        })
  
    })
  })

  describe('my csv upload test', () => {
    it('file upload', () => {
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
    
      //uploading the file through fixture
       const fixturepath = 'test.csv'
       cy.get('input[type=file]').invoke("removeClass","ng-scope").attachFile(fixturepath)

       cy.wait(12000)
      //click on ok button alert after successfully upload csv file
       cy.get('.md-dialog-content > .layout-row > .md-button > .ng-scope').click({multiple: true})
       cy.wait(15000)
     //visit my container watchlist screen
       cy.visit('https://demoenvio360.emodal.com/Container/MyContainers',{timeout: 12000})
       cy.wait(20000)
      //click on the container in the most recent of the list
       cy.get('[style="padding-bottom: 0px;"] > .layout-row.flex > :nth-child(1) > .layout-xs-column > :nth-child(1) > span.layout-row > .pro-lbl-text-16').click()
       cy.wait(15000)
       cy.get('[ng-disabled="showLoader"] > .material-icons').click()
       cy.get('[ng-disabled="CurrentUnitId >= DrayUnits.length"] > .ng-scope').click()
       cy.get('[ng-disabled="CurrentUnitId <= 1"] > .ng-scope').click()
       cy.wait(25000)
       cy.get('.flex-5 > .layout-align-end-end > .md-icon-button').click()
       cy.get('[ng-disabled="showLoader"]').click()
       cy.wait(12000)
      // add condition to sub-total should be greater than zero
      cy.get('[style="font-weight:bold;margin-top:5px;"] > .flex-15')
       .should('have.length.above', 0)
       .should('contain', '$')
      close
    })
})
