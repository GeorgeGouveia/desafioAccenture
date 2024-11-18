import { elements as el } from "./elements"

class Formulario {

    visitarPagina(){
        cy.visit('https://demoqa.com/')
    }

    preencherFormulario(){

        cy.get(el.clicarForm).click()
        cy.get(el.clicarPraticeForm).click()
        cy.get(el.firstName).type("George")
        cy.get(el.lastName).type("Junior")
        cy.get(el.email).type("george@george.com")
        cy.get(el.gender).click()
        cy.get(el.mobile).type(5561982809277)
        cy.get(el.birthDate).type("10/11/2020{enter}")
        cy.get(el.subjects).type("teste teste")
        cy.get(el.hobbies).click()
        cy.get(el.fileUpload).attachFile("file.txt")
        cy.get(el.currentAdress).type("Address teste")
        cy.get(el.state).type("NCR{enter}")
        cy.get(el.city).type("Delhi{enter}")
        cy.get(el.submitForm).click()
        cy.get(el.popUpForm).should("be.visible")
        cy.get(el.closeForm).click({ force: true })
    }
}

export default new Formulario()