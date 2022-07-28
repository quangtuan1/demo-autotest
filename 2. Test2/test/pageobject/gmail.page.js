import Page from "./page ";

class GmailPage extends Page {
    get creatAccBtn() {
        return $('div[class="feature__chapter__button"] a[href*="signup"]');
    }
}

export default new GmailPage();