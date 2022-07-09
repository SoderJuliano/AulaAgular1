import { Component, OnInit } from '@angular/core';

declare var $: any
@Component({
  selector: 'app-teste',
  templateUrl: './teste.component.html',
  styleUrls: ['./teste.component.css']
})
export class TesteComponent implements OnInit {

  preco: number = 0

  constructor() { }

  ngOnInit(): void {

  }

  abrirNavBar() {
    $('.ui.labeled.icon.sidebar')
      .sidebar('toggle')
      ;
  }
}
