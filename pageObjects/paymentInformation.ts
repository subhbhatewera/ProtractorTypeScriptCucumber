import { browser, by, element, ElementArrayFinder, ElementFinder, WebElement } from "protractor";

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
        this.expirationDateField=element(by.css("[id='expiry']"));
        this.securityCodeField=element(by.css("[placeholder*='Security']"));
        this.payBtn=element(by.css("#continue_button"));
    }
    
    async enterCardNumber(cardNumber:string){
        await browser.switchTo().frame(element(by.css("iframe[id*='card-fields-number']")).getWebElement());
        //Entering data one by one char becuase all the characters are not entered in one go
        for(let i = 0 ; i < cardNumber.length ; i ++){           
            let char = cardNumber.charAt(i);
            await browser.actions().mouseMove(this.cardNumberField).click().sendKeys(char).perform();                  
        }       
        await browser.switchTo().defaultContent();
    }

    async enterName(nameOnCard:string){        
       await browser.switchTo().frame(element(by.css("iframe[id*='card-fields-name']")).getWebElement());
       await this.nameField.sendKeys(nameOnCard);
       await browser.switchTo().defaultContent();
    }

    async enterExpirationDate(expirationDate:string){
        await browser.switchTo().frame(element(by.css("[id*='card-fields-expiry']")).getWebElement()); 
        //Entering data one by one char becuase all the characters are not entered in one go
        for(let i = 0 ; i < expirationDate.length ; i ++){           
            let char = expirationDate.charAt(i);
            await browser.actions().mouseMove(this.expirationDateField).click().sendKeys(char).perform();                  
        } 
        await browser.switchTo().defaultContent();
    }

    async enterSecutiryCode(secutiryCode:number){
        await  browser.switchTo().frame(element(by.css("[id*='card-fields-verification']")).getWebElement());
        await this.securityCodeField.sendKeys(secutiryCode);
        await browser.switchTo().defaultContent();
    }

    async clickOnPayNowBtn(){        
        await this.payBtn.click();
    }
}