import { browser, by, element, ElementArrayFinder, ElementFinder } from "protractor";

export class mentsPants{
    products:ElementArrayFinder;

    constructor(){
        this.products=element.all(by.css(".h4"));
    }    

    async selectProduct(productName:string){
        await this.products.each((item)=>{
            item.getText().then((name)=>{
                if(name==productName){
                 console.log(name); 
                 item.click();                                
                }                
            })
        })
    }

}