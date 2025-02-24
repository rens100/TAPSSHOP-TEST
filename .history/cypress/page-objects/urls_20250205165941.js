class Urls {
    visitHomePage() {
        const url =  '/'
        cy.visit(url)
    }

    visitAccountPage() {
        const url =  '/konto'
        cy.visit(url)
    }
}
export default Urls;
