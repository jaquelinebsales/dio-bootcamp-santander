import { Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy
 } from '@angular/core';

@Component({
  selector: 'app-check-sample',
  imports: [],
  templateUrl: './check-sample.component.html',
  styleUrl: './check-sample.component.css'
})

export class CheckSampleComponent implements OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy{

  quantidade:number = 0

  constructor(){

  }
  ngOnDestroy(): void {
    console.log("goodbye my friend.")
  }

  adicionar(){
    this.quantidade += 1
  }

  decrementar(){
    this.quantidade -=1
  }
  ngAfterViewChecked(): void {
 
    console.log("ngAfterViewChecked")
  }
  ngAfterViewInit(): void {

    console.log("ngAfterViewInit")
  }

  ngAfterContentInit(): void {
    console.log("ngAfterContentInit")
  }

  ngDoCheck(): void {
    console.log("ngDoCheck")
  }

  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked")
  }

  ngOnInit(): void {
    console.log("ngOnInit")
  }
  
}
