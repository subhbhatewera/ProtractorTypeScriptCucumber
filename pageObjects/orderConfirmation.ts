import { by, element, ElementFinder } from "protractor";

export class orderConfirmation{
    orderProcessingMsg:ElementFinder;
    orderNumber:ElementFinder;

    constructor(){
        this.orderProcessingMsg=element(by.css("[class*='page-overlay__title']"));
        this.orderNumber=element(by.css("[class='os-order-number']"));
    }

}