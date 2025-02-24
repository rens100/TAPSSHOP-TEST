import Urls from "./urls";

const usernameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';


class AccountPage {
    fillUserNameFieldWithEmail(email) {
        cy.get(usernameEmailField).type(email.type);

    }

}

export default AccountPage;