import { CylinderBufferGeometry } from "three"

describe('Landing', () => {
  beforeEach(() => {
    cy.visit('')
  })

  it('Should have title "Fuck It Up', () => {
    cy.get(".landing-title")
    .contains(" Fuck It Up ")
  })

  it('Should have hidden Dolphin image', () => {
    cy.get(".dolphin-title")
    .should("have.css", "opacity", '0')
  })

  it('Should have clickable link in title', () => {
    cy.get(".landing-title").click()
  })


})
