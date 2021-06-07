describe('About', () => {
  beforeEach(() => {
    cy.visit('')
    .get("[data-cy='about-link']").click()
  })

  it("Should be at /about path", () => {
    cy.url().should('include', '/about')
  })


})  