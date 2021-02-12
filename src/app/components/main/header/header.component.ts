import { AfterContentInit, Component } from '@angular/core';
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

  constructor() {
    $(document).ready(function () {
      const scrollLink = $('.scroll');
      // Smooth scrolling
      scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top - 100
        }, 1000);
      });
      // Active link switching
      $(window).scroll(function () {
        let scrollbarLocation = $(this).scrollTop();
        scrollLink.each(function () {
          let sectionOffset = $(this.hash).offset().top - 200;
          if (sectionOffset <= scrollbarLocation) {
            $(this).parent().addClass('active');
            $(this).parent().siblings().removeClass('active');
          }
        })
      })
    })
  }

  ngAfterContentInit(): void {


    this.items = document.querySelectorAll('.nav-link');
    this.ul = document.querySelector('.navbar-nav');

    $('.navbar-nav>li>a').on('click', function () {
      $('.navbar-collapse').collapse('hide');
    });

  }

  setActiveClass(e: MouseEvent) {
    const elem = e.target as HTMLElement;
    const pageX = e.pageX;
    const rotate = pageX - 10 - window.innerWidth / 2;
    gsap.to(this.ul, { rotationX: -Math.abs(0.1 * rotate), rotationY: 0.2 * rotate, rotationZ: -0.1, duration: 0.3 });
    gsap.to(this.ul, { rotationX: 0, rotationY: 0, rotationZ: 0, duration: 0.2, delay: 0.2 });

    gsap.to(elem, { scale: .8, ease: "Power4.easeOut", duration: 0.3 });
    gsap.to(elem, { scale: 1, ease: "Back.easeOut.config(4)", delay: 0.2 });
  }














}
