import Urls from "./urls";

const usernameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';


class AccountPage {
    fillUserNameFieldWithEmail() {
        cy.get(usernameEmailField).e
    }

}

