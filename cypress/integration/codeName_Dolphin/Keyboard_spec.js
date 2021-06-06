
describe('Landing', () => {
  beforeEach(() => {
    cy.visit('')
    .get(".landing-container")
    .click()
  })

  it('Should be at /synth path', () => {
    cy.url().should('include', '/synth')
  })

  it('Should respond to keyboard press', () => {
    cy.get('[note=F4]')
    .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.847)')
    .get('[note=F4]')
    .trigger('keydown', { keyCode: 70})
    .should('have.css', 'background-color', 'rgb(255, 0, 0)' )
  })

  
 
})