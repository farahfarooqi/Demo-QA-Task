module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  chromeWebSecurity: false,
};
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // viewports device set
  viewportWidth: 1900,
  viewportHeight:1200,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
