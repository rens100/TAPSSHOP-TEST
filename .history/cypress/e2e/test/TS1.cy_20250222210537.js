import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
describe('TS1: Test AccountPage ', () => {
  const homePage = new HomePage();
  const accountPage = new AccountPage();
  
  before(function () {
    cy.fixture('users.json').as('userData');
  });

  it('should login to the application', function () {
    // Teraz użytkownik będzie dostępny jako this.userData
    cy.log(this.userData);

    homePage.visitPage();
    homePage.clickMyAccountButton();
    accountPage.fillUserNameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
  });
});
