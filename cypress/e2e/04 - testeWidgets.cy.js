import Widgets from "../pages/widgets";

describe ("Teste FrontEnd Widgets", () => {

    
    beforeEach(() => {
        Widgets.visitarPagina()      
    });

    it('Deverá testar os widgets', () => {
        Widgets.testarWidgets()
    });

});