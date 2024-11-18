import Elements from "../pages/elements";

describe ("Teste FrontEnd Elements", () => {

    
    beforeEach(() => {
        Elements.visitarPagina()      
    });

    it('Deverá testar os elementos', () => {
        Elements.registroForm()
        Elements.registrarDozeUsuarios()
        Elements.deletarDozeUsuarios()
    });

});