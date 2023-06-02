describe('customercreationAPI', () => {
    it('customer creation API', () => {
      cy.request({
          method: 'POST',
          url:'https://demoapigateway.emodal.com/eds/payments/v1/company/set-up',
          headers:{
              'Content-Type': 'application/json',
              'x-api-key':'4380EF0A-94C3-4A39-BB8E-16EDA2FC1FE1'
              
          },
          body:  {

                "company": {
                    "company_nm": "QA5 PAYMENT COMPANIES",
                    "company_type_cd": "B",
                    
                    "tax_id_nbr": "543596564499",
                    "scac": "",
                    "usdot_nbr": "",
                    "mcp_nbr": null,
                    "contact_info": {
                        "business_phone": "16264536289",
                        "country_cd": "US",
                        "email": "a15@adventintermodal.com"
                    },

"address_info": {
                        "address1": "3945 Freedom Cir",
                        "address2": "4A metro bus station",
                        "city": "Santa Clara",
                        "country_cd": "US",
                        "state": "New York",
                        "postal_cd": "10001"
                    }
                },
                "user": {
                    "fname": "EDSFName",
                    "lname": "EDSLName",
                    "email": "admin19@edsfaircompanies.com",
                    "contact_info": {
                        "phone": "3044218321",
                        "country_cd": "+92"
                    }
                }
            } 

            //var res=pm.response.json();
           // console.log(res.data.company_subscription_key)
      }).then((res)=>{
         // var res=postMessage.response.json();

         // console.log(res.data.company_subscription_key)
         // console.log(res.data.company_id)
          expect(res.status).to.eq(200)
          // expect(res.body.data).has.property('company_subscription_key','')
          // expect(res.body.data).has.property('company_id','')
          
      })

    });
})

