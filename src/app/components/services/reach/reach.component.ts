import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import {
  faArrowRight,
  faArrowLeft,
  faChevronRight,
  faChevronLeft,
  faPlay
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

declare var $;

@Component({
  selector: 'app-reach',
  templateUrl: './reach.component.html',
  styleUrls: ['./reach.component.scss']
})
export class ReachComponent implements OnInit, AfterViewInit {

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

    const niyaPlyr = new Plyr('#niya-plyr');

  }


  ngAfterViewInit(): void {
    setTimeout(() => {
      //////// RIGHT SIDED
      //////// right text animations
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
      //////// left text animations
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
        if ($(`#${$(currentValue).attr('id')}`).find('.hero-text .play-btn-container')){
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



      ///// danone
      gsap.from('#danone-particles .danone-shape-right', {
        y: -100,
        x: 100,
        scale: 1.5,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danone-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#danone-particles .danone-shape-left', {
        y: -100,
        x: -100,
        scale: 1.5,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danone-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#danone-particles .danone-shape-top', {
        y: -100,
        scale: 1.5,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danone-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#danone-particles .danone-bottle', {
        y: 200,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danone-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });

      ///// heinz
      gsap.from('#heinz-particles .heinz-tomato3', {
        y: -100,
        x: -100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#heinz-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#heinz-particles .heinz-tomato2', {
        x: -100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#heinz-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#heinz-particles .heinz-tomato1', {
        x: 200,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#heinz-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#heinz-particles .heinz-tomato', {
        y: 200,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#heinz-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ///// danette
      gsap.from('#danette-particles .danette-pack1', {
        y: 200,
        x: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danette-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#danette-particles .danette-pack2', {
        x: 200,
        scale: 0.8,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#danette-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ///// vitrac
      gsap.from('#vitrac-particles .vitrac-fruit4', {
        y: 100,
        x: 100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#vitrac-particles .vitrac-fruit3', {
        x: -100,
        y: -100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#vitrac-particles .vitrac-fruit2', {
        x: -100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#vitrac-particles .vitrac-fruit1', {
        x: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#vitrac-particles .vitrac-grass', {
        y: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#vitrac-particles .vitrac-jar', {
        y: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#vitrac-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ///// kitkat
      gsap.from('#kitkat-particles .kitkat-choco6', {
        y: 200,
        x: -100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#kitkat-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#kitkat-particles .kitkat-choco5', {
        x: 100,
        y: 200,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#kitkat-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#kitkat-particles .kitkat-choco4', {
        x: 100,
        y: 200,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#kitkat-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      // gsap.from('#kitkat-particles .kitkat-choco2', {
      //   y: 100,
      //   alpha: 1,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '#kitkat-product',
      //     scrub: 2,
      //     start: 'top bottom',
      //     end: 'bottom bottom'
      //   }
      // });
      // gsap.from('#kitkat-particles .kitkat-choco1', {
      //   y: -100,
      //   x: 50,
      //   alpha: 1,
      //   ease: 'none',
      //   scrollTrigger: {
      //     trigger: '#kitkat-product',
      //     scrub: 2,
      //     start: 'top bottom',
      //     end: 'bottom bottom'
      //   }
      // });
      gsap.from('#kitkat-particles .kitkat-choco3', {
        y: 200,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#kitkat-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });



      ///// costa
      gsap.from('#costa-particles .costa-drink', {
        x: 200,
        y: 100,
        scale: 2,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#costa-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });

      ///// hero
      gsap.from('#hero-particles .hero-jar', {
        y: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#hero-particles .hero-tree', {
        y: -100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#hero-particles .hero-fruits', {
        y: -100,
        x: 100,
        scale: 2,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero-product',
          scrub: 3,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ///// maggi
      gsap.from('#maggi-particles .maggi-sandwich', {
        x: -100,
        y: 100,
        scale: 0.8,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#maggi-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#maggi-particles .maggi-small-pack', {
        y: 200,
        x: 100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#maggi-product',
          scrub: 3,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#maggi-particles .maggi-medium-pack', {
        y: -200,
        x: 100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#maggi-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#maggi-particles .maggi-big-pack', {
        y: -200,
        x: -100,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#maggi-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });

      ///// clorox
      gsap.from('#clorox-particles .clorox-clothes', {
        y: 200,
        x: 200,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#clorox-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#clorox-particles .clorox-bottle', {
        y: -100,
        x: 100,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#clorox-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#clorox-particles .clorox-flowers', {
        y: 200,
        x: 300,
        scale: 2,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#clorox-product',
          scrub: 3,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ////// niya
      gsap.from('#niya-particles .niya-mobile-app', {
        y: 100,
        x: 200,
        scale: 1.5,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#niya-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#niya-particles .niya-player-container', {
        x: 200,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#niya-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#niya-product .bg', {
        scale: 1.5,
        ease: 'none',
        scrollTrigger: {
          trigger: '#niya-product',
          scrub: 3,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


      ///// zeego chips
      gsap.from('#zeego-particles .zeego-snacks', {
        y: -200,
        scale: 2,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#zeego-product',
          scrub: 1,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#zeego-particles .zeego-desk', {
        y: -200,
        scale: 2,
        alpha: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '#zeego-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });
      gsap.from('#zeego-particles .zeego-music', {
        y: 200,
        scale: 0.5,
        alpha: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: '#zeego-product',
          scrub: 2,
          start: 'top bottom',
          end: 'bottom bottom'
        }
      });


    }, 0);
  }


}
