describe('testing Login', () => {
  /**
   * 1. not input email and password
   * 2. valid input email and input wrong password
   * 3. input wrong email and valid input password
   * 4. valid input email and password
   */

  // negative scanario
  it('not input email and password', () => {
    cy.visit('/')
    cy.get('.oxd-button').click()
    cy.contains('Required');
  })

  it('valid input email and input wrong password', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[placeholder="Password"]').type('admin_123')
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials');
  })
  
  it('wrong input email and valid input password', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type('Admin333')
    cy.get('input[placeholder="Password"]').type('admin123')
    cy.get('.oxd-button').click()
    cy.contains('Invalid credentials');
  })

  // positve scanario
  it('input email and password', () => {
    cy.visit('/')
    cy.get('input[placeholder="Username"]').type('Admin')
    cy.get('input[placeholder="Password"]').type('admin123')
    cy.get('.oxd-button').click()
  })

})