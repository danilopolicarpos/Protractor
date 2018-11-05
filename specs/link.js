describe('Validação de ambiente', function() {
    it('link', function() {
        link = element(by.linkText('texto link'));
        header = element(by.id('header'));
        title = element(by.tagName('h2'));

        browser.waitForAngularEnabled(true);
        browser.get('/#/components/link');

        link.click();

        expect(header.getText()).toBe('Header');
        expect(title.getText()).toBe('Lista de componentes');
        title = element(by.tagName('h2'));

        title.getText().then(function (val) {
            console.log(val);
        });
    });
});
