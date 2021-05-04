import { Before, After, Status } from "@cucumber/cucumber";
import { browser } from "protractor";

Before({tags:'@Calculator'},()=>{
    browser.manage().window().maximize();
    console.log("Start execution of Calculator test cases")
});

After({tags:'@Calculator'},()=>{
    console.log("End of execution of Calculator test cases");
});

Before({tags:'@Angular'},()=>{
    console.log("Start execution of Angular test cases")
});

After({tags:'@Angular'},()=>{
    console.log("End of execution of Angular test cases");
});

After(async function (scenario){
    if(scenario.result.status==Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
})