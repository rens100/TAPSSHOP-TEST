import Urls from "./urls";

const usernameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';


class AccountPage {
    fillUserNameFieldWithEmail(email) {
        cy.get(usernameEmailField).type(email);
    }

    fillPasswordField(password) {
        cy.get(passwordField).type(password);
    }
    clickLoginButton() {
        cy.get(loginButton).click();
    }

}

export default AccountPage;