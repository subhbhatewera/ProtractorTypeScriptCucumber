import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class payment{
    cardNumberField:ElementFinder;
    nameField:ElementFinder;
    expirationDateField:ElementFinder;
    securityCodeField:ElementFinder;
    payBtn:ElementFinder;
    frames:ElementArrayFinder;

    constructor(){
        this.cardNumberField=element(by.css("[id='number']"));
        this.nameField=element(by.css("[placeholder*='Name on']"));
        this.expirationDateField=element(by.css("[placeholder*='Expiration']"));
        this.securityCodeField=element(by.css("[placeholder*='Security']"));
        this.payBtn=element(by.css("continue_button"));
        this.frames = element.all(by.tagName("iframe"));
    }

    async getFramesCount(){
      this.frames.count().then((numberofFrames)=>{
          console.log("number of frames are =>" +numberofFrames)
      })
    }

    async enterCardNumber(cardNumber:string){
        await browser.switchTo().frame(element(by.css("[id*='card-fields-number']")).getWebElement());
        await this.cardNumberField.sendKeys(cardNumber);              
    }

    async enterName(nameOnCard:string){
        let EC = browser.ExpectedConditions;
       await browser.sleep(2000);
       await browser.switchTo().defaultContent();
       await browser.sleep(2000);
       await browser.switchTo().frame(element(by.css("iframe[id*='card-fields-name']")).getWebElement());
       browser.wait(EC.elementToBeClickable(this.nameField),15000);
       await this.cardNumberField.sendKeys(nameOnCard);
    }

    async enterExpirationDate(expirationDate:number){
        await browser.switchTo().frame(element(by.css("[id*='card-fields-expiry']")).getWebElement());
        await this.expirationDateField.sendKeys(expirationDate);
    }

    async enterSecutiryCode(secutiryCode:number){
        await  browser.switchTo().frame(element(by.css("[id*='card-fields-expiry']")).getWebElement());
        await this.securityCodeField.sendKeys(secutiryCode);
    }

    async clickOnPayNowBtn(){
        browser.switchTo().defaultContent;
        await this.payBtn.click();
    }
}