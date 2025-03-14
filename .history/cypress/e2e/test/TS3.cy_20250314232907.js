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

  it("should check all links on the Home Page", function () {
    cy.visit('/');
    cy.get('a').each(link => {
        if (link.prop('href')) {
            cy.request({
                url: link.prop('href'),
                failOnStatusCode: false  //when status code could be different than 2xx or 3xx)
            })
        cy.log(link.prop('href'));
        }
    });   
)
});
