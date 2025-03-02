
import { Component, OnInit } from '@angular/core';
import { NgFor,NgSwitch, NgSwitchCase, NgSwitchDefault } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgFor, NgSwitch, NgSwitchCase, NgSwitchDefault],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  produtos:string[] = []
  menuType:string="super"
  constructor(){
    this.produtos = [
      "mouse",
      "teclado",
      "fonte",
      "cabo"
    ]
  }
  ngOnInit(): void {
    /*throw new Error('Method not implemented.');*/
  }

  adicionar():void{
    this.produtos.push("Jaqueline")
  }

  remover(index: number):void{
    this.produtos.splice(index, 1)
  }

}
