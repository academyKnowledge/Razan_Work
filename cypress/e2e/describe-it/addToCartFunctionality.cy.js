describe('Add to cart functionality', () => {
    it('Validate that the user can add product to cart',()=> {
        cy.visit('https://magento.softwaretestingboard.com/');
        cy.get('#search').type('shirt{enter}');
        cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        cy.get('#option-label-size-143-item-168').click();
        cy.get('#option-label-color-93-item-57').click();
        cy.get('#product-addtocart-button').click();
        cy.get("[role=alert]").should("contain","You added Circe Hooded Ice Fleece to your shopping cart.")
        cy.get(".counter-number").should("be.visible").and('contain',"1")
      });
});