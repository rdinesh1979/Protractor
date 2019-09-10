describe("Handling Angular WebTable using Protractor", function() {
	
	it("Angular WebTable Automation", function(){
		
		browser.get("http://www.way2automation.com/angularjs-protractor/banking/#/manager/list");
		
		browser.sleep(5000);
		// get rows 
		var rows = element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer'));
		
		element.all(by.repeater('cust in Customers | orderBy:sortType:sortReverse | filter:searchCustomer')).count().then(function(val){
			console.log("Total Row Count is: "+val);
		})
		// get cell values
		
		rows.each(function(row){
			
			let cells = row.$$('td');
			cells.get(0).getText().then(function(text){
				console.log("First Name: "+text);
				if(text=='Ron'){
					cells.get(4).$('button').click();
				}
			})
		})

		browser.sleep(10000);
						
	})
	
})