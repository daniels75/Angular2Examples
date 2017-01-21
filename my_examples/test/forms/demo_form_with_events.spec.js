"use strict";
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var demo_form_with_events_1 = require('../../app/ts/forms/demo_form_with_events');
var util_1 = require('../util');
describe('DemoFormWithEvents', function () {
    var originalConsole, fakeConsole;
    var el, input, form;
    beforeEach(function () {
        fakeConsole = new util_1.ConsoleSpy();
        originalConsole = window.console;
        window.console = fakeConsole;
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [demo_form_with_events_1.DemoFormWithEvents]
        });
    });
    afterAll(function () { return window.console = originalConsole; });
    function createComponent() {
        var fixture = testing_1.TestBed.createComponent(demo_form_with_events_1.DemoFormWithEvents);
        el = fixture.debugElement.nativeElement;
        input = fixture.debugElement.query(platform_browser_1.By.css('input')).nativeElement;
        form = fixture.debugElement.query(platform_browser_1.By.css('form')).nativeElement;
        fixture.detectChanges();
        return fixture;
    }
    it('displays errors with no sku', testing_1.fakeAsync(function () {
        var fixture = createComponent();
        input.value = '';
        util_1.dispatchEvent(input, 'input');
        fixture.detectChanges();
        var msgs = el.querySelectorAll('.ui.error.message');
        expect(msgs[0].innerHTML).toContain('SKU is invalid');
        expect(msgs[1].innerHTML).toContain('SKU is required');
    }));
    it('displays no errors when sku has a value', testing_1.fakeAsync(function () {
        var fixture = createComponent();
        input.value = 'XYZ';
        util_1.dispatchEvent(input, 'input');
        fixture.detectChanges();
        var msgs = el.querySelectorAll('.ui.error.message');
        expect(msgs.length).toEqual(0);
    }));
    it('handles sku value changes', testing_1.fakeAsync(function () {
        var fixture = createComponent();
        input.value = 'XYZ';
        util_1.dispatchEvent(input, 'input');
        testing_1.tick();
        expect(fakeConsole.logs).toContain('sku changed to: XYZ');
    }));
    it('handles form changes', testing_1.fakeAsync(function () {
        var fixture = createComponent();
        input.value = 'XYZ';
        util_1.dispatchEvent(input, 'input');
        testing_1.tick();
        expect(fakeConsole.logs).toContain('form changed to: [object Object]');
    }));
    it('handles form submission', testing_1.fakeAsync(function (tcb) {
        var fixture = createComponent();
        input.value = 'ABC';
        util_1.dispatchEvent(input, 'input');
        testing_1.tick();
        fixture.detectChanges();
        util_1.dispatchEvent(form, 'submit');
        testing_1.tick();
        expect(fakeConsole.logs).toContain('you submitted value: ABC');
    }));
});
