import { faker } from "@faker-js/faker";

const firstNameField = '#billing_first_name';
const lastNameField = '#billing_last_name';
const companyNameField = '#billing_company';
const address1Field =  '#billing_address_1';
const address2Field = '#billing_address_2';
const postcodeField = '#billing_postcode';
const cityField = '#billing_city';
const phoneField = '#billing_phone';
const emailField = '#billing_email';
const countryDropdownPoland = 'Polska';
const buyAndPayButton = '#place_order';


class OrderPage {
    fillAllRequiredFields() {
        cy.get(firstNameField).type(faker.name.firstName);
        cy.get(lastNameField).type(faker.name.lastName);
        cy.get(companyNameField).type(faker.name.companyName
}

export default OrderPage;