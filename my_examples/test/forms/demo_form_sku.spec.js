"use strict";
var testing_1 = require('@angular/core/testing');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var demo_form_sku_1 = require('../../app/ts/forms/demo_form_sku');
var util_1 = require('../util');
describe('DemoFormSku Component', function () {
    var originalConsole, fakeConsole;
    var el, input, form;
    beforeEach(function () {
        fakeConsole = new util_1.ConsoleSpy();
        originalConsole = window.console;
        window.console = fakeConsole;
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [demo_form_sku_1.DemoFormSku]
        });
    });
    afterAll(function () { return window.console = originalConsole; });
    function createComponent() {
        var fixture = testing_1.TestBed.createComponent(demo_form_sku_1.DemoFormSku);
        el = fixture.debugElement.nativeElement;
        input = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        form = fixture.debugElement.query(platform_browser_1.By.css('form')).nativeElement;
        fixture.detectChanges();
        return fixture;
    }
    it('logs the submitted value', testing_1.fakeAsync(function () {
        var fixture = createComponent();
        input.value = 'MY-SKU';
        util_1.dispatchEvent(input, 'input');
        fixture.detectChanges();
        testing_1.tick();
        fixture.detectChanges();
        util_1.dispatchEvent(form, 'submit');
        testing_1.tick();
        expect(fakeConsole.logs).toContain('you submitted value: [object Object]');
    }));
});
