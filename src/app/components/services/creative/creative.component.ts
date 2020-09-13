import { Component, OnInit, AfterViewInit, OnDestroy, HostListener } from '@angular/core';
import {
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronLeft,
  faPlay,
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

import * as Plyr from 'plyr';
import { NONE_TYPE } from '@angular/compiler';


declare var $;

@Component({
  selector: 'app-creative',
  templateUrl: './creative.component.html',
  styleUrls: ['./creative.component.scss']
})
export class CreativeComponent implements OnInit, AfterViewInit, OnDestroy {

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faPlay = faPlay;

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

    const dangoPlyr = new Plyr('#dango-plyr');

  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      //////// RIGHT SIDED
      //////// right particles animations
      let particlesRight = gsap.utils.toArray('.right-sided .text-container');

      particlesRight.forEach( (currentValue, index, arr) => {
        let particlesTL = gsap.timeline();
        particlesTL.addLabel('start')
        .from( $(`#${$(currentValue).attr('id')}`).find('.product-logo') , {
          y: -100,
          scale: 0.5,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.hero-text h2') , {
          x: -200,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.hero-text p') , {
          x: 200,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
        if($(`#${$(currentValue).attr('id')}`).find('.hero-text .play-btn-container')){
          particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.play-btn-container') , {
            y: 100,
            alpha: 0,
            duration: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: $(`#${$(currentValue).attr('id')}`).parent(),
              scrub: 1,
              start: 'top bottom',
              end: 'bottom bottom'
            }
          }, '-=0.4');
        }
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.cta') , {
          y: 100,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
      });
      //////// LEFT SIDED
      //////// left particles animations
      let particlesLeft = gsap.utils.toArray('.left-sided .text-container');

      particlesLeft.forEach( (currentValue, index, arr) => {
        let particlesTL = gsap.timeline();
        particlesTL.addLabel('start')
        .from( $(`#${$(currentValue).attr('id')}`).find('.product-logo') , {
          y: -100,
          scale: 0.5,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        });
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.hero-text h2') , {
          x: 200,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.hero-text p') , {
          x: -200,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
        if($(`#${$(currentValue).attr('id')}`).find('.hero-text .play-btn-container')){
          particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.play-btn-container') , {
            y: 100,
            alpha: 0,
            duration: 0.5,
            ease: 'none',
            scrollTrigger: {
              trigger: $(`#${$(currentValue).attr('id')}`).parent(),
              scrub: 1,
              start: 'top bottom',
              end: 'bottom bottom'
            }
          }, '-=0.4');
        }
        particlesTL.from( $(`#${$(currentValue).attr('id')}`).find('.cta') , {
          y: 100,
          alpha: 0,
          duration: 0.5,
          ease: 'none',
          scrollTrigger: {
            trigger: $(`#${$(currentValue).attr('id')}`).parent(),
            scrub: 1,
            start: 'top bottom',
            end: 'bottom bottom'
          }
        }, '-=0.4');
      });


      ////// dango

      gsap.from('#dango-particles .dango-monkey', {
        y: 200,
        x: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#dango-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#dango-particles .dango-player-container', {
        x: 200,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#dango-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });

    }, 0);
  }

  ngOnDestroy(): void {
  }


}
