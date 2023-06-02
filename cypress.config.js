const { defineConfig } = require("cypress");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const browserify = require("@badeball/cypress-cucumber-preprocessor/browserify");
const xlsx_methods = require("@emodal/cypress/common/xlsx-methods");
const  {querySql} =require("@emodal/cypress/common/sql");
const csv = require('@fast-csv/parse')
const { writeToPath } = require('@fast-csv/format');

async function setupNodeEvents(on, config) {
   await preprocessor.addCucumberPreprocessorPlugin(on, config);
    on("file:preprocessor", browserify.default(config))

    //write to csv file
    on("task", {
      //create task to write to csv
      writeToCSV({name, rows})
      {
          writeToPath(`cypress/fixtures/${name}.csv`, rows)
      //writeToPath(path.resolve(__fixtures, `./${Name}.csv`), rows)
          return null;
      }
  });
  //  on("task", { parseXlsx: xlsx_methods(),querySql});
    // Make sure to return the config object as it might have been modified by the plugin.
    return config;
 }
 module.exports = defineConfig({
   video: false,
   chromeWebSecurity: false,
      e2e: {
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
      //  setupNodeEvents(on, config) {
        // on('file:preprocessor', cucumber())
        setupNodeEvents,
        experimentalSessionAndOrigin: true,
        specPattern: "**/*.feature",
        supportFile: "cypress/support/e2e.js",
        // baseUrl: "https://demopremium.emodal.com/", 
         
  // return require('./cypress/plugins/index.js')(on, config)
  //},   
 
},
pageLoadTimeout: 1500000, 
defaultCommandTimeout: 90000, 
reporter: "junit", 
reporterOptions: {  
  mochaFile: "cypress/reports/junit-[hash].xml", 
},
});