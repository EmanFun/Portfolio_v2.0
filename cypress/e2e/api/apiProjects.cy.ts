import { Project, Projects } from "@/@types";

interface Response {
  data: Projects;
}

describe(`Api EP Projects e2e`, () => {
  const baseUrl = "http://localhost:3000/api";

  it("should return valid data for Get /api/projects", () => {
    cy.request<Response>(`${baseUrl}/projects`).then((response) => {
      expect(response.status).to.eq(200);

      const body = response.body;

      expect(body).to.have.property("data").and.to.be.an("array");

      expect(body.data.length).to.be.gte(1);

      body.data.forEach((item: Project) => {
        expect(item).to.have.property("id").and.to.be.a("string");

        expect(item).to.have.property("title").and.to.be.a("string");

        expect(item).to.have.property("rol").and.to.be.a("string");
        expect(item).to.have.property("link");
        expect(item).to.have.property("description").and.to.be.a("string");
      });
    });
  });
});
