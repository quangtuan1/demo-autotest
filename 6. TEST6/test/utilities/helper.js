export const swipeDown = async (times) => {
    const startPercentage = 85;
    const endPercentage = 10;
    const anchorPercentage = 50;

    const { width, height } = await driver.getWindowSize();
    const anchor = width * anchorPercentage / 100;
    const startPoint = height * startPercentage / 100;
    const endPoint = height * endPercentage / 100;

    for (let i = 0; i < times; i++) {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: anchor,
                    y: startPoint,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 500,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: anchor,
                    y: endPoint,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 500,
                },
            },
            {
                action: 'release',
                options: {},
            }
        ]);
    }
};

export const swipeToLeft = async (times) => {
    const startPercentage = 85;
    const endPercentage = 10;
    const anchorPercentage = 70;

    const { width, height } = await driver.getWindowSize();
    const anchor = height * anchorPercentage / 100;
    const startPoint = width * startPercentage / 100;
    const endPoint = width * endPercentage / 100;

    for (let i = 0; i < times; i++) {
        await driver.touchPerform([
            {
                action: 'press',
                options: {
                    x: startPoint,
                    y: anchor,
                },
            },
            {
                action: 'wait',
                options: {
                    ms: 100,
                },
            },
            {
                action: 'moveTo',
                options: {
                    x: endPoint,
                    y: anchor,
                },
            },
            {
                action: 'release',
                options: {},
            }
        ]);
    }
}