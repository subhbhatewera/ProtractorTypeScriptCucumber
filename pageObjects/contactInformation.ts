import { by, element, ElementFinder } from "protractor";

export class contactInformation{
    continueBtn:ElementFinder;
    giftCardField:ElementFinder;
    applyBtn:ElementFinder;
    tagWrapper:ElementFinder;

    constructor(){
        this.continueBtn=element(by.css("#continue_button"));
        this.giftCardField=element(by.css("#checkout_reduction_code"));
        this.applyBtn=element(by.css(".field__input-btn"));
        this.tagWrapper=element(by.css("[class='tag__wrapper']"));
    }
}