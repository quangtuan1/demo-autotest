import Page from "./page ";

class RegisterPage extends Page {
    get selectLanguage() {
        return $('footer div[class="u7land"]');
    }

    get languageEnUS() {
        return $('div[class="OA0qNb ncFHed"] div[data-value="en"] span[class="vRMGwf oJeWuf"]');
    }

    get selectEnUS() {
        const enUS = $('footer div[class="ry3kXd Ulgu9"] div[data-value="en"]');
        return enUS.getAttribute('aria-selected');
    }

    get nextBtn() {
        return $('div[class="qhFLie"] span[class="VfPpkd-vQzf8d"]');
    }

    get emptyNameErrorMessage() {
        return $('div[id="nameError"] div[jsname="B34EJ"]');
    }

    get emptyGmailErrorMessage() {
        return $('div[class="dEOOab RxsGPe"] div[class="o6cuMc"]');
    }

    get emptyPasswordErrorMessage() {
        return $('div[class="SdBahf Fjk18 OcVpRe DbQnIe ia6RDd Jj6Lae"] div[jsname="B34EJ"]');
    }

    get firstName() {
        return $('input[id="firstName"]');
    }

    get lastName() {
        return $('#lastName');
    }

    get username() {
        return $('input[id="username"]');
    }

    get password() {
        return $('input[name="Passwd"]');
    }

    get confirmPassword() {
        return $('input[name="ConfirmPasswd"]');
    }

    get matchPasswordErrorMessage() {
        return $('div[class="SdBahf Fjk18 OcVpRe DbQnIe ia6RDd Jj6Lae"] div[jsname="B34EJ"]');
    }

    get languageAll() {
        return $$('div[class="OA0qNb ncFHed"] div[class="MocG8c B9IrJb LMgvRb"] span[class="vRMGwf oJeWuf"]'); //dropdown
    }

    async textAllLanguage() {
        const languageList = [];

        await this.selectLanguage.click();
        await $('div[class="OA0qNb ncFHed"]').waitForDisplayed({ timeout: 3000 });
        const lengthLanguage = await this.languageAll.length;

        for (let i = 0; i < lengthLanguage; i++) {
            languageList.push(await this.languageAll[i].getText());

            // console.log(await this.languageAll[i].getText());
        }

        // return this.languageAll.filter(async element => console.log(await element.getText()));

        return languageList;
    }
}

export default new RegisterPage();