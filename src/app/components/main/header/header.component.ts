import {AfterContentInit, Component } from '@angular/core';
import { gsap } from 'gsap';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit {
  items: any;
  ul: any;

  constructor() {}

  ngAfterContentInit(): void {
    this.items = document.querySelectorAll('.nav-link');
    this.ul = document.querySelector('.navbar-nav');

    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });
  }

  setActiveClass(e: MouseEvent) {
    const elem = e.target as HTMLElement;
    
    if (elem.classList.contains('nav-link')) {
      this.items.forEach((item: HTMLElement) => item.classList.remove("active"));
      elem.classList.add("active")
    }
    const pageX = e.pageX;
    const rotate = pageX -10 - window.innerWidth/2;
    gsap.to(this.ul, { rotationX: -Math.abs(0.1 * rotate), rotationY: 0.2 * rotate, rotationZ: -0.1, duration: 0.3 });
    gsap.to(this.ul, { rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.2, delay: 0.2 });

    gsap.to(elem, { scale: .8, ease: "Power4.easeOut", duration: 0.3 });
    gsap.to(elem, { scale: 1, ease: "Back.easeOut.config(4)", delay: 0.2 });

    let destinationId = `s${elem.id}`
    console.log(destinationId);
    const dd = document.getElementById(destinationId);
    console.log(dd);
    const toTop = 120;
    $('html, body').animate({
      scrollTop: $(dd).offset().top-toTop
    }, 1000)


  }


  smoothScroll(id){
 
  }
}
