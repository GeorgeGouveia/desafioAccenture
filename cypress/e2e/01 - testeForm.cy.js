import Formulario from "../pages/formulario";

describe ("Teste FrontEnd Forms", () => {

    
    beforeEach(() => {
        Formulario.visitarPagina()      
    });
     
    it('Deverá acessar e preencher o formulário', () => {       
        Formulario.preencherFormulario()
    });

})