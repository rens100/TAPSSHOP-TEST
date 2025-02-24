import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
describe("TS1: Test AccountPage ", function () {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  before(function () {
    cy.fixturea("users.json").as("userData");
  });

  it("should login to the application", () => {
    homePage.visitPage(); // visit home page
    homePage.clickMyAccountButton();
    accountPage.fillUserNameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
  });

  it("should not login to the application", () => {});
});
