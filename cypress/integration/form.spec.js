import { fillTheForm, fillTheForm2 } from '../pages/form.js'; 

describe("Form test", () => {
	it("Can fill the form", () => {
		cy.visit("/");
		cy.get("form");

		fillTheForm(cy);
		fillTheForm2(cy);

		cy.get("textarea")
      			.type("Mind you if I ask some silly question?")
      			.should("have.value", "Mind you if I ask some silly question?");

		// Not mandatory anymore since Cypress 6.0, use .intercept() instead
		cy.server();
		cy.route({
			url: "/users/**",
			method: "POST",
			response: { status: "Form saved!", code: 201 }
		});
		// End comm

		cy.get("form").submit();

		cy.contains("Form saved!");
	});
});

