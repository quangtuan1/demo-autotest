class Login {
    get loginMenuBtn() {
        // return $('//android.widget.Button[@content-desc="Login"]/android.widget.TextView');
        return $('~Login');
    }

    get emailInputField() {
        // return $('//android.widget.EditText[@content-desc="input-email"]');
        return $('~input-email');
    }

    get passwordInputField() {
        // return $('//android.widget.EditText[@content-desc="input-password"]');
        return $('~input-password');
    }

    get loginBtn() {
        // return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup');
        return $('~button-LOGIN');
    }

    get alertTitle() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.LinearLayout/android.widget.TextView');
        // return $('//android.widget.TextView//*[@id="android:id/alertTitle"]');
        // return $('00000000-0000-020c-ffff-ffff0000008d');
    }

    get alertMessage() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.TextView');
    }

    get alertOK() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button');
    }

    get emailErrorMessage() {
        return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[1]');
    }

    get passwordErrorMessage() {
        return $('//android.widget.ScrollView[@content-desc="Login-screen"]/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[4]/android.widget.TextView[2]');
    }

    async login(email, password) {
        await this.emailInputField.addValue(email);
        await this.passwordInputField.addValue(password);
        await this.loginBtn.click();
    }
}

export default new Login();