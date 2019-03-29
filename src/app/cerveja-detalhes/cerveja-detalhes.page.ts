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
      this.nome = 'Homens pelados sem roupa'
      this.detalhes = 'Mano eu gosto é de rola'
    }else if(idCerveja==='60'){
      this.nome = 'Skol'
      this.detalhes = 'A puro malte que desce redondo.'
    }
  }

}
