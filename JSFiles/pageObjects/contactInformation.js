"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contactInformation = void 0;
const protractor_1 = require("protractor");
class contactInformation {
    constructor() {
        this.continueBtn = protractor_1.element(protractor_1.by.css("#continue_button"));
        this.giftCardField = protractor_1.element(protractor_1.by.css("#checkout_reduction_code"));
        this.applyBtn = protractor_1.element(protractor_1.by.css(".field__input-btn"));
        this.tagWrapper = protractor_1.element(protractor_1.by.css("[class='tag__wrapper']"));
    }
}
exports.contactInformation = contactInformation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udGFjdEluZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvY29udGFjdEluZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLGtCQUFrQjtJQU0zQjtRQUNJLElBQUksQ0FBQyxXQUFXLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUMsQ0FBQztRQUNyRCxJQUFJLENBQUMsYUFBYSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDLENBQUM7UUFDL0QsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxVQUFVLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0NBQ0o7QUFaRCxnREFZQyJ9