var ShopPage = function() {
	
	this.selectProduct = function(index){
		
		element.all(by.css("button[class='btn btn-info']")).get(index).click();
		
	};
	
	this.ClickCheckoutButton = function(){
		
		element(by.xpath("//div[@id='navbarResponsive']/ul/li/a")).click();
	}
};

module.exports = new ShopPage();