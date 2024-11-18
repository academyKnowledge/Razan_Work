class addToCartActions {

    typeInSearchInputField(productName){
        cy.get('#search').type(productName);
        return this;
    }

    clickOnSearchButton(){
        cy.get('.actions > .action').click()
        return this; 
    }

    chooseTheProduct(){
        cy.get(':nth-child(2) > .product-item-info > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click();
        return this;
    }

    chooseTheProductSize(){
        cy.get('#option-label-size-143-item-168').click();
        return this;
    }

    chooseTheProductColor(){
        cy.get('#option-label-color-93-item-57').click();
        return this;
    }

    chooseTheProductQty(productQty){
        cy.get("#qty").clear().type(productQty)
        return this;
    }

    clickOnAddToCartButton(){
        cy.get('#product-addtocart-button').click();
        return this;
    }

}
export default addToCartActions;