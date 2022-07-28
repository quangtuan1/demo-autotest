export const waitForTextChange = async (ele, text, timeout) => {
    await browser.waitUntil(
        async function () {
            return await ele.getText() === text;
        }, { timeout }
    );
};

export const waitAndClick = async (ele, timeout) => {
    await ele.waitForDisplayed({ timeout });
    await ele.click();
};