describe("All Element Validation using Protractor", function() {
	
	function Add(a,b){
		element(by.model("first")).sendKeys(a);
		element(by.model("second")).sendKeys(b);
		element(by.id("gobutton")).click();
	}
	
	it("Locators", function(){
		
		browser.get("http://juliemr.github.io/protractor-demo");
		
		Add(2,3);
		Add(4,8);
		Add(8,3);
		Add(2,3);
		
		element.all(by.repeater("result in memory")).count().then(function(txt){
			console.log("Count of Rows is: "+txt);
		})
		
		element.all(by.repeater("result in memory")).each(function(item){
			
			item.element(by.css("td:nth-child(3)")).getText().then(function(text){
				
				console.log("Result of Addition is: "+text);
			})
			
		})
	})
	
})