describe('Landing', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should have title "GET DOWN WITH THE SYNTHNESS"', () => {
    cy.get("[data-cy='landing-title']")
    .contains("Get Down With The Synthness")
  })

  it('Should have hidden Dolphin image', () => {
    cy.get(".dolphin-title")
    .should("have.css", "opacity", '0')
  })

  it('Should have clickable link in title', () => {
    cy.get(".landing-title").click()
  })

  it('Should reveal a majestic dolphin leaping over title', () => {
    cy.get(".dolphin-title")
    .should("have.css", "opacity", '0')
    .get("[data-cy='landing-title']")
    .click()
    .should("have.css", "opacity", '1')
  }) 

  it('Should redirect to /synth', () => {
    cy.get("[data-cy='landing-title']")
    .click()
    .url().should('include', '/synth')
  })
})
