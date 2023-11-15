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
///

Cypress.Commands.add('login', () => {
  cy.intercept('POST', new RegExp('/api/auth/login'), {
    "token": "cVw",
    "user": {
      "username": "admin",
      "admin": true
    }
  }).as('login')
  cy.visit('/gatehouse');
  cy.get('[data-cy="input-username"]').type('admin');
  cy.get('[data-cy="input-password"]').type('Password1');
  cy.get('[data-cy="submit-button"]').click();
  cy.wait('@login');
  cy.contains(`You are logged in as admin`);
});


