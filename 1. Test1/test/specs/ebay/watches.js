import WatchesPage from "../../pageobjects/watches.page";
import { expect as chaiExpect } from 'chai';
import { waitAndClick } from "../../utilities/helper";
import resources from "../../resources";
import { CLI_EPILOGUE } from "@wdio/cli/build/constants";

describe('Watches Page ${browser.capabilities.browserName}', () => {
    before(async () => {
        await WatchesPage.open();
        await WatchesPage.fashionLink.moveTo();
        await waitAndClick(WatchesPage.watchesLink, 3000);
    });

    it('should verify the watches category text', async () => {
        const watchesList = await WatchesPage.getWatchesCategoryListText();
        chaiExpect(watchesList.sort()).to.deep.equal(resources.watchesCategoryList.sort());
    });
    it('should get text', async () => {
        console.log("1:", await WatchesPage.getWatchesCategoryListText());

        await WatchesPage.displayWatchesCategoryListText();
    });

    // it('should verify the title', async () => {
    //     await expect(browser).toHaveTitle('Watches, Parts & Accessories for Sale - New & Used Watches - eBay');
    // });
});