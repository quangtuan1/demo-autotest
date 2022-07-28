import Page from './page';

class WatchesPage extends Page {
    get watchesCategoryList() {
        return $$('section[id="s0-17-12_2-0-1[0]-0-0"] ul li');
    }
    get fashionLink() {
        return $$('.hl-cat-nav__js-tab a[href*="Fashion"]')[0];
    }
    get watchesLink() {
        return $('.hl-cat-nav__sub-cat-col a[href*="Wristwatches"]');
    }

    async open() {
        await super.open('/');
        //super.open('https://www.ebay.com/b/Watches-Parts-Accessories/260324/bn_2408535');
    }

    async getWatchesCategoryListText() {
        const wList = [];
        // await this.watchesCategoryList.map(async element => wList.push(await element.getText()));

        const ele = $$('section[id="s0-17-12_2-0-1[0]-0-0"] ul li');
        await ele.map(async element => wList.push(await element.getText()));
        return wList;
    }

    async displayWatchesCategoryListText() {
        return this.watchesCategoryList.map(async element => console.log(await element.getText()));
    }

}

export default new WatchesPage();