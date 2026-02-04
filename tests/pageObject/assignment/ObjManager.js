import { SignupPage } from "./signupPage";
import { Login } from "./login";
import { ProductPage } from "./productPage";
import { ThankyouPage } from "../ThankyouPage";

export class ObjManager {
    constructor(page) {
        this.page=page;
        this.signup = new SignupPage(page);
        this.login = new Login(page);
        this.prod = new ProductPage(page);
        this.thank = new ThankyouPage(page);
    }

    getSignUp() {
       return this.signup;
    }

    getLogin() {
        return this.login;
    }
    getProd() {
        return this.prod
    }
    
    getThankyou() {
        return this.thank;
    }
}