"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const addToCart_1 = require("./pageObjects/addToCart");
const checkout_1 = require("./pageObjects/checkout");
const contactInformation_1 = require("./pageObjects/contactInformation");
const giliHomepage_1 = require("./pageObjects/giliHomepage");
const loginpage_1 = require("./pageObjects/loginpage");
const mensPants_1 = require("./pageObjects/mensPants");
const myAccount_1 = require("./pageObjects/myAccount");
const orderConfirmation_1 = require("./pageObjects/orderConfirmation");
const paymentInformation_1 = require("./pageObjects/paymentInformation");
const shipping_1 = require("./pageObjects/shipping");
describe("Gili Products Automation Suite", () => {
    let home = new giliHomepage_1.giliHomepage();
    let login = new loginpage_1.loginpage();
    let myacc = new myAccount_1.myAccount();
    let mpant = new mensPants_1.mentsPants();
    let atcart = new addToCart_1.addToCart();
    let cout = new checkout_1.checkout();
    let contact = new contactInformation_1.contactInformation();
    let ship = new shipping_1.shippingDetails();
    let pay = new paymentInformation_1.payment();
    let ordeconf = new orderConfirmation_1.orderConfirmation();
    let EC = protractor_1.browser.ExpectedConditions;
    it("Open app and validate title", () => __awaiter(void 0, void 0, void 0, function* () {
        protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get("https://gili-products.myshopify.com/");
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.getTitle().then((text) => {
            console.log(text);
        });
        expect(protractor_1.browser.getTitle()).toEqual("Gili-Products – Gili Products");
    }));
    it("Do login", () => __awaiter(void 0, void 0, void 0, function* () {
        yield home.loginLink.click();
        yield login.emailField.sendKeys("LindaJPrice@fleckens.hu");
        yield login.pwdField.sendKeys("webgility");
        yield login.signinBtn.click();
        expect(myacc.myAccountHeading.getText()).toEqual("My Account");
    }));
    it("Add product from Men's Pants", () => __awaiter(void 0, void 0, void 0, function* () {
        yield home.mensPantsLink.click();
        mpant.selectProduct("Flying Machine Slim Fit Jeans");
        yield atcart.addToCartBtn.click();
        yield cout.checkoutBtn.click();
    }));
    it("Place Order", () => __awaiter(void 0, void 0, void 0, function* () {
        yield contact.continueBtn.click();
        protractor_1.browser.wait(EC.invisibilityOf(ship.shippingSpinner), 10000);
        ship.selectShipping("Gili");
        yield ship.continuePaymentBtn.click();
        //  browser.wait(EC.visibilityOf(pay.cardNumberField), 5000);    
        console.log(pay.getFramesCount());
        yield pay.enterCardNumber("5555555555554444");
        yield pay.enterName("Linda");
        pay.enterExpirationDate(1223);
        pay.enterSecutiryCode(961);
        pay.clickOnPayNowBtn();
    }));
    /*   it("Get Order Number", async()=>{
           expect (ordeconf.orderProcessingMsg.getText()).toEqual("Your order's being processed.");
           await ordeconf.orderProcessingMsg;
           (ordeconf.orderProcessingMsg.getText()).then((text)=>{
               console.log(text);
           })
           
       })*/
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lsaXNwZWNzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vZ2lsaXNwZWNzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsMkNBQWlEO0FBQ2pELHVEQUFvRDtBQUNwRCxxREFBa0Q7QUFDbEQseUVBQXNFO0FBQ3RFLDZEQUEwRDtBQUMxRCx1REFBa0Q7QUFDbEQsdURBQXFEO0FBQ3JELHVEQUFvRDtBQUNwRCx1RUFBb0U7QUFDcEUseUVBQTJEO0FBQzNELHFEQUF5RDtBQUV6RCxRQUFRLENBQUMsZ0NBQWdDLEVBQUUsR0FBRSxFQUFFO0lBRXZDLElBQUksSUFBSSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO0lBQzlCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzVCLElBQUksS0FBSyxHQUFHLElBQUksc0JBQVUsRUFBRSxDQUFDO0lBQzdCLElBQUksTUFBTSxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzdCLElBQUksSUFBSSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0lBQzFCLElBQUksT0FBTyxHQUFHLElBQUksdUNBQWtCLEVBQUUsQ0FBQztJQUN2QyxJQUFJLElBQUksR0FBRyxJQUFJLDBCQUFlLEVBQUUsQ0FBQztJQUNqQyxJQUFJLEdBQUcsR0FBRyxJQUFJLDRCQUFPLEVBQUUsQ0FBQztJQUN4QixJQUFJLFFBQVEsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7SUFDdkMsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztJQUV4QyxFQUFFLENBQUMsNkJBQTZCLEVBQUUsR0FBTyxFQUFFO1FBQ3ZDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO1FBQzFELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUMsRUFBRTtZQUM1QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFBO1FBQ0YsTUFBTSxDQUFDLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsK0JBQStCLENBQUMsQ0FBQztJQUN4RSxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLFVBQVUsRUFBRSxHQUFPLEVBQUU7UUFDcEIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sS0FBSyxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMzRCxNQUFNLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLE1BQU0sS0FBSyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixNQUFNLENBQUMsS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ25FLENBQUMsQ0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsOEJBQThCLEVBQUUsR0FBTyxFQUFFO1FBQ3hDLE1BQU0sSUFBSSxDQUFDLGFBQWEsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQyxLQUFLLENBQUMsYUFBYSxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDckQsTUFBTSxNQUFNLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUNuQyxDQUFDLENBQUEsQ0FBQyxDQUFBO0lBRUYsRUFBRSxDQUFDLGFBQWEsRUFBRSxHQUFPLEVBQUU7UUFDdkIsTUFBTSxPQUFPLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ2xDLG9CQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxFQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUIsTUFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDeEMsaUVBQWlFO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLGNBQWMsRUFBRSxDQUFDLENBQUM7UUFDbEMsTUFBTSxHQUFHLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDOUMsTUFBTSxHQUFHLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzdCLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixHQUFHLENBQUMsaUJBQWlCLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsR0FBRyxDQUFDLGdCQUFnQixFQUFFLENBQUM7SUFDM0IsQ0FBQyxDQUFBLENBQUMsQ0FBQTtJQUVMOzs7Ozs7O1dBT087QUFDUixDQUFDLENBQUMsQ0FBQSJ9