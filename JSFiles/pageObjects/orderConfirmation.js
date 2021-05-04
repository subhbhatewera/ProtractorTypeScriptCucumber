"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.orderConfirmation = void 0;
const protractor_1 = require("protractor");
class orderConfirmation {
    constructor() {
        this.orderProcessingMsg = protractor_1.element(protractor_1.by.css("[class*='page-overlay__title']"));
        this.orderNumber = protractor_1.element(protractor_1.by.css("[class='os-order-number']"));
    }
}
exports.orderConfirmation = orderConfirmation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib3JkZXJDb25maXJtYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9vcmRlckNvbmZpcm1hdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxpQkFBaUI7SUFJMUI7UUFDSSxJQUFJLENBQUMsa0JBQWtCLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFJLENBQUMsV0FBVyxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7SUFDbEUsQ0FBQztDQUVKO0FBVEQsOENBU0MifQ==