import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { App } from './app';
import { LivrosModule } from './livros/livros-module';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    LivrosModule
  ],
  bootstrap: [
    App
  ]
})
export class AppModule {}