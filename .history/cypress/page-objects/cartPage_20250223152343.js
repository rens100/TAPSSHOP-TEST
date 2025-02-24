import {Product} from "./homePage";

const productName = '.productname';
const removeItemButton = '.remove';
const emptyCartAlert = '.cart-empty.woocomerce-info';



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

}

export default CartPage;