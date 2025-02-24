import HomePage from "../../page-objects/homePage";
import AccountPage

from "../../page-objects/myAccountPage";
describe("should ", function () {

  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("https://simpletestsite.fabrykatestow.pl/");
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