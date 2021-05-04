import { Given, Then, When } from "@cucumber/cucumber";
import { browser } from "protractor";
import { giliHomepage } from "../pageObjects/giliHomepage";
import { loginpage } from "../pageObjects/loginpage";
import { myAccount } from "../pageObjects/myAccount";
import chai from "chai" ;

let home = new giliHomepage();
let login = new loginpage();
let myacc = new myAccount();
let expect = chai.expect;

Given('Gili Products Homepage is open', async ()=> {
    browser.waitForAngularEnabled(false);
    await browser.get("https://gili-products.myshopify.com/");    
    await browser.manage().window().maximize();
  });

  When('User click on login link', async ()=> {
    await home.loginLink.click();
  });

  When('Enter {string}, {string} and click on signin button', async (string, string2)=> {
    await login.emailField.sendKeys(string);
    await login.pwdField.sendKeys(string2);
    await login.signinBtn.click();
  });

  Then('My Account page should display', async ()=> {
    await myacc.myAccountHeading.getText().then((text)=>{
        console.log(text);
        expect(text).to.equal("My Account");
    })
    await myacc.logOutLink.click();
    
  });