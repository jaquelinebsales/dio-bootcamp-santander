import { Component, OnInit } from '@angular/core';
import 'zone.js';
@Component({
  selector: 'app-comp-atributos',
  standalone: false,
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
