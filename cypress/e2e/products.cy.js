import {AmphoraPage} from "../POMpagesUI/products_page.cy.js"

const products = new AmphoraPage()

it('product test', function(){

  products.navigate('https://www.amphora.net');
  products.ClickAllProducts();
  products.NewsletterSignUP();

})