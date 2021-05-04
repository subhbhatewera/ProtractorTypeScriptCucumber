"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myAccount = void 0;
const protractor_1 = require("protractor");
class myAccount {
    constructor() {
        this.myAccountHeading = protractor_1.element(protractor_1.by.css("h1"));
        this.logOutLink = protractor_1.element(protractor_1.by.linkText("Log out"));
        this.customerDetails = protractor_1.element(protractor_1.by.xpath("(//div //p)[1]"));
    }
}
exports.myAccount = myAccount;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXlBY2NvdW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbXlBY2NvdW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFNBQVM7SUFLbEI7UUFDSSxJQUFJLENBQUMsZ0JBQWdCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7SUFDN0QsQ0FBQztDQUNKO0FBVkQsOEJBVUMifQ==