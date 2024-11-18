class sharedAssertions {
    checkMessageIsContain(message){
        cy.get("[role=alert]").should("contain",message) 
        return this;
    }
}
export default sharedAssertions;