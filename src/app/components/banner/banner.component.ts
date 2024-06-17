import { Component, OnInit } from '@angular/core';
declare var $: any;

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.sass']
})
export class BannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
    $(document).ready(()=> {
      $('#button').click(()=>{
        $('#button').toggleClass('clicked');
      });
    });
  }

}
