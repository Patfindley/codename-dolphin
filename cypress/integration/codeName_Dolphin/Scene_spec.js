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

  const fn = () => {
    let effect = document.getElementById('bend')
    
    return 
  }

  it.only('should should move the dolphin with bendyness', () => {
    cy.get('div').get('.dolphin-container')
      .should('have.attr', 'style', 'transform: translate(-120px, 0px) scale(1.0048, 1.0048);')
    cy.get('section').get('.effects-section').get('[name="detune"]').within(() => {
      cy.get('input').invoke('val', 1200).trigger('change')
      .trigger('mousedown', { button: 0, which: 1, pageX: 100, pageY: 100 })
      .trigger('mousemove', { button: 0, which: 1, pageX: 600, pageY: 600 })
      .trigger('mouseup', { which:1, button: 0, force: true})
      // cy.get('input').invoke('val', 1200).trigger('change')
    })
    // .get('div').get('.dolphin-container')
    //   .should('have.attr', 'style', 'transform: translate(-120px, -200px) scale(1.0048, 1.0048);')
  });

  // it('should render the list view', () => {
  //   cy.contains('h1', 'Feeture🦶🏼Films')
  //   cy.get('.card').should('have.length', 8);
  //   cy.get('.card').should('have.attr', 'href')
  //   cy.get('.movies-container').get('#694919').get('[alt="Money Plane"]')
  // });

  // it('should control mouse state for hover effects', () => {
  //   cy.get('.movies-container').get('#694919').trigger('mouseenter')
  //     .should('have.css', 'visibility', 'visible');
  //  });
});

// describe('List View Not Loading', () => {
//   beforeEach(() => {
//     cy.visit('/')
//   });

//   it('should display a specific error message when fetch yields a 500 status', () => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       statusCode: 500
//     })
//       .visit('http://localhost:3000/')
//       .get('h2')
//       .contains('Something went wrong')
//   });

//   it('should display a specific error message when fetch yields a 404 status', () => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       statusCode: 404
//     })
//       .visit('http://localhost:3000/')
//       .get('h2')
//       .contains('Something went wrong')
//   });

//   it('should redirect the user when they access an invalid URL', () => {
//     cy.intercept('https://rancid-tomatillos.herokuapp.com/api/v2/movies', {
//       statusCode: 200
//     })
//       .visit('http://localhost:3000/foo')
//       cy.url().should('eq', 'http://localhost:3000/' )
//   })
// });