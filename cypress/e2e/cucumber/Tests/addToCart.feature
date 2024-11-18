@smoke_test @add_to_cart @ssTeam
Feature: Add to cart functionality

    @focus @TC-1234
    Scenario: Valiadate that the user can add product to cart sucessfully
        Given The user navigate to magento website
        When The user type in search input field the product name
        And Click on search icon button
        And Choose the product
        And Choose the size and color and qty for the product
        And Click on Add to cart button
        Then A Success message "You added Circe Hooded Ice Fleece to your shopping cart." will shown
        And The counter should increase by the qty added

# @TC-456
# Scenario: test case 2