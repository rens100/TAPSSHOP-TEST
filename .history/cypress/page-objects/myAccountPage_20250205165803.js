import Urls from "./urls";

const usernameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';


class AccountPage {
    fillUserNameFieldWithEmail(email) {
        cy.get(usernameEmailField).type(email.type);
    }

    fillPasswordField(password) {
        cy.get(passwordField).type(password);
    }

}

export default AccountPage;