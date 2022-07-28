export const changeLanguageEnUS = async (el1, el2, el3) => {
    if (await el1 != 'true') {
        await el2.click();
        await el3.click();
    };
}

export const waitForTextChangeAndClick = async (ele, text, timeout) => {
    await browser.waitUntil(
        async function () {
            return await ele.getText() === text;
        }, { timeout }
    );
    await ele.click();
};

export const clearField = async (ele1, ele2, ele3, ele4, ele5) => {
    await ele1.clearValue();
    await ele2.clearValue();
    await ele3.clearValue();
    await ele4.clearValue();
    await ele5.clearValue();
};