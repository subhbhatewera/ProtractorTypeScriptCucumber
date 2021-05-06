import { browser, by, element, ElementFinder } from "protractor";

export class orderConfirmation{
    orderProcessingMsg:ElementFinder;
    orderNumber:ElementFinder;

    constructor(){
        this.orderProcessingMsg=element(by.css("[class*='page-overlay__title']"));
        this.orderNumber=element(by.css("[class='os-order-number']"));
    }

    async getOrderNumber(){
        let EC = browser.ExpectedConditions;
        browser.wait(EC.visibilityOf(this.orderNumber), 10000);        
        this.orderNumber.getText().then((orderno)=>{
            console.log(orderno);
        })
    }

}