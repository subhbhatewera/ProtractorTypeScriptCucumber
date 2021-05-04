import { ElementFinder, element, by } from "protractor";

export class loginpage{
    emailField:ElementFinder;
    pwdField:ElementFinder;
    signinBtn:ElementFinder;

    constructor(){
        this.emailField=element(by.css("#CustomerEmail"));
        this.pwdField=element(by.css("#CustomerPassword"));
        this.signinBtn=element(by.css("[value='Sign In']"));
    }
}