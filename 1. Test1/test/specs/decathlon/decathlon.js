import DecathlonPage from '../../pageobjects/decathlon.page';

describe('Watches Page', () => {
    before(() => {
        DecathlonPage.open();
    })

    it('should display the banner', async () => {
        await expect(DecathlonPage.banner).toBeDisplayed();
    });

    // it('should display the banner title', async () => {
    //     const bannerTitle = $('.ebayui-ellipsis-3');
    //     await expect(bannerTitle).toHaveTextContaining('Enjoy 15%* off!');
    // });

    it('should contain link on banner button and it is clickable', async () => {
        await expect(DecathlonPage.bannerButton).toHaveLinkContaining('/campaigns/');
        await expect(DecathlonPage.bannerButton).toBeClickable();
    });

    it('should click on the banner button and verify the new URL', async () => {
        await DecathlonPage.bannerButton.click();
        await expect(browser).toHaveUrl('https://www.decathlon.vn/vi/campaigns/san-pham-ban-chay-nhat-25803?icm=herobanner&icn=Homepage_Bestsellers');

    });
});