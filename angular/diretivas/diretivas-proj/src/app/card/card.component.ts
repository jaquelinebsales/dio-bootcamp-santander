
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-card',
  standalone: false,
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
