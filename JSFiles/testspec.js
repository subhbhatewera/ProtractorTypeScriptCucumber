"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
describe("Calculator Test Suite", function () {
    let firstNumber = protractor_1.element(protractor_1.by.model("first"));
    let secondNumber = protractor_1.element(protractor_1.by.model("second"));
    let goButton = protractor_1.element(protractor_1.by.id("gobutton"));
    let dropDownOptions = protractor_1.element.all(protractor_1.by.tagName("option"));
    function openApp() {
        protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        protractor_1.browser.manage().window().maximize();
    }
    function calculation(operand1, operand2, operation) {
        firstNumber.sendKeys(operand1);
        secondNumber.sendKeys(operand2);
        dropDownOptions.each(function (item) {
            item.getAttribute("value").then(function (value) {
                if (value == operation) {
                    item.click();
                }
            });
        });
        goButton.click();
    }
    it("Validate calculation on basis of given input", function () {
        openApp();
        calculation(5, 8, "MULTIPLICATION");
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUErQztBQUUvQyxRQUFRLENBQUMsdUJBQXVCLEVBQUU7SUFFOUIsSUFBSSxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDN0MsSUFBSSxZQUFZLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDL0MsSUFBSSxRQUFRLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDMUMsSUFBSSxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBRXhELFNBQVMsT0FBTztRQUVaLG9CQUFPLENBQUMsR0FBRyxDQUFDLDJDQUEyQyxDQUFDLENBQUM7UUFDekQsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUV6QyxDQUFDO0lBRUQsU0FBUyxXQUFXLENBQUMsUUFBZSxFQUFFLFFBQWUsRUFBRSxTQUFnQjtRQUMvRCxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQy9CLFlBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDaEMsZUFBZSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDOUIsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBUyxLQUFLO2dCQUMxQyxJQUFHLEtBQUssSUFBRSxTQUFTLEVBQUM7b0JBQ2hCLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztpQkFDaEI7WUFDTCxDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQyxDQUFBO1FBQ0YsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCxFQUFFLENBQUMsOENBQThDLEVBQUU7UUFDL0MsT0FBTyxFQUFFLENBQUM7UUFDVixXQUFXLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3RDLENBQUMsQ0FBQyxDQUFBO0FBR04sQ0FBQyxDQUFDLENBQUEifQ==