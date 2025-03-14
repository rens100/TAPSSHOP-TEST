import { Product } from "./homePage";

const productName = ".product-name";
const removeItemButton = ".remove";
const emptyCartAlert = ".woocommerce-message";
const goToPaymentsButton = ".wc-proceed-to-checkout";

class CartPage {

  checkThatAddedProductIsInCart(Polo){
    cy.get(productName).contains(HoodieWithZipper.Name).should('exist')
}

  checkThatAddedProductIsInCart(Name) {
    cy.get(productName).type(Name)
  }
  removeItemFromCart() {
    cy.get(removeItemButton).click();
  }

  checkThatCartIsEmpty() {
    cy.get(emptyCartAlert).should("exist");
  }

  clickGoToPaymentsButton() {
    cy.get(goToPaymentsButton).click();
  }
}

export default CartPage;
