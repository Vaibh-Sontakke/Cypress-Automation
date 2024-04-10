const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/tests/*.cy.js'
  },
  env:{
    URL : 'https://naveenautomationlabs.com/opencart/index.php?route=account/register'
  }
});
