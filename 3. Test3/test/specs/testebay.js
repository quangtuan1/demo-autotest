import EbayPage from "../pageobject/pageebay"
import resources from "../resources";
import { waitAndClick } from "../utilities/helper";
const expectChai = require('chai').expect;

describe('Test', () => {
    it('test ebay', async () => {
        await browser.url('https://www.ebay.com/')
        await EbayPage.fashionMenu.moveTo();
        await waitAndClick(EbayPage.footwearMenu, 3000);

        await expect(browser).toHaveTitle("Women's Clothing for Sale - eBay");

        //console.log(await EbayPage.textCategoryWomenClothing());

        expectChai(await EbayPage.textCategoryWomenClothing()).to.deep.equal(resources.categoryWomenClothing);

    });
});