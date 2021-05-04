import { by, element, ElementFinder } from "protractor";

export class addToCart{
    addToCartBtn:ElementFinder

    constructor(){
        this.addToCartBtn=element(by.css("button[id*='Add']"));
    }
}