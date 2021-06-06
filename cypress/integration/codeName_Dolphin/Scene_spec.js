describe('Scene Render', () => { 
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.get('h1').click()
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
    cy.get('main').get('.main').get('div').get('canvas')
      .should('have.attr', 'style', 'display: block; width: 1920px; height: 975.455px;')
  });

  // it.only('should should move the dolphin with bendyness', () => {
  //   cy.get('div').get('.dolphin-container')
  //     .should('have.attr', 'style', 'transform: translate(-120px, 0px) scale(1.0048, 1.0048);')
  //   cy.get('[name="detune"]:input').as('bendy')
  //     .should('have.value', 0).invoke('val', 1200).trigger('click') 
  //   cy.get('div').get('.dolphin-container')
  //     .should('have.attr', 'style', 'transform: translate(-120px, -200px) scale(1.0048, 1.0048);')
  // });
});
