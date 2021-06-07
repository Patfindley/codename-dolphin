
describe('Keyboard', () => {
  beforeEach(() => {
    cy.visit('/synth')
  })

  it('Should be at /synth path', () => {
    cy.url().should('include', '/synth')
  })

  it('Should respond to keyboard press', () => {
    cy.get('[note=F4]')
    .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.847)')
    .get('[note=F4]')
    .trigger('keydown', { keyCode: 70})
    .should('not.have.css', 'background-color', 'rgba(255, 255, 255, 0.847)' )
  })

  it('Should respond to a click or touch', () => {
    cy.get('[note="D#4"]')
    .should('have.css', 'background-color', 'rgb(50, 58, 158)')
    cy.get('[note="D#4"]').click()
    .should('not.eq', 'background-color', 'rgb(50, 58, 158)' )
  })
  
  it('Should have a "Key Help" toggle', () => {
    cy.viewport('macbook-15')
    .get('p')
    .contains('Key Help')
  })

  it('Should have keys with visible note values', () => {
    cy.viewport('macbook-15')
    .get('[note="C4"]')
    .contains('A')
  })

  it('Should toggle key values on and off when clicked', () => {
    cy.viewport(1920, 975) 
    cy.get('[value=""]:button').click()
    cy.get('[note="C4"]')
    .should('have.text', '')
  })

  it("Should not respond to key presses not assigned to synth object", () => {
    cy.get('.keyboard')
    .trigger('keydown', {keycode: 90})
    .trigger('keydown', {keycode: 88})
    .trigger('keydown', {keycode: 67})
    cy.get('.keyboard'). within(() => {
      cy.get('.key')
      .should('have.css', 'background-color', 'rgba(255, 255, 255, 0.847)')
    })
  })

})
 
