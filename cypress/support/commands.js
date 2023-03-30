// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

// lgoin command
Cypress.Commands.add('login', (username, password) => {
  cy.visit('/')
  cy.get('input[placeholder="Username"]').type(username).should('be.visible')
  cy.get('input[placeholder="Password"]').type(password).should('be.visible')
  cy.get('.oxd-button').click()
})

// to job titles
Cypress.Commands.add('toJobTitles', () => {
  cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').click()
  cy.get(':nth-child(2) > .oxd-topbar-body-nav-tab-item').click()
  cy.get(':nth-child(1) > .oxd-topbar-body-nav-tab-link').click()
})

