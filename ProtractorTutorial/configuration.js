var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
exports.config = {
		directConnect: true,
		//seleniumAddress: 'http://localhost:4444/wd/hub',
		specs: ['./test/TestCheckout.js'],
		framework: 'jasmine',
    
		capabilities: {
        browserName: 'chrome'
    },
    

    onPrepare: function() {
    	   browser.manage().window().maximize();
    	   //browser.manage().timeouts().implicitlyWait(10000);
    	   browser.ignoreSynchronization = false;
    	   browser.waitForAngularEnabled(true);
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
    
    suites: 
    {
    	Smoke: ['./test/spec1.js','./test/Calculator.js'],	
    	Regression: './test/ChainLocators.js'
    },

    
    jasmineNodeOpts: {
       	showColors: true,//use colors in command line report
        includeStackTrace: true,
        isVerbose: true,
        defaultTimeoutInterval: 2500000
    }
   
};