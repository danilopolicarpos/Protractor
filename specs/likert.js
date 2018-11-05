describe('Validação de entrada de dados no componente Likert', function() {
    it('likert', function() {
        smile = element(by.id('love'));
        txtbox = element(by.id('txtComentario'));
        send = element(by.linkText('enviar'));

        browser.waitForAngularEnabled(true);
        browser.get('/#/components/likert');

        smile.click();

        txtbox.click();
        txtbox.sendKeys('Atendimento eficiente');

        browser.driver.sleep(2000);
        send.click();
    });
});
