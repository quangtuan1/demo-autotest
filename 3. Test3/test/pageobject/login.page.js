import Page from "./page";

class LoginPage extends Page {
    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get loginBtn() {
        return $('i[class="fa fa-2x fa-sign-in"]');
    }

    async open() {
        await super.open();
    }

    async login(user, pass) {
        // await this.username.waitForDisplayed();
        await this.username.setValue(user);
        // await this.password.waitForDisplayed();
        await this.password.setValue(pass);
        await browser.waitUntil(
            async () => (await this.username.getValue()) != null && (await this.password.getValue() != null),
            {
                timeout: 5000
            }
        );
        await this.loginBtn.click();
    }
}

export default new LoginPage();