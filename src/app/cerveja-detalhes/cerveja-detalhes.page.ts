import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cerveja-detalhes',
  templateUrl: './cerveja-detalhes.page.html',
  styleUrls: ['./cerveja-detalhes.page.scss'],
})
export class CervejaDetalhesPage implements OnInit {

  nome;
  detalhes;

  constructor(private route:ActivatedRoute) {
    console.log("Executou o construtor")
   }

  ngOnInit() {
    let idCerveja = this.route.snapshot.params.id;
    
    if(idCerveja==='50'){
      this.nome = 'Proibida'
      this.detalhes = 'Tão gostosa que é proibida. A melhor puro malte do Ceará.'
    }else if(idCerveja==='60'){
      this.nome = 'Skol'
      this.detalhes = 'A puro malte que desce redondo.'
    }else if(idCerveja==='70'){
      this.nome = 'Brahma extra lager'
      this.detalhes = 'A melhor Lager da Região sul do Brasil'
    }else if(idCerveja==='80'){
      this.nome = 'Eisenbahn'
      this.detalhes = 'A melhor pilsen do Acré.'
    }
  }

}
