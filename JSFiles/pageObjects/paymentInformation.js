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
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment = void 0;
const protractor_1 = require("protractor");
class payment {
    constructor() {
        this.cardNumberField = protractor_1.element(protractor_1.by.css("[id='number']"));
        this.nameField = protractor_1.element(protractor_1.by.css("[placeholder*='Name on']"));
        this.expirationDateField = protractor_1.element(protractor_1.by.css("[placeholder*='Expiration']"));
        this.securityCodeField = protractor_1.element(protractor_1.by.css("[placeholder*='Security']"));
        this.payBtn = protractor_1.element(protractor_1.by.css("continue_button"));
        this.frames = protractor_1.element.all(protractor_1.by.tagName("iframe"));
    }
    getFramesCount() {
        return __awaiter(this, void 0, void 0, function* () {
            this.frames.count().then((numberofFrames) => {
                console.log("number of frames are =>" + numberofFrames);
            });
        });
    }
    enterCardNumber(cardNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-number']")).getWebElement());
            yield this.cardNumberField.sendKeys(cardNumber);
        });
    }
    enterName(nameOnCard) {
        return __awaiter(this, void 0, void 0, function* () {
            let EC = protractor_1.browser.ExpectedConditions;
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.switchTo().defaultContent();
            yield protractor_1.browser.sleep(2000);
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("iframe[id*='card-fields-name']")).getWebElement());
            protractor_1.browser.wait(EC.elementToBeClickable(this.nameField), 15000);
            yield this.cardNumberField.sendKeys(nameOnCard);
        });
    }
    enterExpirationDate(expirationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-expiry']")).getWebElement());
            yield this.expirationDateField.sendKeys(expirationDate);
        });
    }
    enterSecutiryCode(secutiryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-expiry']")).getWebElement());
            yield this.securityCodeField.sendKeys(secutiryCode);
        });
    }
    clickOnPayNowBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.switchTo().defaultContent;
            yield this.payBtn.click();
        });
    }
}
exports.payment = payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudEluZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcGF5bWVudEluZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFxRjtBQUVyRixNQUFhLE9BQU87SUFRaEI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztRQUN4RSxJQUFJLENBQUMsaUJBQWlCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDJCQUEyQixDQUFDLENBQUMsQ0FBQztRQUNwRSxJQUFJLENBQUMsTUFBTSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVLLGNBQWM7O1lBQ2xCLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsY0FBYyxFQUFDLEVBQUU7Z0JBQ3ZDLE9BQU8sQ0FBQyxHQUFHLENBQUMseUJBQXlCLEdBQUUsY0FBYyxDQUFDLENBQUE7WUFDMUQsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0tBQUE7SUFFSyxlQUFlLENBQUMsVUFBaUI7O1lBQ25DLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzlGLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsQ0FBQztLQUFBO0lBRUssU0FBUyxDQUFDLFVBQWlCOztZQUM3QixJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO1lBQ3JDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1lBQzFDLE1BQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDMUIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDbEcsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUM1RCxNQUFNLElBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELENBQUM7S0FBQTtJQUVLLG1CQUFtQixDQUFDLGNBQXFCOztZQUMzQyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyw0QkFBNEIsQ0FBQyxDQUFDLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztZQUM5RixNQUFNLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsWUFBbUI7O1lBQ3ZDLE1BQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQy9GLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUN4RCxDQUFDO0tBQUE7SUFFSyxnQkFBZ0I7O1lBQ2xCLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDO1lBQ2xDLE1BQU0sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUM5QixDQUFDO0tBQUE7Q0FDSjtBQXBERCwwQkFvREMifQ==