export function fillTheForm(cy) {
    return cy.get('input[name="name"]')
        .type("Molly")
        .should("have.value", "Molly");
}

export function fillTheForm2(cy) {
    return cy.get('input[name="email"]')
        .type("molly@dev.dev")
        .should("have.value", "molly@dev.dev");
}