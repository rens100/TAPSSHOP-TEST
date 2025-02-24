import Urls from "./urls";

const usernameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';


class AccountPage {

    visitMyAccountPage() {
        const urls = new Urls();
        urls.visitMyAccountPage();
    }
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