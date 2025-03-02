import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { CompAtributosComponent } from './comp-atributos/comp-atributos.component';
import { ListaModule } from './lista/lista.module'; // Importe o ListaModule
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CompAtributosComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    CommonModule,
    ListaModule,
    FormsModule 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }