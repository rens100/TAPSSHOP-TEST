import Urls from "./urls";

const myAccountButton = '#menu-item-100';

class HomePage {

    clickMyAccountButton() {
        cy.get(myAccountButton).click();
    }
    visitPage() {
        const urls = new Urls();
        urls.visitHomePage();
    }
}

