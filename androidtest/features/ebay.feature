Feature: Search on eBay

  Background:
    Given Chrome is open on my Android device
    When I navigate to "http://www.ebay.com" and the page is displayed

  Scenario: Search for "Pilas" on eBay
    Then I enter "Pilas" in the search field and click the search button
    Then I should see the number of search results
