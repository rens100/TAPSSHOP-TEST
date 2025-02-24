import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
import { faker } from "@faker-js/faker";

describe("TS1: Test AccountPage ", () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  before(function () {
    cy.fixture("users.json").as("userData");
  });

  it("should login to the application", function () {
    homePage.visitPage();
    homePage.clickMyAccountButton();
    accountPage.fillUserNameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfMyAccountNavigation();
  });

  it("should not login to the application", () => {
    accountPage.visitPage();
    accountPage.fillUserNameFieldWithEmail(faker.internet.email);
    accountPage.fillPasswordField(faker.internet.);
    accountPage.clickLoginButton();
    accountPage.checkVisibilityOfErrorAfterWrongLogin();
  });
});
