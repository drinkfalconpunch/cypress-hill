import "cypress-real-events/support"; // support for mouse hover

const url = 'https://www.paperlessparts.com'

// describe('test front page loads', () => {
//   it('loads', () => {
//     cy.visit(url)
//   })
// })

describe('home page has free demo link', () => {
  it('free demo link on front page', () => {
    // finds the first link with the text "Book Free Demo"
    cy.visit(url)
      .get('a')
      .contains('Book Free Demo')
  })

  it('key integrations hover link is valid', () => {
    cy.visit(url)
      .get('#menu-header') // XPath: "//*[@id="menu-header"]/li[1]/a"
      .realHover('mouse')
      .find('a')
      .contains('Key Integrations')
      .click({ force: true })
  })

  it('check footer for address', () => {
    cy.visit(url)
      .get('footer')
      .should('contain', '205 Portland Street, Level 6')
      // .contains('footer', '205 Portland Street, Level 6')
  })
})