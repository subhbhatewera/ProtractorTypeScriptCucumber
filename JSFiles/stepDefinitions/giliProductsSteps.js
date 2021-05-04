"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const giliHomepage_1 = require("../pageObjects/giliHomepage");
const loginpage_1 = require("../pageObjects/loginpage");
const myAccount_1 = require("../pageObjects/myAccount");
const chai_1 = __importDefault(require("chai"));
let home = new giliHomepage_1.giliHomepage();
let login = new loginpage_1.loginpage();
let myacc = new myAccount_1.myAccount();
let expect = chai_1.default.expect;
cucumber_1.Given('Gili Products Homepage is open', () => __awaiter(void 0, void 0, void 0, function* () {
    protractor_1.browser.waitForAngularEnabled(false);
    yield protractor_1.browser.get("https://gili-products.myshopify.com/");
    yield protractor_1.browser.manage().window().maximize();
}));
cucumber_1.When('User click on login link', () => __awaiter(void 0, void 0, void 0, function* () {
    yield home.loginLink.click();
}));
cucumber_1.When('Enter {string}, {string} and click on signin button', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield login.emailField.sendKeys(string);
    yield login.pwdField.sendKeys(string2);
    yield login.signinBtn.click();
}));
cucumber_1.Then('My Account page should display', () => __awaiter(void 0, void 0, void 0, function* () {
    yield myacc.myAccountHeading.getText().then((text) => {
        console.log(text);
        expect(text).to.equal("My Account");
    });
    yield myacc.logOutLink.click();
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2lsaVByb2R1Y3RzU3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zdGVwRGVmaW5pdGlvbnMvZ2lsaVByb2R1Y3RzU3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQXFDO0FBQ3JDLDhEQUEyRDtBQUMzRCx3REFBcUQ7QUFDckQsd0RBQXFEO0FBQ3JELGdEQUF5QjtBQUV6QixJQUFJLElBQUksR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztBQUM5QixJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLEtBQUssR0FBRyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztBQUM1QixJQUFJLE1BQU0sR0FBRyxjQUFJLENBQUMsTUFBTSxDQUFDO0FBRXpCLGdCQUFLLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBQzlDLG9CQUFPLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDckMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDO0lBQzFELE1BQU0sb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztBQUM3QyxDQUFDLENBQUEsQ0FBQyxDQUFDO0FBRUgsZUFBSSxDQUFDLDBCQUEwQixFQUFFLEdBQVEsRUFBRTtJQUN6QyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFFLENBQUM7QUFDL0IsQ0FBQyxDQUFBLENBQUMsQ0FBQztBQUVILGVBQUksQ0FBQyxxREFBcUQsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUMsRUFBRTtJQUNuRixNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3hDLE1BQU0sS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDdkMsTUFBTSxLQUFLLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0FBQ2hDLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxlQUFJLENBQUMsZ0NBQWdDLEVBQUUsR0FBUSxFQUFFO0lBQy9DLE1BQU0sS0FBSyxDQUFDLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksRUFBQyxFQUFFO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDbEIsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQyxDQUFDLENBQUE7SUFDRixNQUFNLEtBQUssQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7QUFFakMsQ0FBQyxDQUFBLENBQUMsQ0FBQyJ9