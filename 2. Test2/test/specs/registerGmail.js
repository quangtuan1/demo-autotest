const { default: GooglePage } = require("../pageobject/google.page");
const { default: GmailPage } = require("../pageobject/gmail.page");
const { default: RegisterPage } = require("../pageobject/register.page");
const expectChai = require('chai').expect;
import allureReporter from '@wdio/allure-reporter';
import resources from '../resources';
import { changeLanguageEnUS, clearField, waitForTextChangeAndClick } from '../utilities/helper';

describe('Google Page', () => {
    before(async () => {
        await GooglePage.open();
    });

    it('should redirect to Gmail page', async () => {
        allureReporter.addTestId('REG001');

        await GooglePage.gmailBtn.click();
    });

    it('should redirect to Register Gmail page', async () => {
        allureReporter.addTestId('REG002');

        await GmailPage.creatAccBtn.click();
    });

    it('should display error message when next without input value', async () => {
        allureReporter.addTestId('REG003');

        await changeLanguageEnUS(RegisterPage.selectEnUS, RegisterPage.selectLanguage, RegisterPage.languageEnUS);
        await waitForTextChangeAndClick(RegisterPage.nextBtn, 'Next', 3000);

        const text1 = await RegisterPage.emptyNameErrorMessage.getText();
        expectChai(await text1).to.deep.equal('Enter first and last names');

        const text2 = await RegisterPage.emptyGmailErrorMessage.getText();
        expectChai(await text2).to.deep.equal('Choose a Gmail address');

        const text3 = await RegisterPage.emptyPasswordErrorMessage.getText();
        expectChai(await text3).to.deep.equal('Enter a password');
    });

    it('should display error message when not input first name', async () => {
        allureReporter.addTestId('REG004');

        await RegisterPage.lastName.setValue('Last name');
        await RegisterPage.nextBtn.click();

        const text1 = await RegisterPage.emptyNameErrorMessage.getText();
        expectChai(await text1).to.deep.equal('Enter first name');
    });

    it('should display error message when not input the same password', async () => {
        allureReporter.addTestId('REG005');

        await RegisterPage.password.setValue('Password1234');
        await RegisterPage.confirmPassword.setValue('Password4321');
        await RegisterPage.nextBtn.click();

        const text1 = await RegisterPage.matchPasswordErrorMessage.getText();
        expectChai(await text1).to.deep.equal('Those passwords didn’t match. Try again.');
    });

    it('should display error message when next after clear all value', async () => {
        allureReporter.addTestId('REG006');

        await clearField(RegisterPage.firstName, RegisterPage.lastName, RegisterPage.username, RegisterPage.password, RegisterPage.confirmPassword);
        await RegisterPage.nextBtn.click();
        const text1 = await RegisterPage.emptyNameErrorMessage.getText();
        expectChai(await text1).to.deep.equal('Enter first and last names');

        const text2 = await RegisterPage.emptyGmailErrorMessage.getText();
        expectChai(await text2).to.deep.equal('Choose a Gmail address');

        const text3 = await RegisterPage.emptyPasswordErrorMessage.getText();
        expectChai(await text3).to.deep.equal('Enter a password');
        // await browser.pause(3000);
    });

    it('should display the language', async () => {
        allureReporter.addTestId('REG007');

        //console.log(await RegisterPage.textAllLanguage());
        const text1 = await RegisterPage.textAllLanguage();
        expectChai(text1.sort()).to.deep.equal(resources.allLanguageList.sort())
        // expectChai(text1).to.deep.equal(resources.allLanguageList)

    });
});