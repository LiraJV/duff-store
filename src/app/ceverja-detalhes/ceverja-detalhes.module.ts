import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { CeverjaDetalhesPage } from './ceverja-detalhes.page';

const routes: Routes = [
  {
    path: '',
    component: CeverjaDetalhesPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CeverjaDetalhesPage]
})
export class CeverjaDetalhesPageModule {}
