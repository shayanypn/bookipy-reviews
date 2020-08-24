describe('E2E test', () => {

  it('Filtering', () => {
    cy.visit('/')

    cy.get('h4').should('have.text', 'ID: 091021');
    cy.get('h2').should('have.text', '30 Reviews');

    cy.get('section > article').first().find('header .badge').click();
    cy.get('h2').should('have.text', '7 Reviews');

    cy.get('section > article').last().find('header img').click();
    cy.get('h2').should('have.text', '2 Reviews');

    cy.get('#filter .btn').first().find('.badge').click();
    cy.get('h2').should('have.text', '11 Reviews');
  })
})
