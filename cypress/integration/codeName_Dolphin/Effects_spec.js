describe('Effects section', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').click()
    cy.viewport(1920, 975) 
  });

  it('should allow the user to adjust effects', () => {
    cy.visit('/synth');
    cy.get('[name="lpfilter"]:input').as('filter');
    cy.get('@filter').should('have.value', 1200).invoke('val', 8000).trigger('change')
    cy.get('@filter').should('have.value', 8000)
  });

});
