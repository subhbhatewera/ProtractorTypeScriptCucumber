import { by, element, ElementFinder } from "protractor";

export class myAccount{
    myAccountHeading:ElementFinder;
    logOutLink:ElementFinder;
    customerDetails:ElementFinder;

    constructor(){
        this.myAccountHeading=element(by.css("h1"));
        this.logOutLink=element(by.linkText("Log out"));
        this.customerDetails=element(by.xpath("(//div //p)[1]"));
    }
}