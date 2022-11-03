const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    env:{
      validEmail: 'simic0711@gmail.com',
      validPassword: 'simav3',
      token: '',
      boardId: null
      },


    baseUrl: "https://cypress.vivifyscrum-stage.com/",
    watchForFileChanges: false

  },
});
