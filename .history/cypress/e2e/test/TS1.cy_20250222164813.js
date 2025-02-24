import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
describe('TS1: Test AccountPage ', () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  let userData;

  
  before(function () {
    cy.fixture('users.json').as('userData');
    cy.log(userData);
  });

  it('should login to the application', function () {
    cy.log(userData);

    homePage.visitPage();
    homePage.clickMyAccountButton();
    accountPage.fillUserNameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
  });

  it("should not login to the application", () => {});
});
