class addToCartAssertions {
    checkCounterIsContain(productQty){
        cy.get(".counter-number").should('contain',productQty)
        return this;
    }

    checkCounterIsVisible(){
        cy.get(".counter-number").should("be.visible")
        return this;
    }
}
export default addToCartAssertions;