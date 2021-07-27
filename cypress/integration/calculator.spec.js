describe("Calculator", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  })

  it('should have working number buttons', () => {
    cy.get('#number2').click();
    cy.get('.display').should('contain', '2')
  });

  // Do the number buttons update the display of the running total?
  it('number buttons update running total display', () => {
    cy.get('#number4').click();
    cy.get('#number0').click();
    cy.get('.display').should('contain', '40')
  });

  // Do the arithmetical operations update the display with the result of the operation?
  it('arithmetical operations updating display with operation result', () => {
    cy.get('#number3').click();
    cy.get('#operator-multiply').click();
    cy.get('#number3').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '9');
  });

  // Can multiple operations be chained together?
  it('can handle chained operations', () => {
    cy.get('#number2').click();
    cy.get('#operator-multiply').click();
    cy.get('#number2').click();
    cy.get('#operator_add').click();
    cy.get('#number4').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '8');
  });
   
  // Is the output as expected for a range of numbers (for example, positive, negative, decimals and very large numbers)?
  it('Able to handle negative numbers', () => {
    cy.get('#number1').click();
    cy.get('#operator-subtract').click();
    cy.get('#number9').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '-8')
  });

  it('Able to handle large numbers', () => {
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number8').click();
    cy.get('#number9').click();
    cy.get('#operator-multiply').click();
    cy.get('#number9').click();
    cy.get('#number9').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', "8871222")
  });

  it('Handle decimals', () => {
    cy.get('#number1').click();
    cy.get('#number5').click();
    cy.get('#operator-divide').click();
    cy.get('#number8').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', '1.875')
  });

// Exceptional circumstances, specifically divide by 0
  it('should show Error when dividing by 0', () => {
    cy.get('#number7').click();
    cy.get('#operator-divide').click();
    cy.get('#number0').click();
    cy.get('#operator-equals').click();
    cy.get('.display').should('contain', 'Error'); 
    // calculator displays "infinity"
});


})