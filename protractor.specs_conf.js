var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['unit/spec.js'],

    capabilities: {
    browserName: 'chrome',
    chromeOptions: {
       args: [ "--headless", "--disable-gpu", "no-sandbox", "--window-size=800,600"]
       }
  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'report/spec/screenshots'
    }).getJasmine2Reporter());
 }
};

