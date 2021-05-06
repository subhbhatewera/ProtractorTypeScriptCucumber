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
        this.radioBtns = protractor_1.element.all(protractor_1.by.css("[class='radio-wrapper'] label span[class*='primary']"));
        this.continuePaymentBtn = protractor_1.element(protractor_1.by.buttonText("Continue to payment"));
        this.shippingSpinner = protractor_1.element(protractor_1.by.css("svg[class*='spinner blank-slate']"));
    }
    shipping(shipmethod) {
        return __awaiter(this, void 0, void 0, function* () {
            this.radioBtns.getAttribute("data-shipping-method-label-title").then((temp) => __awaiter(this, void 0, void 0, function* () {
                for (let i = 0; i < temp.length; i++) {
                    if (temp[i].includes(shipmethod)) {
                        console.log(temp[i]);
                        yield protractor_1.element.all(protractor_1.by.css("[class='radio__input']")).get(i).click();
                        break;
                    }
                    else {
                        console.log(shipmethod + " option is not available so Order will be placed using default shipping option");
                    }
                }
            }));
        });
    }
}
exports.shippingDetails = shippingDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hpcHBpbmcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9zaGlwcGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFFckYsTUFBYSxlQUFlO0lBS3hCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsR0FBQyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHNEQUFzRCxDQUFDLENBQUMsQ0FBQztRQUMzRixJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUMsQ0FBQztRQUN0RSxJQUFJLENBQUMsZUFBZSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDLENBQUM7SUFDOUUsQ0FBQztJQUVLLFFBQVEsQ0FBQyxVQUFpQjs7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsa0NBQWtDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBTyxJQUFJLEVBQUMsRUFBRTtnQkFDL0UsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUcsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLEVBQUcsQ0FBQyxFQUFFLEVBQUM7b0JBQ2xDLElBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxVQUFVLENBQUMsRUFBQzt3QkFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDckIsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7d0JBQ25FLE1BQU87cUJBQ1Y7eUJBQ0c7d0JBQ0EsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUMsZ0ZBQWdGLENBQUMsQ0FBQztxQkFDNUc7aUJBQ0o7WUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ0wsQ0FBQztLQUFBO0NBQ0o7QUF6QkQsMENBeUJDIn0=