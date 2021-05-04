import { browser } from "protractor"
import { calculator } from "./pageObjects/calculator";

describe("Calculator Test Suite", ()=>{

    it("Validate title", async()=>{
        await browser.get("http://juliemr.github.io/protractor-demo/");
        await browser.manage().window().maximize();
        expect(browser.getTitle()).toEqual("Super Calculator");
    })

    it("Add two numbers", async()=>{
        let cal = new calculator();
        await cal.firstEditBox.sendKeys(8);
        await cal.secondEditBOx.sendKeys(6);
        await cal.goBtn.click();
        cal.resultItem.getText().then((result)=>{
            console.log(result);
        })
    })
})