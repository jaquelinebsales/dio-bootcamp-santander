import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'; 
@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})

export class CardComponent {
  constructor(
    private parametrizador: ActivatedRoute, private navegador: Router
  ){
    this.parametrizador.params.subscribe(
      res => console.log(res)
    )

    this.parametrizador.queryParams.subscribe(
      res => console.log(res)
    )
  }

  ngOnInit(): void{
    setInterval(()=>{
      this.navegador.navigate(['/'])
    }, 5000)
  }
}
