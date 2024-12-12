describe("PetStore API - CRUD Operations on 'pet'", () => {
    const apiUrl = Cypress.env("baseUrl") || "https://petstore.swagger.io/v2";
    let petId;
  
    it("should create a unique pet", () => {
      const newPet = {
        id: Math.floor(Math.random() * 1000000), // Generate a unique ID
        name: "Fluffy",
        photoUrls: ["https://example.com/photo.jpg"],
        status: "available",
      };
  
      cy.request("POST", `${apiUrl}/pet`, newPet).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", newPet.id);
        expect(response.body).to.have.property("name", "Fluffy");
        expect(response.body).to.have.property("status", "available");
  
        petId = response.body.id; // Store pet ID for future tests
      });
    });
  
    it("should update the newly created pet", () => {
      const updatedPet = {
        id: petId,
        name: "Fluffy Updated",
        photoUrls: ["https://example.com/photo_updated.jpg"],
        status: "sold",
      };
  
      cy.request("PUT", `${apiUrl}/pet`, updatedPet).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", petId);
        expect(response.body).to.have.property("name", "Fluffy Updated");
        expect(response.body).to.have.property("status", "sold");
      });
    });
  
    it("should read the newly created pet", () => {
      cy.request("GET", `${apiUrl}/pet/${petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("id", petId);
        expect(response.body).to.have.property("name", "Fluffy Updated");
        expect(response.body).to.have.property("status", "sold");
      });
    });
  
    it("should delete the newly created pet", () => {
      cy.request("DELETE", `${apiUrl}/pet/${petId}`).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body).to.have.property("message", String(petId));
      });
  
      // Verify pet is deleted
      cy.request({
        method: "GET",
        url: `${apiUrl}/pet/${petId}`,
        failOnStatusCode: false, // Prevent test failure on non-200 status
      }).then((response) => {
        expect(response.status).to.eq(404);
      });
    });
  });