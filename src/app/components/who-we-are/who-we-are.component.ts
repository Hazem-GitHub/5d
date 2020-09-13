import { Component, OnInit, AfterViewInit } from '@angular/core';
import {
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronLeft,
  faArrowUp,
  faChevronUp
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

import {magicMouse} from '../../../assets/js/magic_mouse.js';

import Scrollbar , {ScrollbarPlugin} from 'smooth-scrollbar';

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
  selector: 'app-who-we-are',
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.scss']
})
export class WhoWeAreComponent implements OnInit, AfterViewInit {
  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;
  faArrowLeft = faArrowLeft;
  faArrowRight = faArrowRight;
  faArrowUp = faArrowUp;
  faChevronUp = faChevronUp;

  scrollbar;

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


    // Initializing TESTIMONIALS swiper carousel
    const testimonialsSwiper = new swiper('#testimonials-swiper', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,
      grabCursor: true,
      autoHeight: false,
      autoplay:  {
        delay: 5000,
        disableOnInteraction: false,
      },
      loop: false,
      slidesPerView: 1,
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
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      scrollbar: false,
    });

    $('.light-up-cursor').on('mouseenter', () => {
      $('#magicMouseCursor').addClass('clientHover');
    });
    $('.light-up-cursor').on('mouseleave', () => {
      $('#magicMouseCursor').removeClass('clientHover');
    });
  }

  ngAfterViewInit(): void {
    setTimeout( () => {

      const headerTL = gsap.timeline();
      headerTL.from( '.header-wrapper' , {
        y: 200,
        scale: 4,
        alpha: 0,
        duration: 1,
        ease: 'Power3.easeOut',
      }).from( '.objective-wrapper' , {
        y: 200,
        alpha: 0,
        duration: 1,
        ease: 'Power3.easeOut',
      }, '-=0.5')
  
      //// on scroll
      gsap.from( '.clients-wrapper h3' , {
        y: -200,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.clients-wrapper h3',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from( '.clients-wrapper p' , {
        y: 200,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.clients-wrapper p',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      
      gsap.from( '.clients-wrapper .clients-grid-wrapper .client-container' , {
        y: 200,
        alpha: 0,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.clients-wrapper .clients-grid-wrapper .client-container',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      
  
      gsap.from( '.testimonials-container h3' , {
        y: 100,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.testimonials-container h3',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from( '#testimonials-swiper' , {
        y: 100,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#testimonials-swiper',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from( '.next-container' , {
        y: 50,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '.next-container',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });

    }, 0);

  }

}
