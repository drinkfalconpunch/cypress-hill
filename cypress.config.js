const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'q4bw4p',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  viewportWidth: 1920,
  viewportHeight: 1080
});
