var seleniumServer = require('selenium-server')
var chromedriver = require('chromedriver')

module.exports = {
  src_folders: [require('nightwatch-cucumber')()],
  page_objects_path: 'page-objects',

  selenium: {
    start_process: true,
    server_path: seleniumServer.path,
    port: 4444
  },

  test_settings: {
    default: {
      launch_url: 'http://localhost',
      selenium_port: 4444,
      selenium_host: 'localhost',
      silent: true,
      screenshots: {
        enabled: true,
        on_failure: true,
        on_error: false,
        path: 'screenshots'
      },
      desiredCapabilities: {
        browserName: 'chrome',
        javascriptEnabled: true,
        acceptSslCerts: true
      },
      selenium: {
        cli_args: {
          'webdriver.chrome.driver': chromedriver.path
        }
      }
    }
  }
}
