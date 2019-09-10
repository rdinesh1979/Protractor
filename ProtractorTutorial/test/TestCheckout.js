describe("Verification of eCommerce Website Functionality", function() {
	var Shop_Page =  require('../page/ShopPage.js');
	var dataValue = require("../testdata/test_data.js");
	it("verify CheckoutButton item count in Products Page", function(){
		browser.get(dataValue.Datadriven.siteURL);
		browser.sleep(5000);
		Shop_Page.selectProduct(1);
		Shop_Page.selectProduct(3);
	    element(by.xpath("//div[@id='navbarResponsive']/ul/li/a")).getText().then(function(txt){
		   console.log("checkoutCartButton Item Count: "+txt);
		   expect(txt).toContain("2");
		   browser.sleep(3000);
	   })
	  
	})
	var checkout_Page = require('../page/CheckoutPage.js');
	it("verify item count in Checkout Page", function(){
		
		Shop_Page.ClickCheckoutButton();
		checkout_Page.getCheckoutItemsCount().then(function(itemcount){
			console.log("Number of Items in Checkout Page is: "+itemcount);
			expect(itemcount).toEqual(2);
			browser.sleep(3000);
		})
		
	})
	it("verify each item Price in Checkout Page", function(){
		
		
				checkout_Page.getItemPrice(1).then(function(price){
				console.log("Price of the Product is: "+price);
				expect(price).toContain(dataValue.Datadriven.FirstProduct.price);
			})
			browser.sleep(3000);
		})
		
	it("remove item from Cart in Checkout Page" , function(){
		
		
		checkout_Page.removeItemfromCart(2); //Removing the Second item from cart.
		checkout_Page.getCheckoutItemsCount().then(function(itemcount){
			console.log("Number of Items in Checkout Page is: "+itemcount);
			expect(itemcount).toEqual(1);
			browser.sleep(3000);
	})
	
	})	
	
})