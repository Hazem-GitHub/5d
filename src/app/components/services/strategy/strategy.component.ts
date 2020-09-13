import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronLeft,
  faMapMarkerAlt,
  faPhoneAlt,
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';
import { gsap } from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
import { CSSRulePlugin } from 'gsap/CSSRulePlugin';
import { Draggable } from 'gsap/Draggable';
import { EaselPlugin } from 'gsap/EaselPlugin';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { PixiPlugin } from 'gsap/PixiPlugin';
import { TextPlugin } from 'gsap/TextPlugin';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { CustomBounce } from 'gsap/CustomBounce';
import { CustomWiggle } from 'gsap/CustomWiggle';

// import anime.js
import anime from 'animejs/lib/anime.es.js';

// import Swiper bundle with all modules installed
import swiper from 'swiper/bundle';

import * as ScrollMagic from 'scrollmagic';

import {magicMouse} from '../../../../assets/js/magic_mouse.js';

import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';
import { identifierModuleUrl } from '@angular/compiler';


declare var $;

class ScaleDeltaPlugin extends ScrollbarPlugin {
  static pluginName = 'scaleDelta';

  transformDelta(delta, fromEvent): any {
    return {
      x: delta.x * 0.8,
      y: delta.y * 0.8,
    }
  }
}

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})
export class StrategyComponent implements OnInit, AfterViewInit {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faMapMarkerAlt = faMapMarkerAlt;
  faPhoneAlt = faPhoneAlt;
  faPaperPlane = faPaperPlane;

  scrollbar;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event): void {
    // console.log(event);
  }

  constructor() { }

  ngOnInit(): void {
    // document.body.scrollTo(0, 0);
    // Animations
    // Register plugins to be used and avoid bundler tree shaking losses
    gsap.registerPlugin(
      ScrollTrigger,
      ScrollToPlugin,
      TextPlugin,
      CSSRulePlugin,
      ExpoScaleEase,
      RoughEase,
      SlowMo,
      EaselPlugin,
      PixiPlugin,
      MotionPathPlugin
    );
    // initialize magic mouse plugin
    const magicmouseoptions = {
      cursorOuter: 'circle-basic',
      hoverEffect: 'circle-move',
      hoverItemMove: true,
      defaultCursor: true,
      outerWidth: 40,
      outerHeight: 40
    };
    magicMouse(magicmouseoptions);



    Scrollbar.use(ScaleDeltaPlugin);
    // Initializing smoothscrolbar

    const scrollOptions = {
      damping: 0.1,
      thumbMinSize: 20,
      renderByPixels: true,
      alwaysShowTracks: false,
      continuousScrolling: false,
      delegateTo: document.querySelector('.scroll-container'),
      plugins: {
        scaleDelta: {
          events: [/wheel/],
        }
      }
    };
    // this.scrollbar = Scrollbar.init(document.querySelector('.scroll-container'), scrollOptions);

    // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
    // const scrollTrigger = ScrollTrigger.scrollerProxy($(window), {
    //   scrollTop(value): any {
    //     if (arguments.length) {
    //       this.scrollbar.scrollTop = value; // setter
    //     }
    //     return this.scrollbar.scrollTop;    // getter
    //   },
    //   getBoundingClientRect(): any {
    //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    //   }
    // });
    // ScrollTrigger.update();
    // this.scrollbar.addListener(ScrollTrigger.update);
    // this.scrollbar.scrollTop = 500;
    // when the smooth scroller updates, tell ScrollTrigger to update() too:



    // Initializing swiper carousel
    const iconsSwiper = new swiper('#icons-swiper', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,
      grabCursor: true,
      autoHeight: false,
      autoplay:  {
        delay: 500,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: false,
      slidesPerView: 3,
      spaceBetween: 50,
      watchOverflow: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 3,
          spaceBetween: 40
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 3,
          spaceBetween: 50
        }
      },
      preventInteractionOnTransition: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      resistance: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: false,
      // navigation: {
      //   nextEl: '.next-btn',
      //   prevEl: '.prev-btn',
      // },
      navigation: false,
      scrollbar: false,
    });



    const headerTL = gsap.timeline();
    headerTL.from( '.sectionLogoContainer' , {
      y: '300',
      scale: 5,
      duration: 1,
      alpha: 0,
      ease: 'none',
    });
    headerTL.from( '.text-wrapper h1' , {
      y: '200',
      duration: 0.5,
      alpha: 0,
      ease: 'none',
    }, '-=0.4');
    headerTL.from( '.text-wrapper .sub-header' , {
      y: '200',
      duration: 0.5,
      alpha: 0,
      ease: 'none',
    }, '-=0.4');
    headerTL.from( '.text-wrapper .text' , {
      y: '200',
      duration: 0.5,
      alpha: 0,
      ease: 'none',
    }, '-=0.4');
    headerTL.from( '.icons-Wrapper' , {
      y: '100',
      duration: 0.5,
      alpha: 0,
      ease: 'none',
    }, '-=0.4');





    $('.light-up-cursor').on('mouseenter', () => {
      $('#magicMouseCursor').addClass('clientHover');
    });
    $('.light-up-cursor').on('mouseleave', () => {
      $('#magicMouseCursor').removeClass('clientHover');
    });

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // ROOK LINE PATH ANIMATION
      const rookPath = document.querySelector('#rook-line');
      const rookPathLength = (rookPath as SVGPathElement).getTotalLength();
      const _rookPath = $('#rook-line');
      _rookPath.css('strokeDasharray', 0);
      _rookPath.css('strokeDashoffset', rookPathLength);
      window.addEventListener('scroll', (e) => {
        const distanceFromTop = $('#rook-line').offset().top - $(window).scrollTop();
        const rookScrollPercentage = 1 - distanceFromTop / $(window).height();
        const rookDrawLength = rookPathLength * rookScrollPercentage;
        _rookPath.css('strokeDashoffset', rookPathLength - rookDrawLength);
        if (rookScrollPercentage >= 0.99) {
          _rookPath.css('strokeDasharray', rookDrawLength * 0.8);
        } else {
          _rookPath.css('strokeDasharray', rookPathLength * 0.8);
        }
      }, true);


      // KNIGHT LINE PATH ANIMATION
      const knightPath = document.querySelector('#knight-line');
      const knightPathLength = (knightPath as SVGPathElement).getTotalLength();
      const _knightPath = $('#knight-line');
      _knightPath.css('strokeDasharray', 0);
      _knightPath.css('strokeDashoffset', knightPathLength);
      window.addEventListener('scroll', (e) => {
        const distanceFromTop = $('#knight-line').offset().top - $(window).scrollTop();
        const knightScrollPercentage = 1 - distanceFromTop / $(window).height();
        const knightDrawLength = knightPathLength * knightScrollPercentage;
        _knightPath.css('strokeDashoffset', knightPathLength - knightDrawLength);
        if (knightScrollPercentage >= 0.99) {
          _knightPath.css('strokeDasharray', knightDrawLength * 0.8);
        } else {
          _knightPath.css('strokeDasharray', knightPathLength * 0.8);
        }
      }, true);

      // BISHOPS LINE PATH ANIMATION
      const bishopsPath = document.querySelector('#bishops-line');
      const bishopsPathLength = (bishopsPath as SVGPathElement).getTotalLength();
      const _bishopsPath = $('#bishops-line');
      _bishopsPath.css('strokeDasharray', 0);
      _bishopsPath.css('strokeDashoffset', bishopsPathLength);
      window.addEventListener('scroll', (e) => {
        const distanceFromTop = $('#bishops-line').offset().top - $(window).scrollTop();
        const bishopsScrollPercentage = 1 - distanceFromTop / $(window).height();
        const bishopsDrawLength = bishopsPathLength * bishopsScrollPercentage;
        _bishopsPath.css('strokeDashoffset', bishopsPathLength - bishopsDrawLength);
        if (bishopsScrollPercentage >= 0.99) {
          _bishopsPath.css('strokeDasharray', bishopsDrawLength * 0.8);
        } else {
          _bishopsPath.css('strokeDasharray', bishopsPathLength * 0.8);
        }
      }, true);

      // QUEEN LINE PATH ANIMATION
      const queenPath = document.querySelector('#queen-line');
      const queenPathLength = (queenPath as SVGPathElement).getTotalLength();
      const _queenPath = $('#queen-line');
      _queenPath.css('strokeDasharray', 0);
      _queenPath.css('strokeDashoffset', queenPathLength);
      window.addEventListener('scroll', (e) => {
        const distanceFromTop = $('#queen-line').offset().top - $(window).scrollTop();
        const queenScrollPercentage = 1 - distanceFromTop / $(window).height();
        const queenDrawLength = queenPathLength * queenScrollPercentage;
        _queenPath.css('strokeDashoffset', queenPathLength - queenDrawLength);
        if (queenScrollPercentage >= 0.99) {
          _queenPath.css('strokeDasharray', queenDrawLength * 0.8);
        } else {
          _queenPath.css('strokeDasharray', queenPathLength * 0.8);
        }
      }, true);



      //////// LEFT SIDED
      //////// left BACKGROUND animations
      let bgLeft = gsap.utils.toArray('.bg-left');

      bgLeft.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          y: 300,
          alpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 2,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
      });

      //////// left LINE animations
      let lineLeft = gsap.utils.toArray('.line-left');

      lineLeft.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          y: 100,
          alpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: true,
            start: 'top center',
            end: 'bottom center'
          }
        });
      });
      //////// left TEXT animations
      let textLeft = gsap.utils.toArray('.text-container-left');

      textLeft.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          x: 200,
          y: 500,
          alpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
      });



      //////// RIGHT SIDED
      //////// right BACKGROUND animations
      let bgRight = gsap.utils.toArray('.bg-right');

      bgRight.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          y: 300,
          alpha: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 2,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
      });

      //////// right LINE animations
      let lineRight = gsap.utils.toArray('.line-right');

      lineRight.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          y: 100,
          alpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: true,
            start: 'top center',
            end: 'bottom center'
          }
        });
      });
      //////// right TEXT animations
      let textRight = gsap.utils.toArray('.text-container-right');

      textRight.forEach( (currentValue, index, arr) => {
        gsap.from( $(`#${$(currentValue).attr('id')}`) , {
          x: -200,
          y: 500,
          alpha: 0,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
      });


      }, 0);
  }


}
