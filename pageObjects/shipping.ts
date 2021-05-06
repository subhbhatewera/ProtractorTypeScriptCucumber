import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class shippingDetails{
    radioBtns:ElementArrayFinder;
    continuePaymentBtn:ElementFinder;
    shippingSpinner:ElementFinder;    

    constructor(){
        this.radioBtns=element.all(by.css("[class='radio-wrapper'] label span[class*='primary']"));
        this.continuePaymentBtn=element(by.buttonText("Continue to payment"));
        this.shippingSpinner=element(by.css("svg[class*='spinner blank-slate']"));
    }

    async shipping(shipmethod:string){     
        this.radioBtns.getAttribute("data-shipping-method-label-title").then(async (temp)=>{            
            for(let i = 0 ; i < temp.length ; i++){
                if(temp[i].includes(shipmethod)){                    
                    console.log(temp[i]);                                     
                    await element.all(by.css("[class='radio__input']")).get(i).click();
                    break ;
                }
                else{
                    console.log(shipmethod+" option is not available so Order will be placed using default shipping option");
                }
            }
       })        
    }
}