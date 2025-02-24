import HomePage from "../page-objects/homePage";
import CartPage from "../page-objects/cartPage";
import OrderPage from "../page-objects/orderPage";

describe("TS2: Test OrderPage ", () => {
  const homePage = new HomePage();
  const cartPage = new CartPage();
  const orderPage = new OrderPage();

  it("should order a product from shop", function () {
    homePage.visitPage();
    homePage.addProductToCart();
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
    cartPage.clickGoToPaymentsButton();
    orderPage.fillAllRequiredFields();
    orderPage.clickBuyAndPayButton();
    orderPage.checkOrderFinished();
  });
});
