describe('Chain locators demo', function() {
	
	
	it('Open Angular Js Website', function() {
		
		browser.get("https://juliemr.github.io/protractor-demo/");
		element(by.model("first")).sendKeys("3");
		element(by.model("second")).sendKeys("5");
		
		element(by.id("gobutton")).click();
		//usage of Chain locator and css for identical elements.
		element(by.repeater("result in memory")).element(by.css("td:nth-child(3)")).getText().then(function(text)
		{
			
		console.log(text);	
			
		})
		// element(by.model("operator")).element(by.css("option:nth-child(4)")).click();
		
	})
	
})