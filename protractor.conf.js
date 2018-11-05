// 'use strict'
exports.config = {

  directConnect: true,
  ignoreUncaughtExceptions: true,
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  baseUrl: 'https://www.google.com.br/',
  capabilities: {
     'browserName': 'chrome',
    //  chromeOptions: {
    //  args: [ "--headless", "--disable-gpu", "no-sandbox", "--window-size=800,600"]
    //  }
  },

  specs: [
    'features/scenarios/*.feature'
  
   ],


  cucumberOpts: {
    require: [
      // './**/**/*Steps.js'
      'features/step_definitions/*.js',
      // 'features/support/*.js'  
    ], tags: [
          // Run this
          "@runThis",
          // Ignore this
          "~@componenteApi",
        ],

    format: ['json:results.json'],
    profile: false,
    'no-source': true,
  },


  beforeLaunch: function() {
    setTimeout(function() {
        browser.executeScript(function() {
            return {
                width: window.screen.availWidth,
                height: window.screen.availHeight
            };
        }).then(function(result) {
            browser.manage().window().setSize(result.width, result.height);
        });

    });

  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(10000);

  by.addLocator('dataTest',function(text) {
    return document.querySelector(`[data-test="${text}"]`)
  });
  },

  afterLaunch: function() {
    var reporter = require('cucumber-html-reporter');

    var options = {
          theme: 'bootstrap',
          jsonFile: 'results.json',
          output: 'report/e2e/tests_result/cucumber_report.html',
          reportSuiteAsScenarios: true,
          launchReport: true
      };

      reporter.generate(options);

  },
}

