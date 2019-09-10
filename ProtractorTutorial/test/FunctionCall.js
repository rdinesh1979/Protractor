describe('Protractor Function Call Demo', function() {
	
	function Add(a,b){

		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		
		element(by.id("gobutton")).click();
	}
	
	it('Validating the Function Call with different parameters', function(){
		
		/*browser.waitForAngularEnabled(false);
		browser.get("http://google.com");//non angular apps*/
		
		browser.get('http://juliemr.github.io/protractor-demo/');
		
		Add(2,3);
		Add(4,3);
		Add(8,3);
		Add(2,3);
		Add(9,3);
		Add(0,3);
		
		element.all(by.repeater("result in memory")).each(function(item)
		{
			item.element(by.css("td:nth-child(3)")).getText().then(function(text)
			{
			console.log(text);
			})
		})
	})
	
})