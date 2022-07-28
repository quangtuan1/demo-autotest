const { default: loginPage } = require("../page/login.page");
const { default: resources } = require("../resources");
const { cred } = require("../resources/cred");
const expectChai = require('chai').expect;

describe('Login', () => {
    before(async () => {
        await loginPage.loginMenuBtn.click();
        let context = await driver.getContext()
        console.log('Context: ', context);
    });

    it('should login successfully', async () => {
        await loginPage.login(cred.email, cred.password);

        expectChai(await loginPage.alertTitle.getText()).to.deep.equal(resources.alertTitle);
        expectChai(await loginPage.alertMessage.getText()).to.deep.equal(resources.alertMessage);

        await loginPage.alertOK.click();
    });

    it('should display error message when login unsuccessfully', async () => {
        await loginPage.login(cred.invalidEmail, cred.invalidPassword);

        expectChai(await loginPage.emailErrorMessage.getText()).to.deep.equal(resources.emailErrorMessage);
        expectChai(await loginPage.passwordErrorMessage.getText()).to.deep.equal(resources.passwordErrorMessage);
    });

});