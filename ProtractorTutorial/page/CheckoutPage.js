var CheckoutPage = function() {
	
	this.getCheckoutItemsCount = function(){
		
		return element.all(by.xpath("//div[@class='media-body']/h4/a")).count();
		
	};
	
	this.getItemPrice = function(i){
		
	return element(by.xpath("//table/tbody/tr["+i+"]/td[3]/strong")).getText();
		
	};
	
	this.removeItemfromCart = function(i){
		
		element(by.xpath("//table/tbody/tr["+i+"]/td[5]/button")).click();
		
	};
	

};
module.exports = new CheckoutPage();