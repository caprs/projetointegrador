import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LivrosRoutingModule } from './livros-routing-module';
import { CommonModule } from '@angular/common';
import { CadLivros } from './cad-livros/cad-livros';
import { Listagem } from './listagem/listagem';

@NgModule({
  declarations: [
    CadLivros,
    Listagem
  ],

  imports: [
    LivrosRoutingModule,
    CommonModule,
    FormsModule
  ]
})
export class LivrosModule {}