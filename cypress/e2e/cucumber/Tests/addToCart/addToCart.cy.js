import { Given, When , Then } from "cypress-cucumber-preprocessor/steps";
import addToCartActions from "../../../pageObjects/addToCart/actions.cy";
import addToCartAssertions from "../../../pageObjects/addToCart/assertions.cy";
import sharedActions from "../../../pageObjects/shared/actions.cy";
import sharedAssertions from "../../../pageObjects/shared/assertions.cy";

const productName = "shirt"
const productQty = "3"
const cartActions = new addToCartActions();
const cartAssertions = new addToCartAssertions()
const sharedAction = new sharedActions();
const sharedAssertion = new sharedAssertions()

Given('The user navigate to magento website',()=>{
    sharedAction.visitToMagentoWebsite();
})

When('The user type in search input field the product name',()=>{
    cartActions.typeInSearchInputField(productName)
})

When('Click on search icon button',()=>{
    cartActions.clickOnSearchButton();
})

When('Choose the product',()=>{
    cartActions.chooseTheProduct()
})

When('Choose the size and color and qty for the product',()=>{
    cartActions.chooseTheProductSize().chooseTheProductColor().chooseTheProductQty(productQty)
})

When('Click on Add to cart button',()=>{
    cartActions.clickOnAddToCartButton();
})

Then('A Success message {string} will shown',(message)=>{
    sharedAssertion.checkMessageIsContain(message)
})

Then('The counter should increase by the qty added',()=>{
    cartAssertions.checkCounterIsVisible().checkCounterIsContain(productQty)
})