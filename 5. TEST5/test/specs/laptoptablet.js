import homePage from "../page/home.page";
import laptoptabletPage from "../page/laptoptablet.page";
import { redirectToLaptopTabletPage } from "../ultilites/helper";

describe('Laptop & Tablet Page', () => {
    before(async () => {
        await homePage.open();
        await redirectToLaptopTabletPage(homePage.shopLaptopTabletSeemore, 5000);
    });
    it('should redirect to Samsung product page', async () => {
        await laptoptabletPage.filterButton.click();
        await laptoptabletPage.searchBox.addValue('Samsung');
        await laptoptabletPage.samsungCheckbox.waitForDisplayed();
        await laptoptabletPage.samsungCheckbox.click();
        await laptoptabletPage.filterClose.click();
        await laptoptabletPage.samsungProduct.click();
        await expect(browser).toHaveTitle('Amazon.com: Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 32GB Storage, Long-Lasting Battery, Kids Content, Smart Switch, Expandable Memory, Dark Gray');
    });
});