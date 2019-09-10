//var util = require('util')

describe('To test the animal adoption flow', function(){
	
	beforeEach(function(){
		browser.manage().window().maximize();
		browser.get("http://www.angularjs.org");
		
	})
	
	it('Should greet the named user', function(){
		
		browser.sleep(3000);
		element(by.model('yourName')).sendKeys('Arjun');
		var greeting = element(by.xpath("//h1[@class='ng-binding']"));
		
		expect(greeting.getText()).toContain('Arjun!');
		browser.sleep(3000);
	});
	
});