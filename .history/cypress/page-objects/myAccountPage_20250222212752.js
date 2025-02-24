import Urls from "./urls";

const userNameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';
const bookmark = '.woocommerce-MyAccount-navigation';


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

    checkVisibilityOfBookmark() {
        cy.get(bookmark).should('be.visible');
    }
        

    visitPage(){
        const urls = new Urls();
        urls.visitMyAccountPage();
    }

}

export default AccountPage;