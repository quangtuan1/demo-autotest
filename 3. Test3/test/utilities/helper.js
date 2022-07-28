export const waitAndClick = async (ele, timeout) => {
    await ele.waitForDisplayed({ timeout });
    await ele.click();
}