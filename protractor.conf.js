const SpecReporter = require('jasmine-spec-reporter').SpecReporter;
const HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
    specs: ['acceptance/**/*.scenario.spec.js'],
    capabilities: {
        browserName: 'chrome'
    },
    jasmineNodeOpts: {
        showColors: true,
        isVerbose: true,
        includeStackTrace: true,
        print: () => {}
    },
    baseUrl: 'http://localhost:8080',
    framework: 'jasmine',
    onPrepare: () => {
        require("babel-register");
        browser.driver.manage().window().maximize();
        browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: true
            }
        }));
        jasmine.getEnv().addReporter(new HtmlReporter({
            baseDirectory: 'e2e_output',
             preserveDirectory: false,
             docName: 'index.html'
        }).getJasmine2Reporter());
    }
};