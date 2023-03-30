describe('login-URL', () => {
  beforeEach(() => {
    cy.visit('https://www.google.com/')
  })

  // tase case 1
  it('Visit URL goggle', () => {
    // cy.visit('https://www.google.com/')
  })

  // tase case 1
  // it('Visit URL login', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.title().should('eq', 'OrangeHRM')
  //   cy.contains('Login').should('be.visible')
  // })

  // tase case 3
  // it('create admin', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

  //   cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('Admin')
  //   cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input').type('admin123')
  //   cy.get('.oxd-button').click()
  //   cy.get(':nth-child(1) > .oxd-main-menu-item').click()
  //   cy.get('.orangehrm-header-container > .oxd-button').click()
  //   cy.get('')
  // })
})