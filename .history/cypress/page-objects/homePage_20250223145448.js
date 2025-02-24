import Urls from "./urls";

const myAccountButton = '#menu-item-100';
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'
const checkCardFromProductLevel= '.added_to_cart wc-forward';
const Product = {
  HoodieWithZipper: {
    Locator: 'a[data-product_id="51"]',
    Name: 'Hoodie with Zipper'
  },
  Polo: {
    Locator: 'a[data-product_id="53"]',
    Name: 'Polo'
  },
  Sunglasses: {
    Locator: 'a[data-product_id="49"]',
    Name: 'Sunglasses'
  }
}


class HomePage {
  clickMyAccountButton() {
    cy.get(myAccountButton).click();
  }

  addProducttoCart() {
    cy.get(dataBlockNameNew).within(() =>)
  }
  visitPage() {
    const urls = new Urls();
    urls.visitHomePage();
  }
}
export default HomePage;
