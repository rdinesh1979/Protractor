describe("Calculation History", function() {
	
var firstNumber = element(by.model('first'));
var options = element.all(by.tagName('option'))  
var secondNumber = element(by.model('second'));
var goButton = element(by.id('gobutton'));
var history = element.all(by.tagName('tr'));
function selectByVisibleText(visibleText){
    console.log("Selecting element based text  : "+visibleText)
    // select the option
    this.element(by.xpath("//option[text()='"+visibleText+"']")).click()
}
function add(a,b){
	firstNumber.sendKeys(a);
	selectByVisibleText('+');
	secondNumber.sendKeys(b);
	goButton.click();
}

beforeEach(function(){
	browser.get("http://juliemr.github.io/protractor-demo/");
});

it("Should save a history", function(){
	
	add(1,2);
	add(3,4);
	expect(history.count()).toEqual(3);
	add(5,6);
	expect(history.count()).toEqual(4);
});

	
});