import Alerts from "../pages/alerts";

describe ("Teste FrontEnd Alerts", () => {

    
    beforeEach(() => {
        Alerts.visitarPagina()      
    });

    it('Deverá testar os alerts', () => {
        Alerts.testeAlerts()
    });


});