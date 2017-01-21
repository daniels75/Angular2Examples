"use strict";
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var demo_form_ng_model_1 = require('../../app/ts/forms/demo_form_ng_model');
describe('DemoFormNgModel', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [demo_form_ng_model_1.DemoFormNgModel]
        });
    });
    it('requires product name', testing_1.fakeAsync(function (tcb) {
        var fixture = testing_1.TestBed.createComponent(demo_form_ng_model_1.DemoFormNgModel);
        var comp = fixture.debugElement.componentInstance;
        var el = fixture.debugElement.nativeElement;
        comp.productName = '';
        fixture.detectChanges();
        expect(el.querySelector('.ui.error.message').innerHTML)
            .toContain('Form is invalid');
        comp.productName = 'something';
        fixture.detectChanges();
        expect(el.querySelector('.ui.error.message')).toBeNull();
    }));
});
