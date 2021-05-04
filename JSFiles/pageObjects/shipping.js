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
exports.shippingDetails = void 0;
const protractor_1 = require("protractor");
class shippingDetails {
    constructor() {
        this.radioBtns = protractor_1.element.all(protractor_1.by.css("[class='radio-wrapper']"));
        this.continuePaymentBtn = protractor_1.element(protractor_1.by.buttonText("Continue to payment"));
        this.shippingSpinner = protractor_1.element(protractor_1.by.css("svg[class*='spinner blank-slate']"));
    }
    selectShipping(shipmethod) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.radioBtns.each(() => {
                this.radioBtns.getAttribute("data-shipping-method").then((shipping) => {
                    if (shipping.includes(shipmethod)) {
                        protractor_1.element(protractor_1.by.css("[class='radio__input']")).click();
                    }
                });
            });
        });
    }
}
exports.shippingDetails = shippingDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9zaGlwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFFckYsTUFBYSxlQUFlO0lBS3hCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVLLGNBQWMsQ0FBQyxVQUFpQjs7WUFDOUIsTUFBTSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFFLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxTQUFTLENBQUMsWUFBWSxDQUFDLHNCQUFzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsUUFBUSxFQUFDLEVBQUU7b0JBQ2pFLElBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQzt3QkFDN0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztxQkFDckQ7Z0JBQ0wsQ0FBQyxDQUFDLENBQUE7WUFFTixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FBQTtDQUNKO0FBckJELDBDQXFCQyJ9