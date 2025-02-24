import {Product} from "./homePage";

const productName = '.product-name';
const removeItemButton = '.remove';
const emptyCartAlert = '.woocommerce-message';
const goToPaymentsButton= '.wc-proceed-to-checkout';



class CartPage {

    // checkThatAddedProductIsInCart() {
    //     cy.get(productName).contains(Product.HoodieWithZipper.Name).should('exist');
    // }
    checkThatAddedProductIsInCart(products) {
        cy.
    }

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist');
    }

    clickGoToPaymentsButton() {
        cy.get(goToPaymentsButton).click();
    }

}

export default CartPage;