"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginpage = void 0;
const protractor_1 = require("protractor");
class loginpage {
    constructor() {
        this.emailField = protractor_1.element(protractor_1.by.css("#CustomerEmail"));
        this.pwdField = protractor_1.element(protractor_1.by.css("#CustomerPassword"));
        this.signinBtn = protractor_1.element(protractor_1.by.css("[value='Sign In']"));
    }
}
exports.loginpage = loginpage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvbG9naW5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDJDQUF3RDtBQUV4RCxNQUFhLFNBQVM7SUFLbEI7UUFDSSxJQUFJLENBQUMsVUFBVSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO1FBQ25ELElBQUksQ0FBQyxTQUFTLEdBQUMsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQztJQUN4RCxDQUFDO0NBQ0o7QUFWRCw4QkFVQyJ9