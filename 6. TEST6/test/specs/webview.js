import webviewPage from "../page/webview.page";
import { swipeDown, tapScreen } from "../utilities/helper";

describe('Webview Page', () => {
    before(async () => {
        await webviewPage.webviewBtnMenu.click();
    });

    it.skip('should take screenshot of webview', async () => {
        await webviewPage.extendableTitle.waitForDisplayed({ timeout: 100000 });
        await webviewPage.extendableTitle.scrollIntoView();
        await browser.saveScreenshot('./Screenshot/ss_webview.png');
    });

    it('should take screenshot of webview', async () => {
        let context = await driver.getContext()
        console.log('Context: ', context);

        // await driver.switchContext("WEBVIEW_com.wdiodemoapp");
        // await driver.switchContext("NATIVE_APP");

        await webviewPage.textLoading.waitForDisplayed({ timeout: 100000, reverse: true });

        await webviewPage.closeIcon.waitForDisplayed();
        await webviewPage.closeIcon.click();

        // while (await webviewPage.getStartedBtn.isDisplayedInViewport() === false) {
        await swipeDown(1);
        // }

        await webviewPage.getStartedBtn.click();
    });
});