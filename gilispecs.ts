import { browser, element, by } from "protractor"
import { addToCart } from "./pageObjects/addToCart";
import { checkout } from "./pageObjects/checkout";
import { contactInformation } from "./pageObjects/contactInformation";
import { giliHomepage } from "./pageObjects/giliHomepage";
import {loginpage} from "./pageObjects/loginpage";
import { mentsPants } from "./pageObjects/mensPants";
import { myAccount } from "./pageObjects/myAccount";
import { orderConfirmation } from "./pageObjects/orderConfirmation";
import { payment } from "./pageObjects/paymentInformation";
import { shippingDetails } from "./pageObjects/shipping";

describe("Gili Products Automation Suite", ()=>{

        let home = new giliHomepage();
        let login = new loginpage();
        let myacc = new myAccount();
        let mpant = new mentsPants();
        let atcart = new addToCart();
        let cout = new checkout();
        let contact = new contactInformation();
        let ship = new shippingDetails();
        let pay = new payment();
        let ordeconf = new orderConfirmation();
        let EC = browser.ExpectedConditions;

    it("Open app and validate title", async()=>{
        browser.waitForAngularEnabled(false);
        await browser.get("https://gili-products.myshopify.com/");
        browser.manage().window().maximize();
        browser.getTitle().then((text)=>{
            console.log(text);
        })
        expect(browser.getTitle()).toEqual("Gili-Products – Gili Products");
    })

    it("Do login", async()=>{
        await home.loginLink.click();
        await login.emailField.sendKeys("LindaJPrice@fleckens.hu");
        await login.pwdField.sendKeys("webgility");
        await login.signinBtn.click();
        expect(myacc.myAccountHeading.getText()).toEqual("My Account");
    })

    it("Add product from Men's Pants", async()=>{        
        await home.mensPantsLink.click();
        mpant.selectProduct("Flying Machine Slim Fit Jeans");
        await atcart.addToCartBtn.click();
        await cout.checkoutBtn.click();
    })

    it("Place Order", async()=>{
        await contact.continueBtn.click();
        browser.wait(EC.invisibilityOf(ship.shippingSpinner),10000);
        ship.selectShipping("Gili");        
        await ship.continuePaymentBtn.click();
      //  browser.wait(EC.visibilityOf(pay.cardNumberField), 5000);    
        console.log(pay.getFramesCount());
        await pay.enterCardNumber("5555555555554444");        
        await pay.enterName("Linda");
        pay.enterExpirationDate(1223);
        pay.enterSecutiryCode(961);
        pay.clickOnPayNowBtn();
    })

 /*   it("Get Order Number", async()=>{
        expect (ordeconf.orderProcessingMsg.getText()).toEqual("Your order's being processed.");
        await ordeconf.orderProcessingMsg;
        (ordeconf.orderProcessingMsg.getText()).then((text)=>{
            console.log(text);
        })
        
    })*/
})