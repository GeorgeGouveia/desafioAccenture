import { elements as el } from "./elements"

class Alerts {

    visitarPagina(){
        cy.visit('https://demoqa.com/')
    }

    testeAlerts(){
        cy.get(el.cardAlert).click()
        cy.get(el.browserWindows).click()
        cy.window().then((win) => {
            cy.stub(win, 'open').callsFake((url) => {
              win.location.href = url; 
            });
          });
        cy.get(el.newWindow).click()

        cy.get(el.sampleNewWindow).should('be.visible')

        
        
    }

}

export default new Alerts()