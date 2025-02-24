import HomePage from "../../page-objects/homePage";
import AccountPage

from "../../page-objects/myAccountPage";
describe("TS1: Test AccountPage ", function () {

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit();
  });

    it("test checkboxTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickCheckboxTab();

      const checkboxPage = new CheckboxPage();
      checkboxPage.checkFirstCheckbox();
      checkboxPage.checkSecondCheckbox();
    });

});