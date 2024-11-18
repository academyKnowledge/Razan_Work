class sharedActions {
    visitToMagentoWebsite(){
        cy.visit("/");
        return this;
    }
}

export default sharedActions;