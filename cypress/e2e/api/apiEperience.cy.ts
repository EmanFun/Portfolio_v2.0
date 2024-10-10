import { Experience, Experiences } from "@/@types";

interface Response {
  data: Experiences;
}

describe("Api EP Experience e2e", () => {
  const baseUrl = "http://localhost:3000/api";

  it("should return valid data for Get /api/experience", () => {
    cy.request<Response>(`${baseUrl}/experience`).then((response) => {
      expect(response.status).to.eq(200);

      const body = response.body;

      expect(body).to.have.property("data").and.to.be.an("array");

      expect(body.data.length).to.be.gte(1);

      body.data.forEach((item: Experience) => {
        expect(item).to.have.property("_id").and.to.be.a("string");

        expect(item).to.have.property("company").and.to.be.a("string");

        expect(item).to.have.property("responsibilities").and.to.be.a("string");
        expect(item.responsibilities.length).to.be.gte(15);

        expect(item).to.have.property("frontTechs").and.to.be.an("array");
        item.frontTechs.forEach((tech) => {
          expect(tech).to.be.a("string");
        });

        expect(item).to.have.property("backTechs").and.to.be.an("array");
        item.backTechs.forEach((tech) => {
          expect(tech).to.be.a("string");
        });
      });
    });
  });
});
