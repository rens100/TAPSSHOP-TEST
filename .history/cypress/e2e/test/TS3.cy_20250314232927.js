import HomePage from "../../page-objects/homePage";

describe("TS3: Test HomePage", () => {
  const homePage = new HomePage();

  it("should items in the home page be visible", () => {
    homePage.visitPage();
    homePage.checkVisibilityOfItemsInHomePage();
  });

  it("should check app version", () => {
    homePage.visitPage();
    homePage.checkAppVersion("v. 2.1.7 2025");
  });

  



});
