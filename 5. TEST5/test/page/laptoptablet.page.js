class LaptopTabletPage {
    get filterButton() {
        return $('//*[@id="s-all-filters"]/span[text()="Filters"]');
    }

    get filterClose() {
        return $('//*[@id="dropdown-content-s-all-filters"]/div/div/span/a/span[text()="Close"]');
    }

    get searchBox() {
        return $('//div/input[@type="search"]');
    }

    get samsungCheckbox() {
        return $('//*[@id="p_89/SAMSUNG"]');
    }

    get samsungProduct() {
        return $('//a/div/h2/span[text()="Samsung Galaxy Tab A8 Android Tablet, 10.5” LCD Screen, 32GB Storage, Long-Lasting Battery, Kids Content, Smart Switch, Expandable Memory, Dark Gray"]');
    }
}

export default new LaptopTabletPage();