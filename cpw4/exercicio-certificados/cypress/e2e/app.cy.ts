describe("Testes e2e no app de certificados da Feciaq 2022", () => {
  it("passes", () => {
    cy.visit("");
  });
  it("Verifica se o botão 'Baixar Relatório' está habilitado", () => {
    cy.get("#menu").click();
  });

  /*
  // Prepare interceptor to get response after click on download button
  cy.intercept("file").as("incidentPdfReport");
  // Click on download button
  cy.get("[data-test=reportDownload]").click();
  // Interceptor waiting when response will come and file is completely downloaded
  cy.wait("@incidentPdfReport", { timeout: 20000 }).then((res) => {
    const downloadsFolder = Cypress.config("downloadsFolder");
    // grab filename from 'content-disposition' header
    const filename = res.response.headers["content-disposition"].split("filename=")[1];
    const downloadedFilename = path.join(downloadsFolder, filename);
    cy.readFile(downloadedFilename, "binary", { timeout: 15000 }).should(
      (buffer) => {
        expect(buffer.length).to.be.gt(100);
      }
    );
    cy.log(`**File ${filename} exists in downloads folder**`);
    cy.readFile(downloadedFilename).should((text) => {
      const lines = text.split("\n");
      expect(lines).to.have.length.gt(2);
      expect(lines[0]).to.equal("%PDF-1.4");
    });
  });*/
});
