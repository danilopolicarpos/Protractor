exports.config = {
    seleniumAddress: 'http://localhost:4723/wd/hub', //appium server 

    specs: [
        'specs/spec.js'
    ],

    capabilities: {
        platformName: 'iOS',
        platformVersion: '12.0',
        browserName: '',
        app: 'safari',
        deviceName: 'iPhone 8',
        'appium-version': "1.4.0",
    },

};



