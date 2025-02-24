import {Product} from "./homePage";

const productName = '.product-name';
const removeItemButton = '.remove';
const emptyCartAlert = '.woocommerce-message';
const goToPaymentsButton= '.wc-proceed-to-checkout';



class CartPage {

    checkThatAddedProductIsInCart() {
        cy.get(productName).contains(Product.HoodieWithZipper.Name).should('exist');
    }

    removeItemFromCart() {
        cy.get(removeItemButton).click()
    }

    checkThatCartIsEmpty() {
        cy.get(emptyCartAlert).should('exist');
    }

    click

}

export default CartPage;