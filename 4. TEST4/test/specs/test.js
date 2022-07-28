describe('Test', () => {
    it('test appium', async () => {
        await browser.url('https://google.com.vn');
        await browser.pause(5000);
        console.log('OK');
    });
});