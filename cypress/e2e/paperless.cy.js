describe('test front page loads', () => {
  it('loads', () => {
    cy.visit('https://www.paperlessparts.com')
  })
})

describe('home page has free demo link', () => {
  it('free demo link on front page', () => {
    cy.visit('https://www.paperlessparts.com')
      .get('a')
      .contains('Book Free Demo')
  })
})

