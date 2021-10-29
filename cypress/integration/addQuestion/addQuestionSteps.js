import {
    Given,
    When,
    Then
} from 'cypress-cucumber-preprocessor/steps'

import AddStage from "../addStage/AddStage"
import LoginPage from "../login/LoginPage"

Given("the user has already created a new stage.",()=>{
    LoginPage.visitPage()
    LoginPage.LogIn()
    LoginPage.validateProject()
    LoginPage.loadProject()
    AddStage.createStage()
    AddStage.fillDataStage()
    AddStage.saveStage()
    AddStage.validateStage()
})

When("the user interacts with New Question button for the specified stage.", () => {
    cy.wait(3000)

    cy.get(".stage").contains("Hi I am a new stage").click()
    cy.get(".stage-editor-header").contains("Hi I am a new stage")
    cy.get(".p-button").contains("New Question").click()
})
 And("the user inputs the correct data for every section .", () => {
    cy.contains(".question-container div", "Question:").find(".p-inputtextarea").clear().type("I am a NORMAL Question", {
        delay: 100
    })
    
    cy.contains(".question-container div", "Answer template:").find(".p-inputtextarea").clear().type("I am a NORMAL Answer", {
        delay: 100
    })
    cy.contains(".question-container div", "Solution:").find(".p-inputtextarea").clear().type("I am a NORMAL solution", {
        delay: 100
    })
 })
  And("the user interacts with Update Question button to save his progress.", () => {
    cy.get(".p-button").contains("Update Question").click()
 })
 Then("the user should successfully add a new question to the specified stage.", () => {
    cy.get(".p-button").contains("Delete Question").should("be.visible")
})