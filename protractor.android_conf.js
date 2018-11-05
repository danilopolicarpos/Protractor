exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub', //appium server 
    baseUrl: '',
     specs: [
      'specs/spec.js'
      ],
  
     capabilities: {
       browserName: 'chrome',
       'appium-version': '1.0',
       platformName: 'Android',
       platformVersion: '8.1.0',
       deviceName: 'orio_27',

    chromeOptions: {
        args: ['chrome --no-default-browser-check --no-first-run --disable-fre'],
        
        },
    },
     
   
};