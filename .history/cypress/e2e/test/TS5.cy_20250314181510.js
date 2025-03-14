import HomePage from "../../page-objects/homePage";

describe( "TS5: Links on the Home Page", function () {
    const homePage = new HomePage();

    it("should check all links on the Home Page", function () {
        cy.visit('/');
        cy.get('a').each(link => {
            if (link.prop('href')) {
                cy.request({
                    url: link.prop('href'),
                    failOnStatusCode: false  //when status code could be differen than 2xx or 3xx)
                })
            cy.log(link.prop('href'));
            }
        });    
    })
})