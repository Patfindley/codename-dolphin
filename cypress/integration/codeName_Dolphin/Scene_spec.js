describe('Scene Render', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').click()
    cy.viewport(1920, 975) 
  });
  
  it('should be rendered on http://localhost:3000/synth', () => {
    cy.url().should('eq', 'http://localhost:3000/synth' )
  });
  it('should render the effects section', () => {
    cy.get('section').get('.effects-section')
      .should('be.visible')
  });

  it('should render the keyboard', () => {
    cy.get('div').get('.keyboard')
      .should('be.visible')
  });
  
  it('should render the dolphin', () => {
    cy.get('div').get('.dolphin-container')
    .should('have.css', 'position', 'absolute')
    cy.get('div').get('.dolphin-container').get('img')
      .should('have.css', 'position', 'relative')
  });
  
  it('should render the main section', () => {
    cy.viewport(1920, 975) 
    cy.get('main').get('.main')
      .should('have.css', 'z-index', '-100')
  });

  it('should move the dolphin when the value changes', () => {
    cy.visit('/synth');
    cy.get('[name="lpfilter"]:input').as('filter');
    cy.get('.dolphin-container').as('dolphin');
    cy.get('@dolphin').invoke('attr', 'style').should('eq', 'transform: translate(-120px, 0px) scale(1.0048, 1.0048);')
    cy.get('@filter').should('have.value', 1200).invoke('val', 10000).trigger('change')
    cy.get('@dolphin').invoke('attr', 'style').should('not.eq', 'transform: translate(-120px, 0px) scale(1.0048, 1.0048);')
  });

});
