import { by, element, ElementFinder } from "protractor";

export class calculator{

    firstEditBox:ElementFinder;
    secondEditBOx:ElementFinder;
    goBtn:ElementFinder;
    resultItem:ElementFinder;

    constructor(){
        this.firstEditBox = element(by.model("first"));
        this.secondEditBOx = element(by.model("second"));
        this.goBtn = element(by.buttonText("Go!"));
        this.resultItem = element(by.repeater("result in memory")).element(by.css("td:nth-child(3)"));
    }
}