import { elements as el } from "./elements"

class Widgets {

    visitarPagina(){
        cy.visit("https://demoqa.com/")
    }

    testarWidgets(){
        cy.get(el.cardWidgets).click()
        cy.get(el.buttonProgressBar).click()
        cy.get(el.startButton).click()
        cy.wait(2000)
        cy.get(el.startButton).click()
        cy.get('.progress-bar')  // Seleciona o elemento da barra de progresso
        .should('have.attr', 'aria-valuenow')  // Verifica se o atributo existe
        .then((valor) => {
          const valorNumerico = parseInt(valor);
          expect(valorNumerico).to.be.lessThan(25);  // Verifica se o valor é menor ou igual a 25
        });
        
        cy.get(el.startButton).click()
        cy.wait(6000)
        cy.get('.progress-bar')
        .should('have.attr', 'aria-valuenow')
        .and('eq', '100');
        
        cy.get(el.resetButton).click()
    }



}
export default new Widgets()