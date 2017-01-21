"use strict";
var testing_1 = require('@angular/core/testing');
var forms_1 = require('@angular/forms');
var demo_form_sku_with_builder_1 = require('../../app/ts/forms/demo_form_sku_with_builder');
describe('DemoFormSkuBuilder', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [demo_form_sku_with_builder_1.DemoFormSkuBuilder]
        });
    });
    it('initializes sku', testing_1.fakeAsync(function (tcb) {
        var fixture = testing_1.TestBed.createComponent(demo_form_sku_with_builder_1.DemoFormSkuBuilder);
        var comp = fixture.debugElement.componentInstance;
        var el = fixture.debugElement.nativeElement;
        fixture.detectChanges();
        expect(comp.myForm.controls.sku.value).toEqual('ABC123');
        expect(el.querySelector('form input').value).toEqual('ABC123');
    }));
});
