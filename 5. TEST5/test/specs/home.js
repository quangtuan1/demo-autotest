import homePage from "../page/home.page";
import { redirectToLaptopTabletPage } from "../ultilites/helper";

describe('Amazon Home Page', () => {
    before(async () => {
        await homePage.open();
    });

    it('should redirect to Laptop & Tablets page', async () => {
        await redirectToLaptopTabletPage(homePage.shopLaptopTabletSeemore, 5000);
        await expect(browser).toHaveTitle('Amazon.com');
    });
});