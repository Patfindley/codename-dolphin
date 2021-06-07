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
});
