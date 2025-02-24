import HomePage from "../../page-objects/homePage";
import AccountPage from "../../page-objects/myAccountPage";
describe('TS1: Test AccountPage ', function () {
  const homePage = new HomePage();
  const accountPage = new AccountPage();

  before(function () {
    // Ładujemy fixture i logujemy, by upewnić się, że dane są załadowane
    cy.fixture('users.json').then((data) => {
      // Logujemy dane, aby sprawdzić, czy zostały załadowane poprawnie
      cy.log(JSON.stringify(data));  // Zaloguj dane z pliku
      this.userData = data; // Prz
      //ypisz dane do this.userData
    });
  });



  // before(function () {
  //   cy.fixture('users.json').as('userData');
  // });

  it('should login to the application', function () {
    cy.log(userData);

    homePage.visitPage(); // visit home page
    homePage.clickMyAccountButton();
    accountPage.fillUserNameFieldWithEmail(this.userData.email);
    accountPage.fillPasswordField(this.userData.password);
    accountPage.clickLoginButton();
  });

  it("should not login to the application", () => {});
});
