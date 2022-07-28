import { CLI_EPILOGUE } from "@wdio/cli/build/constants";
import TablePage from "../pageobject/pagetest.js";
import fs from 'fs';
import resources from "../resources/index.js";
import cred from "../resources/logincred";
import loginPage from "../pageobject/login.page.js";

describe('Test', () => {
    before(() => {
        loginPage.open('/login');
    });

    // it('test table', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/tables');
    //     const rowlength = await TablePage.rowTable.length;
    //     const columnlength = await TablePage.columnTable.length;
    //     console.log(rowlength);
    //     console.log(columnlength);
    //     const row = await TablePage.rowTable;
    //     const column = await TablePage.columnTable;

    //     for (let i = 0; i < rowlength; i++) {
    //         for (let j = 0; j < columnlength; j++) {
    //             //console.log(await row[i].$$('td')[j].getText() + "   ");
    //             process.stdout.write(await row[i].$$('td')[j].getText() + "   ");
    //         }
    //         console.log();
    //     }
    // });

    //     it('test access insecure', async () => {
    //         await browser.url('https://expired.badssl.com/');
    //         await browser.pause(3000);
    //     });

    //     it('test basic authen', async () => {
    //         await browser.url('https://admin:admin@the-internet.herokuapp.com/basic_auth');
    //         await browser.pause(3000);

    // it.skip('test read file', async () => {
    //     const output = fs.readFileSync('test/properties/data.txt', 'utf8');
    //     console.log(output);
    // });

    it('test login fail', async () => {
        await loginPage.login(cred.usernameInvalid, cred.passwordInvalid);
        await browser.pause(5000);
    });

    it('test login successfully', async () => {
        await loginPage.login(cred.username, cred.password);
        await browser.pause(3000);
        console.log(await browser.getTitle());
    });

    // it('test enviroment', async () => {
    //     const text = await browser.getTitle();
    //     console.log(text);
    // });

})