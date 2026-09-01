import { NgModule } from '@angular/core';
import {CadLivros} from "./cad-livros/cad-livros";
import {Listagem} from "./listagem/listagem";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CadLivros
  },
  {
    path: 'listagem',
    component: Listagem
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],

  exports: [
    RouterModule
  ]
})
export class LivrosRoutingModule {}