describe('Protractor Angular Calulcator Demo', function() {
	var obj = require("./Jsobjectdemo.js");
	var using = require('jasmine-data-provider')
	var d = require("../testdata/data.js");
	
	beforeEach(function() {
		//browser.manage().window().maximize();
		obj.getURL();
	})
	
	using(d.Datadriven, function(data, description)
	{
	
	it('Testing Calculator Functionality: '+description, function() {
		
		//browser.get('https://juliemr.github.io/protractor-demo/');
		
		obj.firstinput.sendKeys(data.firstinput);
		
		obj.secondinput.sendKeys(data.secondinput);
		
		obj.goButton.click();
		
		expect(obj.result.getText()).toBe(data.result)
		
	})
 })
	
})