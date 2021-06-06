describe('Effects section', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').click()
    cy.viewport(1920, 975) 
  });

  it('should allow the user to adjust filter effects', () => {
    cy.visit('/synth');
    cy.get('[name="lpfilter"]:input').as('filter');
    cy.get('@filter').should('have.value', 1200).invoke('val', 8000).trigger('change')
    cy.get('@filter').should('have.value', 8000)
  });

  it('should allow the user to adjust volume effects', () => {
    cy.visit('/synth');
    cy.get('[name="volume"]:input').as('volume');
    cy.get('@volume').should('have.value', -20).invoke('val', -9).trigger('change')
    cy.get('@volume').should('have.value', -9)
  });

  it('should allow the user to adjust pitch effects', () => {
    cy.visit('/synth');
    cy.get('[name="detune"]:input').as('pitch');
    cy.get('@pitch').should('have.value', 0).invoke('val', 1200).trigger('change')
    cy.get('@pitch').should('have.value', 1200)
  });

  it('should allow the user to adjust distortion effects', () => {
    cy.visit('/synth');
    cy.get('[name="distortion"]:input').as('anger');
    cy.get('@anger').should('have.value', 0).invoke('val', 100).trigger('change')
    cy.get('@anger').should('have.value', 100)
  });

});
