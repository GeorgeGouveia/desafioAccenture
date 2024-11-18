import { elements as el } from "./elements"

class DragAndDrop {

    visitarPagina(){
        cy.visit("https://demoqa.com/")
    }

    DragAndDrop(){
        cy.get(el.cardInteractions).click()
        cy.get(el.sortable).click()
        //cy.get(el.segundolista).drag(el.primeiroLista)
        cy.get(el.segundolista).trigger('dragstart', { dataTransfer });
        cy.get(el.primeiroLista).trigger('drop', { dataTransfer });

    }



}
export default new DragAndDrop()