import swipePage from "../page/swipe.page";
import { swipeDown, swipeToLeft } from "../utilities/helper";

describe('Swipe Page', () => {
    before(async () => {
        await swipePage.swipeBtnMenu.click();
    });

    it('should swipe to left', async () => {
        await swipePage.titleText.waitForDisplayed();
        await swipePage.titleText.click();

        // while (await swipePage.compatibleTitleText.isDisplayedInViewport() === false) {
        await swipeToLeft(6);
        // }

        await swipePage.compatibleTitleText.click();
    });
});