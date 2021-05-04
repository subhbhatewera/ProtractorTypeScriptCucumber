"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkout = void 0;
const protractor_1 = require("protractor");
class checkout {
    constructor() {
        this.checkoutBtn = protractor_1.element(protractor_1.by.css("[name='checkout']"));
        this.updateBtn = protractor_1.element(protractor_1.by.css("[class*='cart__update--large']"));
    }
}
exports.checkout = checkout;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tvdXQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9jaGVja291dC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxRQUFRO0lBSWpCO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ3RELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxDQUFDLENBQUMsQ0FBQztJQUNyRSxDQUFDO0NBQ0o7QUFSRCw0QkFRQyJ9