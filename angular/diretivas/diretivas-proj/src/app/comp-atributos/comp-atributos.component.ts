import { Component, OnInit } from '@angular/core';
import { NgClass, NgStyle,NgFor } from '@angular/common';
import 'zone.js';
import { FormsModule } from '@angular/forms'
@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [NgClass, NgStyle, FormsModule, NgFor],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent implements OnInit{

  estilo:string = "enable"
  corFundo:string = "red"
  corFonte:string = "green"
  item:string = ""
  lista:string[] = []
  isEnableBlock:boolean = true

  constructor(){
    
  }

  adicionarLista(){
    this.lista.push(this.item)
  }
  ngOnInit(): void {
    
  }

  trocar(){
    if(this.estilo==="enable"){
      this.estilo = "disable"
    }else{
      this.estilo = "enable"
    }
  }

}
