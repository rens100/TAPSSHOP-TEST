import Urls from "./urls";

const myAccountButton = "#menu-item-100";
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]'

const Product = {
  HoodieWithZipper: 
}

class HomePage {
  clickMyAccountButton() {
    cy.get(myAccountButton).click();
  }
  visitPage() {
    const urls = new Urls();
    urls.visitHomePage();
  }
}
export default HomePage;
