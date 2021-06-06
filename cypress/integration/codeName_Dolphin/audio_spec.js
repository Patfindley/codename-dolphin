describe('Web Audio', () => {
  it('should be supported by the browser', () => {
    cy.visit('/');
    cy.window()
      .should('have.property', 'BaseAudioContext')
      .should('be.a', 'function');
  });

  it('shows alert if the browser does not support WebAudio', () => {
    cy.visit('/', {
      onBeforeLoad(win) {
        delete win.BaseAudioContext;
      },
    });

    cy.on('window:alert', cy.stub().as('alerted'));
    cy.get('@alerted')
      .should('have.been.calledOnce')
      .and(
        'have.been.calledWith',
        "Sorry, this browser does not support Web Audio, which is required to use the instrument. You can still mess around but it probably won't be as fun. Anyways, have a great day! 🤠"
      );
  });

  it.skip('Check this out', () => {
    cy.visit('/synth');
    cy.get('.key').first().click();
    cy.wait(500);
    cy.get('[note=E4]').click();
    cy.wait(500);
    cy.get('[note=G4]').first().click();
    cy.wait(500);
    cy.get('[note=C5]').first().click();
    cy.wait(500);
    cy.get('[note=E5]').first().click();
    cy.wait(500);
    cy.get('[note=C5]').first().click();
    cy.wait(500);
    cy.get('[note=G4]').first().click();
    cy.wait(500);
    cy.get('[note=E4]').click();
    cy.wait(500);
    cy.get('.key').first().click();
  });
});
