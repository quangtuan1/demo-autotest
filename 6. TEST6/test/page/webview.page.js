class WebviewPage {
    get webviewBtnMenu() {
        return $('~Webview');
    }

    get textLoading() {
        return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.widget.TextView');
    }

    get closeIcon() {
        return $('//*[@text="Close"]');
    }

    get extendableTitle() {
        return $('//android.view.View//*[@text="Extendable"]');
    }

    get wdioIcon() {
        return $('~WebdriverIO');
        // return ('//div[@id="__docusaurus"]/nav/div[1]/div[1]/a[1]/div/img');
    }

    get textDescription() {
        return $('//*[@text="Next-gen browser and mobile automation test framework for Node.js"]');
    }

    get getStartedBtn() {
        // return $('=Get Started');
        return $('~Get Started');
    }
}

export default new WebviewPage();