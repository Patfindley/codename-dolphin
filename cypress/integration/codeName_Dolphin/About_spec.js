describe('About', () => {
  beforeEach(() => {
    cy.visit('')
    .get("[data-cy='about-link']").click()
  })

  it("Should be at /about path", () => {
    cy.url().should('include', '/about')
  })

  it("Should display directions on how to use app", () => {
    cy.get("[data-cy='how-to']")
    .children("[data-cy='list-item']")
  })

  it('Should have clickable link to synth', () => {
    cy.get(".to-synth").click()
  })

  it('Should list contributors', () => {
    cy.get("[data-cy='contributors']")
    .children("[data-cy='contributor']")
  })

 

})  