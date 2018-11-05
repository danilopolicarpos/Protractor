var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    directConnect: true,
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['specs/spec.js'],

    capabilities: {
    browserName: 'chrome'
  },

  onPrepare: function() {
    // Add a screenshot reporter and store screenshots to `/tmp/screenshots`:
    jasmine.getEnv().addReporter(new HtmlReporter({
       baseDirectory: 'report/spec/screenshots'
    }).getJasmine2Reporter());
 }
};

