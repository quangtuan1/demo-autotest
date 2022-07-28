import Page from "./page ";


class GooglePage extends Page {
    get gmailBtn() {
        return $('div[class="gb_e gb_f"] a[class="gb_d"]');
    }

    async open() {
        await super.open('/');
    }
}

export default new GooglePage();