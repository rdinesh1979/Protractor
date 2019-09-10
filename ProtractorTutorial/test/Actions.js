describe("Actions Demo", function() {
	
	it("Open Amazon Shopping Website", function(){
		
		browser.waitForAngularEnabled(false);
		browser.get("https://www.amazon.in/"); // Non Angular Website
		browser.actions().mouseMove(element(by.id("twotabsearchtextbox")).sendKeys("t-shirt")).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ARROW_DOWN).perform();
		browser.actions().sendKeys(protractor.Key.ENTER).perform().then(function(){
			browser.sleep(5000);
		})
				
	})
	
})