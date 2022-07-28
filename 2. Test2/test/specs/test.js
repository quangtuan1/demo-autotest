describe('Test', () => {
    it('test iframe', async () => {
        await browser.url('https://the-internet.herokuapp.com/iframe');

        const iframe = await $('#mce_0_ifr');
        await browser.switchToFrame(iframe);
        const editor = $('body[id="tinymce"]');
        await editor.setValue('testing');
        await browser.keys('Enter');
        await browser.keys('abc123455677');
        await browser.pause(3000);
    });

    // it('test alert', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    //     await $('//button[text()="Click for JS Alert"]').click();
    //     console.log(await browser.getAlertText());
    //     await browser.dismissAlert();
    // });

    // it('test alert', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    //     await $('//button[text()="Click for JS Confirm"]').click();
    //     console.log(await browser.getAlertText());
    //     await browser.dismissAlert();
    //     //await browser.acceptAlert()
    // });

    // it('test alert', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/javascript_alerts');
    //     await $('//button[text()="Click for JS Prompt"]').click();
    //     console.log(await browser.getAlertText());
    //     await browser.sendAlertText('tesing 12345 6789');
    //     //await browser.acceptAlert();
    //     await browser.dismissAlert();

    //     await browser.pause(3000);
    // });

    // it('test open multi windows', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/windows');
    //     await $('//a[text()="Click Here"]').click();
    //     await browser.switchWindow('/windows/new');
    //     console.log(await browser.getTitle());
    // });

    // it('test close current windows', async () => {

    //     if (await expect(browser).toHaveTitle('New Window')) {
    //         await browser.closeWindow();
    //     }

    //     await browser.closeWindow();
    //     await browser.switchWindow('/windows');
    //     console.log(await browser.getTitle());
    // });

    // it('test move down and select', async () => {
    //     await browser.url('https://www.traveloka.com/');
    //     await browser.pause(3000);
    //     const from = await $('input[placeholder="Origin"]');
    //     await from.setValue('Sydney');
    //     await browser.pause(3000);
    //     const suggestion = await $('div[class="css-1dbjc4n r-1habvwh r-14lw9ot r-qklmqi r-1loqt21 r-18u37iz r-1w6e6rj r-1wtj0ep r-ymttw5 r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr"]');
    //     await suggestion.moveTo();
    //     await suggestion.click();
    // });

    // it('test drag and drop', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/horizontal_slider');

    //     const pos = await $('input[type="range"]');

    //     await pos.dragAndDrop({ x: 0, y: 0 });
    //     console.log(await $('span[id="range"]').getText());

    //     await browser.pause(3000);
    // });

    // it('test right click', async () => {
    //     await browser.url('https://the-internet.herokuapp.com/horizontal_slider');

    //     const pos = await $('//a[text()="Elemental Selenium"]');

    //     await pos.click({ button: 2 });
    //     await browser.keys('Down');
    //     await browser.keys('Down');
    //     await browser.keys('Enter');

    //     await browser.pause(3000);
    // });

});