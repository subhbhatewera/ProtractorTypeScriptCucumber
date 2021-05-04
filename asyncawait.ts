import { browser, element, by } from "protractor"

describe("Async Await Concept", ()=>{

    it("Open Super Calculator App and Validate Title", async()=>{
        await browser.get("http://juliemr.github.io/protractor-demo/");
        expect(browser.getTitle()).toEqual("Super Calculator");
    })

    it("Add Two Numbers", async()=>{
        await element(by.model("first")).sendKeys(5);
        await element(by.model("second")).sendKeys(26);
        await element(by.buttonText("Go!")).click();

        let result:string = ' ';
        element(by.css("h2")).getText().then((result)=>{
            console.log(result);
        })
    })
})