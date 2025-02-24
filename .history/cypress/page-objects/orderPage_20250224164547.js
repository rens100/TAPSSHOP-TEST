import { faker } from "@faker-js/faker";

const firstNameField = "#billing_first_name";
const lastNameField = "#billing_last_name";
const companyNameField = "#billing_company";
const countryDropdown = "#billing_country";
const address1Field = "#billing_address_1";
const address2Field = "#billing_address_2";
const postcodeField = "#billing_postcode";
const cityField = "#billing_city";
const phoneField = "#billing_phone";
const emailField = "#billing_email";
const ordersComments = "#order_comments";
const buyAndPayButton = "#place_order";
const countryDropdownPoland = "Polska";

class OrderPage {
  fillAllRequiredFields() {
    cy.get(firstNameField).type(faker.name.firstName());
    cy.get(lastNameField).type(faker.name.lastName());
    cy.get(companyNameField).type(faker.company.name());
    cy.get(countryDropdown).select(countryDropdownPoland, { force: true });
    cy.get(address1Field).type(faker.address.streetAddress());
    cy.get(address2Field).type(faker.address.buildingNumber());
    cy.get(postcodeField).type(faker.address.zipCode("##-###"));
    cy.get(cityField).type(faker.address.city());
    cy.get(phoneField).type(faker.phone.number("48#########"));
    cy.get(emailField).type(faker.internet.email());
  }

  clickBuyAndPayButton() {
    cy.get(buyAndPayButton).click();
  }

  checkOrderFinished() {
    cy.get("p")
      .contains("Dziękujemy. Otrzymaliśmy Twoje zamówienie.", {
        timeout: 15000,
      })
      .should("be.visible");
  }
}

export default OrderPage;
