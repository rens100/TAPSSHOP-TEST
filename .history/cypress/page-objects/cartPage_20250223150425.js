import {Product} from "./homePage";

const productName = '.procutname';
const removeItemButton = '.remove';
const emptyCartAlert = '.cart-empty .woocomerce-info';



class CartPage {

    checkTahatAddedProductIsInCart() {
        cy.get(productName).contains(Product.)
    }

}

export default CartPage;