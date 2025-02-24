import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import BasisauthPage from "../../page-objects/basicAuthPage";
import FormPage from "../../page-objects/formPage";
import DropdownListPage from "../../page-objects/dropDownListPage";
import KeypressesPage from "../../page-objects/keyPressesPage";
import DragAndDrobPage from "../../page-objects/dragAndDropPage";
import AddRemovePage from "../../page-objects/addRemovePage";
import StatusCodesPage from "../../page-objects/statusCodesPage";
import IFramePage from "../../page-objects/iFramePage";
import DatePickerPage from "../../page-objects/datepickerPage";

describe("should automate the websites", function () {
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

    it("test datepickerTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickDatepickerTab();

      const datePickerPage = new DatePickerPage();
      datePickerPage.setRandomDate();
    });

    it("test inputTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickInputsTab();

      const inputPage = new InputPage();
      inputPage.typeNumberIntoField();
      inputPage.typeLetterIntoField();
    });

    it("test hoversTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickHoversTab();

      const hoversPage = new HoversPage();
      hoversPage.hoversFirstFigure();
    });

    it("test basisAuthTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickBasicauthTab();

      const basisauthPage = new BasisauthPage();
      basisauthPage.checkNegativeCase();
      basisauthPage.checkPositiveCase();
    });

    it("test formTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickFormTab();

      const formPage = new FormPage();
      formPage.fillFieldsWithValidData();
      formPage.doNotFillAllFields();
    });

    it("test dropDownTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickDropdownListTab();

      const dropdownListPage = new DropdownListPage();
      dropdownListPage.selectOption();
    });

    it("test keypressesTab", () => {
      const homePage = new HomePage();
      homePage.visitPage();
      homePage.clickKeypressesTab();

      const keypressesPage = new KeypressesPage();
      keypressesPage.checkPressButton();
      keypressesPage.checkRandomButton();
    });
  it("test dragAndDropTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickDraganddropTab();

    const dragAndDropPage = new DragAndDrobPage();
    dragAndDropPage.moveColumnAToColumnB();
    dragAndDropPage.moveColumnBToColumnA();
  });

  it("test addRemoveTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickAddremoveelementsTab();

    const addRemovePage = new AddRemovePage();
    addRemovePage.addElementAndDelete();
    addRemovePage.addMoreElementsAndDeleteThem();

  });

  it("test statusCodesTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickStatuscodesTab();

    const statusCodesPage = new StatusCodesPage();
    statusCodesPage.checkIsStatusVisible();
    statusCodesPage.checkIsLinkStatusCorrect();
  });

  it("test iFrameTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickIframeTab();

    const iFramePage = new IFramePage();
    iFramePage.checkIsButton1VisibleAndHasCorrectTextAfterClick();
    iFramePage.checkIsButton2VisibleAndHasCorrectTextAfterClick();
  });
});