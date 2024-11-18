/// <reference types="cypress"/>

// 1-  describe-it 
// 2- gherkin - cucumber 

// desdle,f 

/** */

/**
 * 1-testing
 * 2-Qa
 * 3-Manual 
 * 
 */

/**
 * 1- open the sign in page 
 * 2- type in email input field 
 * 3- type in password input field 
 * 4- click on sign in button 
 * the user will redirected to my account page 
 */


describe('Check login functionality', () => {

    beforeEach(() => {
        cy.log("my before each")
        cy.visit("/");
    });

    before(()=>{
        cy.log("This is before")
        let email = "CypressUser@gmail.com"; 
        let password = "test@123"; 
        // cy.loginToMagento(email,password)
    })
   
    it('Validate that the user can login to website', () => {
        // cypress commands 
        cy.visit("/customer/account/login")
        cy.get("#email").type("CypressUser@gmail.com")
        cy.get("[title=Password]").type("test@123")
        // cy.get("#send2").click()
        cy.contains("Sign In") // get the first element 
        // cy.pause()
        cy.contains("button","Sign In").click() // get first specific element 
        // cy.screenshot({capture:"fullPage"})
        // cy.screenshot({capture:"runner"})
        // cy.screenshot({capture:"viewport"})
        cy.get(".page-title").should("contain","My Account")
        cy.url().should('eq',"https://magento.softwaretestingboard.com/customer/account/")

    });

    it('cypress commands', () => {
        // cy.get("li.level-top").first().next()
        // cy.get("li.level-top").last()
        // cy.get("li.level-top").eq(2).prev()
        // cy.contains("strong","Get fit and look").prev()
        // cy.contains("strong","Get fit and look").next()

        // cy.get("li").filter(".authorization-link")
        // cy.get("li").not(".authorization-link")

        // cy.get("li.level-top").find("a").contains("Sale")

        cy.get(".content.bg-white").first().find(".title")
        cy.contains("strong","Get fit and look").parent()
        
        
    });

    it('Assertions', () => {
        cy.get('.actions > .action').should("be.disabled")
        cy.get(".logo").should("be.visible")
        // cy.get(".counter").last().should("not.be.visible")
        cy.get(".counter").last().should("be.hidden").and("exist") 
        cy.get("#search").type("bag")
        cy.get('.actions > .action').should("be.enabled")

        cy.get("#search").should("have.value","bag")  // with inputs 
        cy.get(".info").first().should(".text","New Luma Yoga Collection") // any element 
        cy.get(".info").first().should("contain","New Luma Yoga") // any element 
        // cy.get(".counter").last().should("exist")

        cy.get(".copyright").should("have.css","background-color",'rgb(110, 113, 110)')

    });

    it('expect-command', () => {
        // cy.wait(1000)
        cy.get('.actions > .action').then((element)=>{
            expect(element).to.be.disabled
        })

        cy.get(".logo").then((logo)=>{
            expect(logo).to.be.visible 
        })

        cy.get(".copyright").then((para)=>{
            expect(para).to.have.css("background-color","rgb(110, 113, 110)")
        })
    });

     // after(()=>{
    //     cy.log("This is after all hook")
    // })
    
    // afterEach(()=>{
    //     cy.log("This is after each test case")
    // })
    
});

