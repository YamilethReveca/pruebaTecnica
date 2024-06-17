import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.sass']
})
export class ItemsComponent implements OnInit {

 items=[  
  {
    title: 'Item 1',
    description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo',
    imgSrc:'./../../../assets/img/cohete.png'
  },
  {
    title: 'Item 2',
    description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo',
    imgSrc:'./../../../assets/img/cohete.png'
  },
  {
    title: 'Item 3',
    description: 'Aún nuestro sitio está en construcción (somos muy perfeccionistas jeje). Mientras puedes navegar en nuestro sitio antiguo',
    imgSrc:'./../../../assets/img/cohete.png'
  }
 ]

  constructor() { }

  ngOnInit(): void {
  }

}
