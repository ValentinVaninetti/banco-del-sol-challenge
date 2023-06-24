Feature: Search on eBay

  Scenario: Search for "Pilas" on eBay
    Given Chrome is open on my Android device
    When I navigate to "http://www.ebay.com" and the page is displayed
    Then I enter "Pilas" in the search field and click the search button
    Then I should see the number of search results
