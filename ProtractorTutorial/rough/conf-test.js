var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		
	seleniumAddress : "http://localhost:4444/wd/hub",
	specs : ['./test/spec1.js'],
	framework: 'jasmine',
    
	capabilities: {
    browserName: 'chrome'
},

   onPrepare: function()  {
   browser.manage().window().maximize();
   browser.manage().timeouts().implicitlyWait(5000);
   browser.ignoreSynchronization = true;
   browser.waitForAngularEnabled(false);
    //custom reporter
    jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
        savePath: './reports',
        cleanDestination: true,
        takeScreenshots: true,
        takeScreenshotsOnlyOnFailures: false,
        fileNameDateSuffix: true,
        consolidateAll: true
    }));
},
jasmineNodeOpts: {
    showColors: true,
    includeStackTrace: true,
    isVerbose: true,
    defaultTimeoutInterval: 2500000
}
	
}