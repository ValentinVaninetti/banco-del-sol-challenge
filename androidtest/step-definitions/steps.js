import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/homePage.js';
import SearchResultPage from '../pageobjects/searchResultPage.js';

Given('Chrome is open on my Android device', async function () {
    const isChromeInstalled = await driver.isAppInstalled('com.android.chrome');
    await HomePage.ignoreChromeFirstTimePopUps();
    if (!isChromeInstalled) {
        throw new Error('Chrome is not installed on the device');
    }
});

When('I navigate to {string} and the page is displayed' , async function (url) {
    await HomePage.navigateTo(url);
    await driver.pause(4000)
    await HomePage.getImgLogo.isDisplayedInViewport();

});

Then('I enter {string} in the search field and click the search button', async function (string) {
    await HomePage.performSearch(string);
    await driver.pause(4000);
    await SearchResultPage.searchResults.isDisplayed();
});

Then('I should see the number of search results', async function () {
    await SearchResultPage.printSearchResultsCount();

});
