describe('Scene Render', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').click()
  });
  
  it('should be rendered on http://localhost:3000/synth', () => {
    cy.url().should('eq', 'http://localhost:3000/synth' )
  });
