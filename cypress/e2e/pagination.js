describe('E2E test', () => {
  it('Pagination', () => {
    cy.visit('/')


    cy.get('section > article').first().find('header h5')
      .should('have.text', 'Amazing Pool!');

    cy.get('nav ul li:eq(1)').click();

    cy.get('section > article').first().find('header h5')
      .should('have.text', 'Lovely finca');

    cy.get('nav ul li.active button').should('have.text', '2/6');

  })
})
