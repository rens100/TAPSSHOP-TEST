import HomePage from "../../page-objects/homePage";

describe("TS4: Test app version", () => {
  const homePage = new HomePage();

  it("should check app version", () => {
    homePage.visitPage();
    homePage.checkAppVersion("v. 2.1.7 2025");
  });
});
