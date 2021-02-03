import { Component, OnInit } from '@angular/core';
import Glide  from '@glidejs/glide';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const config = {
      type: "carousel",
      perView: 3,
      gap: 15,
      animationDuration: 700,
      breakpoints: {
        576: {
          perView: 1
        },
        992: {
          perView: 2
        },
      }
    }

    new Glide('.glide', config).mount()

  }

}
