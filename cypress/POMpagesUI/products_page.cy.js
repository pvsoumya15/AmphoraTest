export class AmphoraPage{

    ClickProductOne = ':nth-child(1) > .products__card'
    ClickProductTwo = ':nth-child(2) > .products__card'
    ClickProductThree = ':nth-child(3) > .products__card'
    ClickProductFour = ':nth-child(4) > .products__card'
    ClickProductFive = ':nth-child(5) > .products__card'
    ClickProductSix = ':nth-child(6) > .products__card'

    navigate(url){
        // Visit the Amphora website
      cy.visit(url);

    }

    ClickAllProducts(){
        cy.get(this.ClickProductOne).click()
        cy.go('back');
        cy.get(this.ClickProductTwo).click()
        cy.go('back');
        cy.get(this.ClickProductThree).click()
        cy.go('back');
        cy.get(this.ClickProductFour).click()
        cy.go('back');
        cy.get(this.ClickProductFive).click()
        cy.go('back');
        cy.get(this.ClickProductSix).click()
        cy.go('back');         

    }

    NewsletterSignUP(){
        cy.visit("https://amphora.net/newsletter-sign-up")
        cy.get('.formserv-email-field > .fserv-input-text').type('pvsoumya1115@gmail.com');
        cy.get(':nth-child(2) > .fserv-input-text').type('P V')
        cy.get(':nth-child(3) > .fserv-input-text').type('Soumya')
        cy.get('.fserv-button-submit').click()
        cy.contains('Thank you for signing up for our newsletter').should('be.visible');

    }


}