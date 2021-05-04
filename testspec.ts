import {browser, element, by} from 'protractor'

describe("Calculator Test Suite", function(){

    let firstNumber = element(by.model("first"));
    let secondNumber = element(by.model("second"));
    let goButton = element(by.id("gobutton"));
    let dropDownOptions = element.all(by.tagName("option"));

    function openApp(){

        browser.get("http://juliemr.github.io/protractor-demo/");
        browser.manage().window().maximize();

    }

    function calculation(operand1:number, operand2:number, operation:string){
            firstNumber.sendKeys(operand1);
            secondNumber.sendKeys(operand2);
            dropDownOptions.each(function(item){
                item.getAttribute("value").then(function(value){
                    if(value==operation){
                        item.click();
                    }
                })
            })
            goButton.click();
    }

    it("Validate calculation on basis of given input", function(){
        openApp();
        calculation(5,8,"MULTIPLICATION");
    })


})