var footerCommands = {
    footerAboutClick: function() {
      return this.api
        .url("http://google.com")
        .waitForElementVisible('body', 10000)
        .windowMaximize()
        .refresh()
        .click("input[type='submit']")
        .pause(1000);
    },
    footerPress: function() {
      return this
        .click("input[type='submit']")
    }
  }

module.exports = {
  commands: [footerCommands],
  elements: {}
}
