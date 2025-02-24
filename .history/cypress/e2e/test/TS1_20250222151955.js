import HomePage from "../../page-objects/homePage";
import AccountPage

from "../../page-objects/myAccountPage";
describe("TS1: Test AccountPage ", function () {

  const homePage = new HomePage();
  const accountPage = new AccountPage();

  });

  before(function () {
    cy.fixture('users.json').as('userData');
    
  })

    it('should login to the application', () => {
      homePage.clickMyAccountButton(); 

      

    });

    it("should not login to the application", () => {

    });

});