import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CeverjaDetalhesPage } from './ceverja-detalhes.page';
var routes = [
    {
        path: '',
        component: CeverjaDetalhesPage
    }
];
var CeverjaDetalhesPageModule = /** @class */ (function () {
    function CeverjaDetalhesPageModule() {
    }
    CeverjaDetalhesPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CeverjaDetalhesPage]
        })
    ], CeverjaDetalhesPageModule);
    return CeverjaDetalhesPageModule;
}());
export { CeverjaDetalhesPageModule };
//# sourceMappingURL=ceverja-detalhes.module.js.map