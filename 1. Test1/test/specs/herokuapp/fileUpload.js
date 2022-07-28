const path = require('path');

describe('Upload file', () => {
    it('should be able to upload a file', async () => {
        const inputBtn = await $('#file-upload');
        const submitBtn = await $('#file-submit');
        const filePath = './test/data/download.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);

        browser.url('https://the-internet.herokuapp.com/upload');
        await inputBtn.setValue(remoteFilePath);
        await submitBtn.click();
        await browser.pause(5000);
    });
});