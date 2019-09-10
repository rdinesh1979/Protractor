describe('Protractor Dropdown Element Demo',function() {  

function Calc(a,b,c){

element(by.model("first")).sendKeys(a);
element(by.model("second")).sendKeys(b);

element.all(by.tagName("option")).each(function(item){

	item.getAttribute("value").then(function(values)

{

if(values==c)
{
item.click();
//element(by.model("operator").element(by.css("option:nth-child(4)"))click();  // selection the value by index = 4 in dropdown list.
}

})
})

element(by.id("gobutton")).click();
}

it('Validation of Calculator Dropdown',function() {

/*browser.waitForAngularEnabled(false);
browser.get("http://google.com");//non angular apps*/

browser.get('http://juliemr.github.io/protractor-demo/');


Calc(3,5,"MULTIPLICATION");
Calc(3,5,"DIVISION");
Calc(3,5,"SUBTRACTION");
Calc(10,6,"ADDITION");
element.all(by.repeater("result in memory")).each(function(item)
{
item.element(by.css("td:nth-child(3)")).getText().then(function(text)
{
console.log("Result is :"+text);
})

})


})


})