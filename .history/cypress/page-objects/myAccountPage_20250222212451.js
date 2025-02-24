import Urls from "./urls";

const userNameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';
const bookmark = '#post-9"';


class AccountPage {

    
    fillUserNameFieldWithEmail(email) {
        cy.get(userNameEmailField).type(email);
    }

    fillPasswordField(password) {
        cy.get(passwordField).type(password);
    }
    clickLoginButton() {
        cy.get(loginButton).click();
    }

    checkVisibilityOfBookmark()

    visitPage(){
        const urls = new Urls();
        urls.visitMyAccountPage();
    }

}

export default AccountPage;