import Urls from "./urls";

const userNameEmailField = '#username';
const passwordField = '#password';
const loginButton = 'button[value="Zaloguj się"]';
const myAccountNavigation = '.woocommerce-MyAccount-navigation';
const errorAfterWrongLogin = 'ul[role="alert"]';


class AccountPage {

    
    fillUserNameFieldWithEmail(email) {
        cy.get(userNameEmailField).type(;
    }

    fillPasswordField(password) {
        cy.get(passwordField).type(password);
    }
    clickLoginButton() {
        cy.get(loginButton).click();
    }

    checkVisibilityOfMyAccountNavigation() {
        cy.get(myAccountNavigation).should('be.visible');
    }

    checkVisibilityOfErrorAfterWrongLogin() {
        cy.get(errorAfterWrongLogin).should('be.visible');
    }   

    visitPage(){
        const urls = new Urls();
        urls.visitMyAccountPage();
    }

}

export default AccountPage;