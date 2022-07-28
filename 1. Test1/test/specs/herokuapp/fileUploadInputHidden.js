const path = require('path');

describe('Upload file', () => {
    it('should be able to upload a file', async () => {
        const inputDiv = await $('#div_file_box0');
        const inputBtn = await $('#input_file0');
        const submitBtn = await $('.convert_button');

        const filePath = './test/data/download.jpg';
        const remoteFilePath = await browser.uploadFile(filePath);

        await browser.url('https://online2pdf.com/');
        await browser.execute(function () {
            document.getElementById('div_file_box0').style.display = 'block';
        });

        await inputDiv.waitForDisplayed;
        await inputBtn.setValue(remoteFilePath);
        await submitBtn.click();
        await browser.pause(5000);
    });
});