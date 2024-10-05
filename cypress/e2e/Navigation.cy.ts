describe("Navigation Test", () => {
  const routes = [
    { path: "", name: "Hola, Bienvenido!" },
    { path: "/about", name: "Sobre mí" },
    { path: "/about/experience", name: "Experiencias" },
    { path: "/about/projects", name: "Proyectos" },
    { path: "/about/technologies", name: "Tecnologías" },
    { path: "/about/education", name: "Educación" },
  ];

  routes.forEach(({ path, name }) => {
    it(`should navigate to ${name} page`, () => {
      cy.visit(path);
      cy.url().should("eq", Cypress.config().baseUrl + "/es" + path);

      cy.contains(name).should("exist");
    });
  });
});
