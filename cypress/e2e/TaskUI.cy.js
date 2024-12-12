// cypress/integration/amphoraTest.js

describe('Amphora Website Test', () => {
    before(() => {
      // Visit the Amphora website
      cy.visit('https://www.amphora.net');
    });
  
      it('Clicks on Products from the Products dropdown and close', () => {
      
        cy.get('.page-header__hamburger > span').click()
        cy.get('.page-header__hamburger > span').click()
        
        // Get the Porducts Header by assertions
        cy.contains('Products')
        
  
        // Click on each product
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
          
        // Go back to the homepage
          cy.go('back');
      });
    
    it('Signs up for the newsletter under Resources dropdown and asserts the success message', () => {
      
      cy.visit("https://amphora.net/newsletter-sign-up")

      // Fill out the signup form (adjust selectors as per actual form fields)
       cy.get('.formserv-email-field > .fserv-input-text').type('pvsoumya1115@gmail.com');
       cy.get(':nth-child(2) > .fserv-input-text').type('P V')
       cy.get(':nth-child(3) > .fserv-input-text').type('Soumya')
  
      // Submit the form
      cy.get('.fserv-button-submit').click()
  
      // Assert the success message
       cy.contains('Thank you for signing up for our newsletter').should('be.visible');
    });
  });

  
      