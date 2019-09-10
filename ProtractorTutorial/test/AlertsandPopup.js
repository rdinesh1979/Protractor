describe("Handling Alerts using Protractor", function() {
	
	
		it('Alert Accept Operation', function(){
		browser.ignoreSynchronization = true; //for non-angular websites
		browser.manage().timeouts().implicitlyWait(30000);
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		
		element(by.name("alert")).click();
		var alrt = browser.switchTo().alert();
		//var EC = protractor.ExpectedCondtions;
		//browser.wait(EC.alertIsPresent(),6000, "Alert is not present");
		alrt.accept();
		});
	
		it('Alert Dismiss Operations', function(){
		browser.ignoreSynchronization = true; //for non-angular websites
		browser.manage().timeouts().implicitlyWait(30000);
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		
		element(by.name("confirmation")).click();
		var alrt = browser.switchTo().alert();
		//var EC = protractor.ExpectedCondtions;
		//browser.wait(EC.alertIsPresent(),6000, "Alert is not present");
		alrt.dismiss();
		});
	
		it('Alert get Text Operations', function(){
			
			browser.manage().timeouts().implicitlyWait(30000);
			browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
			
			element(by.name("confirmation")).click();
			var alrt = browser.switchTo().alert();
			//var EC = protractor.ExpectedCondtions;
			//browser.wait(EC.alertIsPresent(),6000, "Alert is not present");
			//console.log(alrt.getText());
			});	
	
		it('Alert send Keys Operations', function(){
			browser.ignoreSynchronization = true; //for non-angular websites
			browser.manage().timeouts().implicitlyWait(30000);
			browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
			
			element(by.name("prompt")).click();
			var alrt = browser.switchTo().alert();
			//var EC = protractor.ExpectedCondtions;
			//browser.wait(EC.alertIsPresent(),6000, "Alert is not present");
			alrt.sendKeys("hello");
			});	
	
})