import { elements as el } from "./elements"

class Elements {

    visitarPagina(){
        cy.visit("https://demoqa.com/")
    }

    registroForm(){
        cy.get(el.cardElements).click()
        cy.get(el.webElements).click()
        cy.get(el.newAdd).click()
        cy.get(el.firstName).type("George")
        cy.get(el.lastName).type("Junior")
        cy.get(el.email).type("george@george.com")
        cy.get(el.age).type(30)
        cy.get(el.salary).type(20000)
        cy.get(el.department).type("TI")
        cy.get(el.submitButton).click()
        cy.get(el.editButton).click({ force: true })
        cy.get(el.submitButton).click()
        cy.get(el.deleteButton).click({ force: true })
    }

    registrarDozeUsuarios(){
        for (let i = 1; i <= 12; i++) {
        cy.get(el.newAdd).click();
        cy.get(el.firstName).type("George")
        cy.get(el.lastName).type("Junior")
        cy.get(el.email).type("george@george.com")
        cy.get(el.age).type(30)
        cy.get(el.salary).type(20000)
        cy.get(el.department).type("TI")
        cy.get(el.submitButton).click()
    }
    }
    deletarDozeUsuarios(){
        cy.get('select').select("25")
        for (let i = 4; i <= 15; i++) {
            
            cy.get("#delete-record-"+i).click({ force: true })
        }
    }
    
}

export default new Elements()