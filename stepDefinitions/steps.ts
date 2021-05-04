import {Given, When, Then} from '@cucumber/cucumber'
import { browser, element, by } from 'protractor';
import { calculator } from '../pageObjects/calculator';
import chai from "chai" ;

let cal = new calculator();
let expect = chai.expect;

Given('Open {string} Webpage', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    if(string=="Super Calculator"){
        await browser.get("http://juliemr.github.io/protractor-demo/"); 
    }
    else if(string=="Angular"){
        await browser.get("https://angularjs.org/"); 
    }
  });

  When('User enter numbers {string} and {string}', async (string, string2)=> {
    // Write code here that turns the phrase above into concrete actions
    await cal.firstEditBox.sendKeys(string);
    await cal.secondEditBOx.sendKeys(string2);
    await cal.goBtn.click();
  }); 
  
  Then('Result will display as {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
        const result = await cal.resultItem.getText();
        expect(result).to.equal(string);

  });

  When('User click on new angular app link', async ()=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.linkText("angular.io")).click();
  });

  
  Then('New Angular web page should display and enter {string}', async (string)=> {
    // Write code here that turns the phrase above into concrete actions
    await element(by.css("[placeholder='Search']")).sendKeys(string);
  });