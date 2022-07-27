import "cypress-real-events/support";

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

describe('key integrations hover link is valid', () => {
  it('key integrations hover link is valid', () => {
    cy.visit('https://www.paperlessparts.com')
      .get('a') // get all links
      .contains('Products') // find the ones with the text 'Products'
      .realHover('mouse')
      // .get('menu-item')
      // .trigger('mouseover')
      // .click()
  })
})

describe('check footer for address', () => {
  it('check footer for address', () => {
    cy.visit('https://www.paperlessparts.com')
      // .get('footer')
      .contains('footer', '205 Portland Street, Level 6')
  })
})