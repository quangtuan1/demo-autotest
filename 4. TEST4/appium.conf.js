exports.config = {
    runner: 'local',
    port: 4723,
    host: 'localhost',
    path: '/wd/hub',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        require: ['@babel/register'],
        timeout: 600000,
    },
    maxInstances: 1,
    specs: [
        './test/specs/**/*.js'
    ],
    capabilities: [
        {
            "platformName": "Android",
            "appium:platformVersion": "7.1.1",
            "appium:udid": "J1AXB760W828WXW",
            // "appium:appPackage": "com.asus.calculator",
            // "appium:appActivity": "com.asus.calculator.Calculator"
            "browserName": 'chrome',
        }
    ]
}