import BasePage from "./basePage.js";
import locators from "../locators.js";

class SearchResultPage extends BasePage{
    get searchResults() {
            return $(locators.ebaySearchResultsTxt);
    }

    async printSearchResultsCount() {
        const values = await this.searchResults.getText();
        console.log(`Number of search results: `+ values);
    }
}

export default new SearchResultPage()
