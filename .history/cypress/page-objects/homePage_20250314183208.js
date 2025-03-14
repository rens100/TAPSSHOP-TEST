import Urls from "./urls";

const myAccountButton = "#menu-item-100";
const dataBlockNameNew = 'div[data-block-name="woocommerce/product-new"]';
const checkCartFromProductLevel = ".added_to_cart.wc-forward";
const bookmarkHomePage = "#menu-item-98";
const bookmarkBasket = "#menu-item-99";
const bookmarkMyAccount = "#menu-item-100";
const bookmarkOrder = "#menu-item-101";
const bookmarkShop = "#menu-item-102";
const bookmarkInvalidPage = "#menu-item-1568";
const bookmarkSiteHeaderCart = "#site-header-cart";
const mainImage = ".wp-block-cover__image-background.wp-image-89";
const logoImage = ".custom-logo-link";
const searchButton = "#woocommerce-product-search-field-0";
const clothingButton = ".woocommerce-loop-category__title";

class HomePage {
  clickMyAccountButton() {
    cy.get(myAccountButton).click();
  }

  addProductToCart(Polo) {
    cy.get(dataBlockNameNew).within(() => {
      cy.get(Polo.Locator).click();
    });
  }


  addProductToCart(HoodieWithZipper) {
    cy.get(dataBlockNameNew).within(() =>{
        cy.get(HoodieWithZipper.Locator).click()
    })
}

  clickGoToCartFromProductButton() {
    cy.get(dataBlockNameNew).within(() => {
      cy.get(checkCartFromProductLevel).click();
    });
  }

  checkVisibilityOfItemsInHomePage() {
    cy.get(logoImage).should("be.visible");
    cy.get(mainImage).should("be.visible");
    cy.get(searchButton).should("be.visible");
    cy.get(bookmarkHomePage).should("be.visible");
    cy.get(bookmarkBasket).should("be.visible");
    cy.get(bookmarkMyAccount).should("be.visible");
    cy.get(bookmarkOrder).should("be.visible");
    cy.get(bookmarkShop).should("be.visible");
    cy.get(bookmarkInvalidPage).should("be.visible");
    cy.get(bookmarkSiteHeaderCart).should("be.visible");
    cy.get("button").contains("Pokaż promocyjną promocję").should("be.visible");
  }
  visitPage() {
    const urls = new Urls();
    urls.visitHomePage();
  }

  checkAppVersion(appVersion) {
    cy.get(".site-info").contains(appVersion);
  }
}
export default HomePage;
