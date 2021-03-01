import { AfterContentInit, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { gsap } from 'gsap';
import { TranslateService } from '@ngx-translate/core';
import { HttpService } from 'src/app/shared/services/http.service';
import { Observable } from 'rxjs';
declare var $: any;
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements AfterContentInit, OnInit {
  items: any;
  ul: any;
  currentLang: Observable<string>;


  public useLanguage(lang: string): void {
    this.translate.use(lang);
    this.service.changeLang(lang);
  }

  constructor(public translate: TranslateService, private service: HttpService) {
    this.currentLang = this.service.getCurrentLang();

    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('pl');

    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/en|pl/) ? browserLang : 'pl');

    $(document).ready(function () {
      const scrollLink = $('.scroll');
      // Smooth scrolling
      scrollLink.click(function (e) {
        e.preventDefault();
        $('body,html').animate({
          scrollTop: $(this.hash).offset().top - 130
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
  ngOnInit(): void {
    const leftBracket = document.getElementById('left-bracket');
    const rightBracket = document.getElementById('right-bracket');
    const kLetter = document.getElementById('k-letter');
    const container = document.getElementById('containerlogo');


    gsap.set([leftBracket, rightBracket, kLetter], { autoAlpha: 0, scale: 1 });
    const tl = gsap.timeline();
    tl.fromTo(container, { autoAlpha: 0 }, { duration: 2, autoAlpha: 1 })
      .fromTo(kLetter, { y: '-=500%' }, { duration: 0.5, y: '+=500%', autoAlpha: 1 })
      .fromTo(kLetter, { y: '+=500%' }, { duration: 0.2, y: '-=20%', autoAlpha: 1, delay: 0.2 })
      .fromTo(kLetter, { y: '-=20%' }, { duration: 0.3, y: '+=20%', autoAlpha: 1 })
      .fromTo(kLetter, { scale: 0.8, transformOrigin: '50% 50%' }, { duration: 0.5, scale: 1, transformOrigin: '50% 50%' })
      .fromTo(kLetter, { rotation: 0, transformOrigin: "50% 50%" }, { rotation: 360, transformOrigin: "50% 50%" })
      .fromTo(leftBracket, { y: '-=500%' }, { duration: 1, y: '+=500%', autoAlpha: 1 }, '-=0.3')
      .fromTo(rightBracket, { y: '+=500%' }, { duration: 1, y: '-=500%', autoAlpha: 1 }, '-=1')
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
