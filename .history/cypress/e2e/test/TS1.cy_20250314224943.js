import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
import CartPage from "../../page-objects/cartPage";
import { faker } from "@faker-js/faker";

describe("TS1: Test AccountPage", () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  const cartPage = new CartPage();

  before(function () {
    cy.fixture("users.json").as("userData");
    cy.fxture("items.json").as("itemsData");
  });

  // it("should login to the application", function () {
  //   homePage.visitPage();
  //   homePage.clickMyAccountButton();
  //   accountPage.fillUserNameFieldWithEmail(this.userData.email);
  //   accountPage.fillPasswordField(this.userData.password);
  //   accountPage.clickLoginButton();
  //   accountPage.checkVisibilityOfMyAccountNavigation();
  // });

  // it("should not login to the application", function () {
  //   accountPage.visitPage();
  //   accountPage.fillUserNameFieldWithEmail(faker.internet.email());
  //   accountPage.fillPasswordField(faker.internet.password());
  //   accountPage.clickLoginButton();
  //   accountPage.checkVisibilityOfErrorAfterWrongLogin();
  // });

  it("should add product to cart and delete it from there", function () {
    homePage.visitPage();
    homePage.addProductToCart((this.i););
    homePage.clickGoToCartFromProductButton();
    cartPage.checkThatAddedProductIsInCart();
    cartPage.removeItemFromCart();
    cartPage.checkThatCartIsEmpty();
  });
});
