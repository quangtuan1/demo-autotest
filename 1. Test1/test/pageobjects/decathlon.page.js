import Page from './page';

class DecathlonPage extends Page {
    get banner() {
        return $('.hero_banner');
    }
    get bannerButton() {
        return $('.hero_banner a');
    }

    async open() {
        await super.open('https://www.decathlon.vn/vi');
    }
}

export default new DecathlonPage();