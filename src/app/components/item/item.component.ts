import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.sass']
})
export class ItemComponent implements OnInit {

  @Input() title: string='';
  @Input() description: string='';
  @Input() src: string='';


  constructor() { }

  ngOnInit(): void {
  }

}
