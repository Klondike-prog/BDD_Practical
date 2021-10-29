
class AddStage {
    static createStage() {
        cy.wait(2000)
        cy.get(".p-button.p-component.rnd-btn").contains("New Stage").click()

    }
    static fillDataStage() {
        cy.wait(2000)
        cy.get(".p-inputtext").eq(1).clear()
        cy.get(".p-inputtext").eq(1).type("Hi I am a new stage", {
            delay: 100
        });
        cy.get(".p-inputtext").eq(2).clear()
        cy.get(".p-inputtext").eq(2).type("100", {
            delay: 100
        })
    }
    static saveStage() {
        cy.get(".p-button-label").contains("Save").click()

    }
    static validateStage() {
        cy.wait(3000)
        cy.get(".stage").contains("(100p) Hi I am a new stage")
        cy.get(".stage-selector").its("length").should("eq", 1)
    }
}
export default AddStage