class TablePage {
    get rowTable() {
        return $$('table[id="table1"] tbody tr');
    }

    get columnTable() {
        return $$('table[id="table1"] tbody tr:nth-child(1) td');
    }

}

export default new TablePage();