import { NgModule } from '@angular/core';

import { LivrosRoutingModule } from './livros-routing-module';

import { CadLivros } from './cad-livros/cad-livros';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [
    CadLivros,
    Listagem
  ],

  imports: [
    LivrosRoutingModule
  ]
})
export class LivrosModule {}