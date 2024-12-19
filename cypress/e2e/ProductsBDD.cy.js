import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I am on the Amphora homepage", () => {
  cy.visit("https://www.amphora.net");
});

When("I click \"Products\" from dropdown", () => {
    cy.get('.page-header__hamburger > span').click();
    cy.get('.page-header__hamburger > span').click();
});

Then("I should click on each product link and navigate back to homepage", () => {
    cy.get(':nth-child(1) > .products__card').click()
    cy.go('back');
    cy.get(':nth-child(2) > .products__card').click()
    cy.go('back');
    cy.get(':nth-child(3) > .products__card').click()
    cy.go('back');
    cy.get(':nth-child(4) > .products__card').click()
    cy.go('back');
    cy.get(':nth-child(5) > .products__card').click()
    cy.go('back');
    cy.get(':nth-child(6) > .products__card').click()
    cy.go('back');
  });

  When("I visit to the \"Newsletter\" section under \"Resources\"", () => {
    cy.visit("https://amphora.net/newsletter-sign-up")
  });
  
  And("I fill out the newsletter signup form", () => {
       cy.get('.formserv-email-field > .fserv-input-text').type('pvsoumya1115@gmail.com');
       cy.get(':nth-child(2) > .fserv-input-text').type('P V')
       cy.get(':nth-child(3) > .fserv-input-text').type('Soumya')
       cy.get('.fserv-button-submit').click()
  });
  
  Then("I should see the success message \"Thank you for signing up for our newsletter\"", () => {
    cy.contains('Thank you for signing up for our newsletter').should('be.visible');
  });
