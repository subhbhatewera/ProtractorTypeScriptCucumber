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
        this.expirationDateField = protractor_1.element(protractor_1.by.css("[id='expiry']"));
        this.securityCodeField = protractor_1.element(protractor_1.by.css("[placeholder*='Security']"));
        this.payBtn = protractor_1.element(protractor_1.by.css("#continue_button"));
    }
    enterCardNumber(cardNumber) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("iframe[id*='card-fields-number']")).getWebElement());
            //Entering data one by one char becuase all the characters are not entered in one go
            for (let i = 0; i < cardNumber.length; i++) {
                let char = cardNumber.charAt(i);
                yield protractor_1.browser.actions().mouseMove(this.cardNumberField).click().sendKeys(char).perform();
            }
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterName(nameOnCard) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("iframe[id*='card-fields-name']")).getWebElement());
            yield this.nameField.sendKeys(nameOnCard);
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterExpirationDate(expirationDate) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-expiry']")).getWebElement());
            //Entering data one by one char becuase all the characters are not entered in one go
            for (let i = 0; i < expirationDate.length; i++) {
                let char = expirationDate.charAt(i);
                yield protractor_1.browser.actions().mouseMove(this.expirationDateField).click().sendKeys(char).perform();
            }
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    enterSecutiryCode(secutiryCode) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.switchTo().frame(protractor_1.element(protractor_1.by.css("[id*='card-fields-verification']")).getWebElement());
            yield this.securityCodeField.sendKeys(secutiryCode);
            yield protractor_1.browser.switchTo().defaultContent();
        });
    }
    clickOnPayNowBtn() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.payBtn.click();
        });
    }
}
exports.payment = payment;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGF5bWVudEluZm9ybWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvcGF5bWVudEluZm9ybWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRztBQUVqRyxNQUFhLE9BQU87SUFRaEI7UUFDSSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBCQUEwQixDQUFDLENBQUMsQ0FBQztRQUMzRCxJQUFJLENBQUMsbUJBQW1CLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7UUFDMUQsSUFBSSxDQUFDLGlCQUFpQixHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE1BQU0sR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFSyxlQUFlLENBQUMsVUFBaUI7O1lBQ25DLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3BHLG9GQUFvRjtZQUNwRixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUcsRUFBQztnQkFDekMsSUFBSSxJQUFJLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO2FBQzVGO1lBQ0QsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLGNBQWMsRUFBRSxDQUFDO1FBQzlDLENBQUM7S0FBQTtJQUVLLFNBQVMsQ0FBQyxVQUFpQjs7WUFDOUIsTUFBTSxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDLGFBQWEsRUFBRSxDQUFDLENBQUM7WUFDbEcsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUMxQyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDN0MsQ0FBQztLQUFBO0lBRUssbUJBQW1CLENBQUMsY0FBcUI7O1lBQzNDLE1BQU0sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQzlGLG9GQUFvRjtZQUNwRixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRyxDQUFDLEdBQUcsY0FBYyxDQUFDLE1BQU0sRUFBRyxDQUFDLEVBQUcsRUFBQztnQkFDN0MsSUFBSSxJQUFJLEdBQUcsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDcEMsTUFBTSxvQkFBTyxDQUFDLE9BQU8sRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUM7YUFDaEc7WUFDRCxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBRUssaUJBQWlCLENBQUMsWUFBbUI7O1lBQ3ZDLE1BQU8sb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLENBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtDQUFrQyxDQUFDLENBQUMsQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO1lBQ3JHLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNwRCxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxFQUFFLENBQUM7UUFDOUMsQ0FBQztLQUFBO0lBRUssZ0JBQWdCOztZQUNsQixNQUFNLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDOUIsQ0FBQztLQUFBO0NBQ0o7QUFuREQsMEJBbURDIn0=