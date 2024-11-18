it('addProduct', ()=> {
  cy.visit('/');
  cy.get('#search').clear().type('bag{enter}');
//   cy.get('.actions > .action').click();
  cy.get(':nth-child(1) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
  cy.get('#qty').clear().type('2');
  cy.get('#product-addtocart-button > span').click();
});

