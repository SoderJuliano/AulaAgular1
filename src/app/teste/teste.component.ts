import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  preco:number = 0

  constructor() { }

  ngOnInit(): void {
  }

  aumentaovalor(){
    this.preco++
  }
  abaixaovalor(){
    this.preco--
  }
}
