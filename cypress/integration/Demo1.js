/// <reference types="cypress"/>
describe("Mochawesome Test Suite", function () {
  it("Mochawesome Demo", function () {
    console.log("Open the URL");
    cy.visit("https://nj.ballycasino.stg.pp21.pgt.gamesysgames.com/");
    cy.get(
      '[data-qa="top-menu__button-show-login"] > .MuiButton-label'
    ).click();
    cy.get('[data-qa="login-form-step-one__input-username"]').type("spbally02");
    cy.get('[data-qa="login-form-step-one__input-password"]').type(
      "Password1!"
    );
    cy.get(
      '[data-qa="login-form-step-one__button-next"] > .MuiButton-label'
    ).click();
    cy.wait(6000);
    cy.get("button.button-icon.overlay-button-close").click();
    //Validation of slot games click
  });
});
