const { defineConfig } = require("cypress");
const cucumber = require("cypress-cucumber-preprocessor").default;

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    // specPattern:"**/*.{feature,cy.js}",
    setupNodeEvents(on, config) {
       on("file:preprocessor", cucumber())
    },
    experimentalStudio : true,
    // watchForFileChanges:false
    baseUrl:"https://magento.softwaretestingboard.com/",
    // viewportHeight:550,
    // viewportWidth:550
    screenshotOnRunFailure:false,
    trashAssetsBeforeRuns:true,
    screenshotsFolder:"My Screenshots folder",
    video:false,
    videosFolder:"My Videos folder",
    videoCompression:0,
    reporter: "mochawesome",
    reporterOptions: {
      reportDir: "cypress/myReport", // where to save in directory
      overwrite: false,
      html: true,
      json: false,
      timestamp: "mmddyyyy_HHMMss"
  }

  },
});
