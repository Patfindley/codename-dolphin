
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('')
    .get(".landing-container")
    .click()
  })

  it('Should be at /synth path', () => {
    cy.url().should('include', '/synth')
  })

  
 
})