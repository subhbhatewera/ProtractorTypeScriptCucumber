import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class shippingDetails{
    radioBtns:ElementArrayFinder;
    continuePaymentBtn:ElementFinder;
    shippingSpinner:ElementFinder;    

    constructor(){
        this.radioBtns=element.all(by.css("[class='radio-wrapper']"));
        this.continuePaymentBtn=element(by.buttonText("Continue to payment"));
        this.shippingSpinner=element(by.css("svg[class*='spinner blank-slate']"));
    }

    async selectShipping(shipmethod:string){
            await this.radioBtns.each(()=>{
            this.radioBtns.getAttribute("data-shipping-method").then((shipping)=>{
                if(shipping.includes(shipmethod)){
                    element(by.css("[class='radio__input']")).click();
                }
            })

        })
    }
}