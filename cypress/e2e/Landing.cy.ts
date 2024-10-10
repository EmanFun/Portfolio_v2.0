describe("Landing Page test", () => {
  const languages: any = {
    es: {
      url: "/es",
      buttonText: "Continuar",
      message: "Hola, Bienvenido!",
    },
    en: {
      url: "/en",
      buttonText: "Continue",
      message: "Hi, Welcome!",
    },
  };
  Object.keys(languages).forEach((lang: string) => {
    const { url, buttonText, message } = languages[lang];

    describe(`Testing in ${lang.toUpperCase()}`, () => {
      it(`should navigate to the correct URl for ${lang}`, () => {
        cy.visit(url);
        cy.url().should("eq", Cypress.config().baseUrl + "/" + lang);
      });

      it(`should display the correct Message for ${lang}`, () => {
        cy.visit(url);

        if (lang === "es") {
          cy.get("h1").should("have.text", message);
        } else {
          cy.get("h1").should("have.text", message);
        }
      });
      it(`should display the correct message button for ${lang}`, () => {
        cy.visit(url);
        cy.get("button").should("have.text", buttonText);
      });
    });
  });
});
