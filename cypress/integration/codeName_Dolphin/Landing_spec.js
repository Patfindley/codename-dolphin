import { CylinderBufferGeometry } from "three"

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should have title "Fuck It Up', () => {
    cy.get(".landing-title")
    .contains(" Fuck It Up ")
  })
 
})
