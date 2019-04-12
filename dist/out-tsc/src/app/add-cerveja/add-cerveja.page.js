import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AddCervejaPage = /** @class */ (function () {
    function AddCervejaPage() {
    }
    AddCervejaPage.prototype.ngOnInit = function () {
    };
    AddCervejaPage.prototype.salvar = function (form) {
        console.log(form);
    };
    AddCervejaPage = tslib_1.__decorate([
        Component({
            selector: 'app-add-cerveja',
            templateUrl: './add-cerveja.page.html',
            styleUrls: ['./add-cerveja.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AddCervejaPage);
    return AddCervejaPage;
}());
export { AddCervejaPage };
//# sourceMappingURL=add-cerveja.page.js.map