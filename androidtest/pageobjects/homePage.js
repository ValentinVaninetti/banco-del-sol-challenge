import BasePage from "./basePage.js";
import locators from "../locators.js";

class HomePage extends BasePage {

    get searchInput() {
        return $(locators.ebaySearchInput);
    }
    get getImgLogo(){
        return $(locators.ebayImgLogo);
    }

    get searchButton() {
        return $(locators.ebaySearchBtn);
    }
    async performSearch(keyword) {
        await this.searchInput.isDisplayed();
        await this.searchInput.setValue(keyword);
        await this.searchButton.isDisplayed();
        await this.searchButton.click();
        await this.searchButton.click();
    }
}

export default new HomePage()
