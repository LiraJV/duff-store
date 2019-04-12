import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var CervejaDetalhesPage = /** @class */ (function () {
    function CervejaDetalhesPage(route) {
        this.route = route;
        console.log("Executou o construtor");
    }
    CervejaDetalhesPage.prototype.ngOnInit = function () {
        var idCerveja = this.route.snapshot.params.id;
        if (idCerveja === '50') {
            this.nome = 'Proibida';
            this.detalhes = 'Tão gostosa que é proibida. A melhor puro malte do Ceará.';
        }
        else if (idCerveja === '60') {
            this.nome = 'Skol';
            this.detalhes = 'A puro malte que desce redondo.';
        }
        else if (idCerveja === '70') {
            this.nome = 'Brahma extra lager';
            this.detalhes = 'A melhor Lager da Região sul do Brasil';
        }
        else if (idCerveja === '80') {
            this.nome = 'Eisenbahn';
            this.detalhes = 'A melhor pilsen do Acré.';
        }
    };
    CervejaDetalhesPage = tslib_1.__decorate([
        Component({
            selector: 'app-cerveja-detalhes',
            templateUrl: './cerveja-detalhes.page.html',
            styleUrls: ['./cerveja-detalhes.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ActivatedRoute])
    ], CervejaDetalhesPage);
    return CervejaDetalhesPage;
}());
export { CervejaDetalhesPage };
//# sourceMappingURL=cerveja-detalhes.page.js.map