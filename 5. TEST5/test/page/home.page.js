import Page from "./page";

class Homepage extends Page {
    get shopLaptopTabletSeemore() {
        return $('//div/a/img[@alt="Shop laptops"]/ancestor::a/parent::div');
    }

    async open() {
        await super.open('/');
    }
}

export default new Homepage();