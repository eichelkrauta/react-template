import initStoryshots from "@storybook/addon-storyshots"
import { imageSnapshot } from "@storybook/addon-storyshots-puppeteer"
import { Base64ScreenShotOptions } from "puppeteer"

const getMatchOptions = () => {
    return {
        failureThreshold: 0,
        failureThresholdType: "percent" as "percent" | "pixel" | undefined,
        customSnapshotsDir: `${__dirname}/../.storybook/__snapshots__`
    }
}

const beforeScreenshot = () => {
    return new Promise<void>((resolve) =>
        setTimeout(() => {
            resolve()
        }, 600)
    )
}

const getScreenshotOptions = (): Base64ScreenShotOptions => {
    return {
        encoding: "base64", // encoding: 'base64' is a property required by puppeteer
        fullPage: true
    }
}

const figmaDesign = {
    name: "Desktop",
    userAgent: "",
    viewport: {
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1,
        isMobile: false,
        hasTouch: false,
        isLandscape: true,
    },
}

function customizePage(page: any): Promise<void> {
    return page.emulate(figmaDesign)
}

initStoryshots({
    suite: "Image storyshots",
    test: imageSnapshot({
        storybookUrl: "http://localhost:6006",
        setupTimeout: 120000,
        testTimeout: 120000,
        getMatchOptions,
        getScreenshotOptions,
        beforeScreenshot,
        customizePage
    })
})

export default {}