Cypress.Commands.add('addData', (randData) => {
    cy.fixture("data.json").then((data) => {
        data.name = randData;
        data.email = `${randData}@gmail.com`;
    }).as("data");
});

Cypress.Commands.add('createUser', (data) => {
    cy.request({
        url: "/",
        method: "POST",
        body: data,
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});

Cypress.Commands.add('getUser', (id) => {
    cy.request({
        url: `/${id}`,
        method: "GET",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});

Cypress.Commands.add('deleteUser', (id) => {
    cy.request({
        url: `/${id}`,
        method: "DELETE",
        headers: {
            accept: "application/json",
            "content-type": "application/json",
            authorization: `${Cypress.env("Token")}` 
        }
    });
});