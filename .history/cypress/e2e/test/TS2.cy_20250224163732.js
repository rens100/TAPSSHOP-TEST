import HomePage from "../../page-objects/homePage";
import CartPage from "../../page-objects/cartPage";
import OrderPage from "../../page-objects/orderPage";

describe("TS2: Test OrderPage", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  before(function () {
    cy.fixture("items.json").as("itemsData");
  });

  it("should order one product from shop", function () {
    homePage.visitPage();
    homePage.addProductToCart(this.itemsData.HoodieWithZipper);
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart(this.itemsData.HoodieWithZipper);
    cartPage.clickGoToPaymentsButton();
    orderPage.fillAllRequiredFields();
    orderPage.clickBuyAndPayButton();
    orderPage.checkOrderFinished();
  });

  it("should order few products from shop", function () {
    homePage.visitPage();
    homePage.addProductToCart(this.itemsData.HoodieWithZipper);
    
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart(this.itemsData.HoodieWithZipper);
    cartPage.clickGoToPaymentsButton();
    orderPage.fillAllRequiredFields();
    orderPage.clickBuyAndPayButton();
    orderPage.checkOrderFinished();
  });


});
