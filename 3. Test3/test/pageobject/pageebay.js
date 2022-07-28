class EbayPage {
    get fashionMenu() {
        return $('div[id=mainContent] div[class="hl-cat-nav"] ul a[href*=Fashion]');
    }

    get footwearMenu() {
        return $('//*[@id="mainContent"]/div[1]/ul/li[4]/div[2]/div[1]/nav[1]/ul/li[2]/a');
    }

    get categoryWomenClothing() {
        return $$('section[id="s0-17-12_2-0-1\[0\]-0-0"] ul li');
    }

    async textCategoryWomenClothing() {
        const lengthText = await this.categoryWomenClothing.length;
        const category = await this.categoryWomenClothing;
        const list = [];
        for (let i = 0; i < (lengthText); i++) {
            // console.log(await category[i].getText());
            list.push(await category[i].getText());
        }
        return list;
    }
}

export default new EbayPage();