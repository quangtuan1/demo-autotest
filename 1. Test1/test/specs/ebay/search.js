import SearchPage from '../../pageobjects/search.page';
import resources from '../../resources';
import { waitForTextChange } from '../../utilities/helper';
import allureReporter from '@wdio/allure-reporter'

describe('Ebay Product Search ${browser.capabilities.browserName}', () => {
    before(async () => {
        await SearchPage.open();
    });

    it('should open the main URL and verify the title', async () => {
        allureReporter.addTestId('TC001');
        await expect(browser).toHaveTitle(resources.homeTitle);
    });

    it.skip('should search for a product and verify the search text value', async () => {

        await SearchPage.searchInput.addValue('Laptop');
        await SearchPage.searchBtn.click();
        await expect(SearchPage.searchInput).toHaveValue('laptop');
        console.log(await SearchPage.searchBtn.getValue());
    });

    it.skip('should redirect to a new page and verify the title', async () => {
        await expect(browser).toHaveTitle(resources.searchLaptopTitle);
    });

    it.skip('should update the search category', async () => {
        await waitForTextChange(SearchPage.category, 'PC Laptops & Netbooks', 3000);
        await expect(SearchPage.category).toHaveText('PC Laptops & Netbooks');
    });

    it('should redirect when clicking the Buy it now button', async () => {
        const buttonBuy = $('//*[@id="rtm_list1"]/div/div[1]/div/div/a/div[2]');
        await buttonBuy.click();
        await browser.pause(3000);
    });
})