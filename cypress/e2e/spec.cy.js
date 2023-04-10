describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://demoqa.com/automation-practice-form')
    cy.get('#hobbies-checkbox-1').click();
    });

  })
})