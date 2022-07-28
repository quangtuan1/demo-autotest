export const redirectToLaptopTabletPage = async (ele, timeout) => {
    await ele.waitForDisplayed({ timeout });
    await ele.scrollIntoView();
    await ele.click();
}