import { by, element, ElementFinder } from "protractor";

export class checkout{
    checkoutBtn:ElementFinder;
    updateBtn:ElementFinder;

    constructor(){
        this.checkoutBtn=element(by.css("[name='checkout']"));
        this.updateBtn=element(by.css("[class*='cart__update--large']"));
    }
}