import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  
  
  
  progressChange(e: any): void {
    const input = e.target;
    let sliderValue = $(input).val();
    $(`.slider .slider__drag`).css("left", sliderValue + "%");
    $(`.wrapper_slider .comparision__img-2`).css("width", sliderValue + "%");
  }   
  constructor() { }

  ngOnInit(): void {
  }

}
