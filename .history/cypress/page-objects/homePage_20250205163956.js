import Urls from "./urls";


class HomePage {
  clickCheckboxTab() {
    cy.get(checkboxHeader).click();
  }

  clickDatepickerTab() {
    cy.get(datepickerHeader).click();
  }
  clickHoversTab() {
    cy.get(hoversHeader).click();
  }
  clickInputsTab() {
    cy.get(inputsHeader).click();
  }
  clickBasicauthTab() {
    cy.get(basicauthHeader).click();
  }
  clickFormTab() {
    cy.get(formHeader).click();
  }
  clickDropdownListTab() {
    cy.get(dropdownlistHeader).click();
  }
  clickKeypressesTab() {
    cy.get(keypressesHeader).click();
  }
  clickDraganddropTab() {
    cy.get(draganddropHeader).click();
  }
  clickAddremoveelementsTab() {
    cy.get(addremoveelementsHeader).click();
  }
  clickStatuscodesTab() {
    cy.get(statuscodesHeader).click();
  }
  clickIframeTab() {
    cy.get(iframeHeader).click();
  }

  visitPage() {
    const urls = new Urls();
    urls.visitHomePage();
  }
}

export default HomePage;
