import Urls from "./urls";

class HomePage {
  clickMyAccountButton() {
    cy.get(myAccountButton).click();
  }

  addProductToCart(Polo) {
    cy.get(dataBlockNameNew).within(() => {
      cy.get(Polo.Locator).click();
    });
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
