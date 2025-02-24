class Urls {
    visitHomePage() {
        const url =  '/'
        cy.visit(url)
    }

    visitAccountPage() {
        const url =  '/moje-konto'
        cy.visit(url)
    }
}
export default Urls;
