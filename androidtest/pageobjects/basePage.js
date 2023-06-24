import locators from "../locators.js"

export default class BasePage {
    navigateTo(url) {
        driver.url(url);
    }

    get acceptAndContinueButton() {
        return $(locators.acceptAndContinueBtn);
    }

    get noThanksSyncBtn() {
        return $(locators.noThanksSyncBtn)
    }

    get noThanksChromeNotificationBtn() {
        return $(locators.noThanksChromeNotificationBtn)
    }

    async ignoreChromeFirstTimePopUps() {
        await this.acceptAndContinueButton.click();
        await this.noThanksSyncBtn.click();
        await this.noThanksChromeNotificationBtn.click();
    }

}
