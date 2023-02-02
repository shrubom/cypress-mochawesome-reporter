const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern:
      "/Users/shruti.panicker/cypress-mochawesome-reporter/cypress-mochawesome-reporter/cypress/integration/*.js",

    reporter: "mochawesome",
    reporterOptions: {
      reportDir:
        "/Users/shruti.panicker/cypress-mochawesome-reporter/cypress-mochawesome-reporter/cypress/reports/",
      reportFilename: "report",
      overwrite: true,
      html: true,
      json: true,
      charts: true,
    },
  },
});
