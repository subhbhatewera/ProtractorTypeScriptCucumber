import { element, ElementFinder, by } from "protractor";

export class giliHomepage{

    mensPantsLink:ElementFinder;
    mensTopsLink:ElementFinder;
    womensPantsLink:ElementFinder;
    womensTopsLink:ElementFinder;
    outwearLink:ElementFinder;
    skirtsLink:ElementFinder;
    scarvesLink:ElementFinder;
    cartIcon:ElementFinder;
    loginLink:ElementFinder;

    constructor(){
        this.mensPantsLink=element(by.linkText("Men's Pants"));
        this.mensTopsLink=element(by.linkText("Men's Tops"));
        this.womensPantsLink=element(by.linkText("Women's Pants"));
        this.womensTopsLink=element(by.linkText("Women's Tops"));
        this.outwearLink=element(by.linkText("Outerwear"));
        this.skirtsLink=element(by.linkText("Skirts"));
        this.scarvesLink=element(by.linkText("Scarves"));
        this.cartIcon=element(by.css(".site-header__cart"));
        this.loginLink=element(by.linkText("Log in"));
    }

}