Feature: Test functionality of the Amphora website

  Scenario: Verify products in the Products dropdown
    Given I am on the Amphora homepage
    When I click "Products" from dropdown
    Then I should click on each product link and navigate back to homepage 

  Scenario: Signup for the newsletter
    Given I am on the Amphora homepage
    When I visit to the "Newsletter" section under "Resources"
    And I fill out the newsletter signup form
    Then I should see the success message "Thank you for signing up for our newsletter"