import dayjs from 'dayjs';
import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";

var shipmentstatustime="";
var today="";
var tomorrow="";
var t1="";
var dayaftertomorrow="";
var dt1=""; 
var onedayaftertomorrow="";
 var odat1="";
 var twodaysaftertomorrow="";
 let now = dayjs();
 let unit;
const time1 = "2:45:00";
const time2= "10:00:00";
const time3="16:10:00";

Given('315 File processing Container',() => {
  
     function Containernum(){
     var container = "";
     var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
     var y =Math.random().toString().substring(2,9)
     for(var i = 0; i < 4; i++)
     container += x.charAt(Math.floor(Math.random() * x.length));
     console.log(container);
     return container.concat("",y);

     
 }//this function used to create container numbers.
 function Bol(){
   var Bol = "";
   var x = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var y =Math.random().toString().substring(2,8)
   for(var i = 0; i < 4; i++)
   Bol += x.charAt(Math.floor(Math.random() * x.length));
   console.log(Bol);
   return Bol.concat("",y);

   
}
var bol = Bol()
// cy.log(now.format('YYYY-MM-DD'));
 let d1 = now.add('1', 'day');
 let d2 = now.add('2','day');
 let d3 = now.add('3','day');
 let d4 = now.add('4','day');
 
 shipmentstatustime= now.format('YYYY-MM-DD') + "T" + time3;//Shipmentstatusdate/time_

 today = now.format('YYYY-MM-DD') + "T" + time2 ;
 tomorrow= d1.format('YYYY-MM-DD') + "T" + time1 ;
 t1= d1.format('YYYY-MM-DD') + "T" +time2;
 dayaftertomorrow= d2.format('YYYY-MM-DD') + "T" + time1 ;
 dt1= d2.format('YYYY-MM-DD') + "T" + time2;
 onedayaftertomorrow= d3.format('YYYY-MM-DD') + "T" + time1 ;
 odat1= d3.format('YYYY-MM-DD') + "T" + time2;
 twodaysaftertomorrow= d4.format('YYYY-MM-DD') + "T" + time1;

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
                       "bol-nbr": "`+bol+`",
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
                           "fee-amt": 400
                       },
                       {
                           "feetype-cd": "EXAM",
                           "feetype-desc": "Container Exam Fee",
                           "fee-amt": 500
                       },
                       {
                           "feetype-cd": "USDA",
                           "feetype-desc": "USDA",
                           "fee-amt": 600
                       }
                   ],
                   "ShipmentStatusinfo": [
                       {
                           "shipmentstatus-cd": "AV",
                           "shipmentstatus-desc": "Available For Delivery",
                           "shipmentstatus-dttm": "`+shipmentstatustime+`"
                       },
                       {
                           "shipmentstatus-cd": "NF",
                           "shipmentstatus-desc": "Free Time To Expire",
                           "shipmentstatus-dttm": "2023-02-01T06:10:00"
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
  expect(response.body.Keys[0]).to.have.property("Key")
})
})