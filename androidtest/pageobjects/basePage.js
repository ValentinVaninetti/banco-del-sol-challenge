import locators from "../locators.js"
export default class BasePage {
    navigateTo(url) {
        driver.url(url);
    }
    get acceptAndContinueButton(){
        return $(locators.acceptAndContinueBtn);
    }
    get noThanksButton(){
        return $(locators.noThanksBtn)
    }
    get noThanksButton2(){
        return $(locators.noThanksBtn2)
    }
    async ignoreChromeFirstTimePopUps(){
    await this.acceptAndContinueButton.click();
    await this.noThanksButton.click();
    await this.noThanksButton2.click();
    }

}
