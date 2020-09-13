import { Component, OnInit, Input } from '@angular/core';
import {
  faArrowUp,
  faArrowDown,
  faArrowRight,
  faChevronUp,
  faChevronDown,
  faChevronRight,
  faChevronLeft
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
import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';

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
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;
  faArrowRight = faArrowRight;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;

  scrollbar;


  contactFormHeader: string = `Keep In Touch`;

  constructor() {}

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


    // animating content
    // Wrap every letter in a span
    const header1 = document.querySelectorAll('.home-section-content h1.section-header');
    header1.forEach((el) => {
      el.innerHTML = el.textContent.replace(/\S/g, '<span class=\'letter d-inline-block\'>$&</span>');
    });


    // Initializing swiper carousel
    const homeSwiper = new swiper('#home-swiper', {
      // Optional parameters
      direction: 'vertical',
      speed: 1200,
      grabCursor: false,
      effect: 'slide',
      preventInteractionOnTransition: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'progressbar',
        progressbarOpposite: true
        // type: 'custom',
        // renderCustom: (swiper, current, total) => {
        //   return current + ' of ' + total;
        // }
        // type: 'fraction',
        // renderFraction: (currentClass, totalClass) => {
        //   return '<span class="' + currentClass + '"></span>' +
        //           ' / ' +
        //           '<span class="' + totalClass + '"></span>';
        // }
      },
      allowTouchMove: false,
      resistance: true,
      resistanceRatio: 0.85,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      mousewheel: {
        invert: false,
        releaseOnEdges: true,
        sensitivity: 0.1,
      },
      navigation: {
        nextEl: '.next-btn',
        prevEl: '.prev-btn',
      },
      // scrollbar: {
      //   el: '.swiper-scrollbar',
      //   draggable: false,
      // },
      scrollbar: false,
      on: {
        init: (): void => {
          gsap.set('.home-section-content', {zIndex: '-1'});
          gsap.set('#welcome-section-content', {zIndex: '1'});

          gsap.to($('.swiper-slide-next').find('.img-mask'), {y: '-50%', duration: 0.6});
          $('#welcome-section-content').addClass('active');

          const welcomeTL = gsap.timeline({ease: 'easeOutExpo'});
          welcomeTL.fromTo('#welcome-section-content h2.welcome-sub-header',
            {y: '-50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.3}, '+=0.5');

          anime.timeline({loop: false})
          .add({
            targets: '#welcome-section-content h1.welcome-header .line',
            opacity: [0.5, 1],
            scaleX: [0, 1],
            easing: 'easeInOutExpo',
            duration: 300,
            delay: 200
          }).add({
            targets: '#welcome-section-content h1.welcome-header .line',
            duration: 300,
            easing: 'easeOutExpo',
            translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + 'em'
          }).add({
            targets: '#welcome-section-content h1.welcome-header .letters-left',
            opacity: [0, 1],
            translateX: ['-0.5em', 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=300'
          }).add({
            targets: '#welcome-section-content h1.welcome-header .letters-right',
            opacity: [0, 1],
            translateX: ['0.5em', 0],
            easing: 'easeOutExpo',
            duration: 300,
            offset: '-=300'
          });

          welcomeTL.fromTo('#welcome-section-content h3.welcome-slogan',
            {y: '50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.3}, '+=0.6');

        },


        slideNextTransitionStart: (): void => {
          $('.nav-btns-container .prev-btn').attr('style', '');
          $('.nav-btns-container .next-btn').attr('style', '');
          $('#magicMouseCursor').addClass('is-scrolling-down');
          $('.nav-btns-container .next-btn').addClass('is-sliding-down');
          $('.home-section-content').removeClass('floating-animation');

          const secContent = document.querySelectorAll('.home-section-content');
          secContent.forEach((el) => {
            $(el).removeClass('active');
          });
          $('.home-section-content').eq(homeSwiper.activeIndex).addClass('active');

          const headersTL = gsap.timeline({ease: 'easeInExpo'});
          gsap.set('.home-section-content', {zIndex: '-1'});
          gsap.set('.home-section-content.active', {zIndex: '1'});
          headersTL.fromTo('.home-section-content.active h1.section-header .letter:nth-child(even)',
            {y: '-100%', scaleY: 2, opacity: 0}, {y: '0%', scaleY: 1, opacity: 1, duration: 0.45, stagger: 0.1});
          headersTL.fromTo('.home-section-content.active h1.section-header .letter:nth-child(odd)',
            {y: '100%', scaleY: 2, opacity: 0}, {y: '0%', scaleY: 1, opacity: 1, duration: 0.45, stagger: 0.1}, '-=0.45');
          headersTL.fromTo('.home-section-content.active h2.section-sub-header',
            {y: '100%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.6}, '-=0.2');

          const bgTL = gsap.timeline();

          bgTL.to('.swiper-slide-active .img-mask', {y: '0%', opacity: 1, duration: 0.9});
          gsap.set('.swiper-slide-active .img-mask', {transition: 'all ease 0'});
          if ( $('.swiper-slide-next').length > 0 ){
            bgTL.to('.swiper-slide-next .img-mask', {y: '-50%', duration: 0.9, delay: 0.1}, '-=0.9');
            gsap.set('.swiper-slide-next .img-mask', {transition: 'all ease 0'});
          }
          bgTL.to('.swiper-slide-prev .img-mask', {y: '50%', duration: 0.9, delay: 0.1}, '-=0.9');
          gsap.set('.swiper-slide-prev .img-mask', {transition: 'all ease 0'});
        },


        slideNextTransitionEnd: (): void => {
          $('#magicMouseCursor').removeClass('is-scrolling-down');
          $('#magicMouseCursor').removeClass('is-scrolling-up');
          $('.nav-btns-container .next-btn').removeClass('is-sliding-down');
          $('.nav-btns-container .prev-btn').removeClass('is-sliding-up');
        },


        slidePrevTransitionStart: (): void => {
          // $('#home-nav-btns-container').fadeIn();
          // $('#home-swiper .content-container').fadeIn();
          $('.nav-btns-container .prev-btn').attr('style', '');
          $('.nav-btns-container .next-btn').attr('style', '');
          $('#magicMouseCursor').addClass('is-scrolling-up');
          $('.nav-btns-container .prev-btn').addClass('is-sliding-up');
          // $('.home-section-content').removeClass('floating-animation');
          const secContent = document.querySelectorAll('.home-section-content');
          secContent.forEach((el) => {
            $(el).removeClass('active');
          });
          $('.home-section-content').eq(homeSwiper.activeIndex).addClass('active');

          if ( homeSwiper.activeIndex === 0 ){
            const welcomeTL = gsap.timeline({ease: 'easeOutExpo'});
            welcomeTL.fromTo('#welcome-section-content h2.welcome-sub-header',
              {y: '-50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.3}, '+=0.5');

            anime.timeline({loop: false})
            .add({
              targets: '#welcome-section-content h1.welcome-header .line',
              opacity: [0.5, 1],
              scaleX: [0, 1],
              easing: 'easeInOutExpo',
              duration: 300,
              delay: 200
            }).add({
              targets: '#welcome-section-content h1.welcome-header .line',
              duration: 300,
              easing: 'easeOutExpo',
              translateY: (el, i) => (-0.625 + 0.625 * 2 * i) + 'em'
            }).add({
              targets: '#welcome-section-content h1.welcome-header .letters-left',
              opacity: [0, 1],
              translateX: ['-0.5em', 0],
              easing: 'easeOutExpo',
              duration: 300,
              offset: '-=300'
            }).add({
              targets: '#welcome-section-content h1.welcome-header .letters-right',
              opacity: [0, 1],
              translateX: ['0.5em', 0],
              easing: 'easeOutExpo',
              duration: 300,
              offset: '-=300'
            });

            welcomeTL.fromTo('#welcome-section-content h3.welcome-slogan',
              {y: '50%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.3}, '+=0.6');
          }

          const headersTL = gsap.timeline({ease: 'easeInExpo'});
          gsap.set('.home-section-content', {zIndex: '-1'});
          gsap.set('.home-section-content.active', {zIndex: '1'});
          headersTL.fromTo('.home-section-content.active h1.section-header .letter:nth-child(odd)',
            {y: '-100%', scaleY: 2, opacity: 0}, {y: '0%', scaleY: 1, opacity: 1, duration: 0.45, stagger: 0.1});
          headersTL.fromTo('.home-section-content.active h1.section-header .letter:nth-child(even)',
            {y: '100%', scaleY: 2, opacity: 0}, {y: '0%', scaleY: 1, opacity: 1, duration: 0.45, stagger: 0.1}, '-=0.45');
          headersTL.fromTo('.home-section-content.active h2.section-sub-header',
            {y: '100%', opacity: 0}, {y: '0%', opacity: 1, duration: 0.6}, '-=0.2');

          const bgTL = gsap.timeline();
          bgTL.to('.swiper-slide-active .img-mask', {y: '0%', opacity: 1, duration: 0.9});
          gsap.set('.swiper-slide-active .img-mask', {transition: 'all ease 0'});
          if ( $('.swiper-slide-prev').length > 0 ){
            bgTL.to('.swiper-slide-prev .img-mask', {y: '50%', duration: 0.9, delay: 0.1}, '-=0.9');
            gsap.set('.swiper-slide-prev .img-mask', {transition: 'all ease 0'});
          }
          bgTL.to('.swiper-slide-next .img-mask', {y: '-50%', duration: 0.9, delay: 0.1}, '-=0.9');
          gsap.set('.swiper-slide-next .img-mask', {transition: 'all ease 0'});
        },

        slidePrevTransitionEnd: (): void => {
          $('#magicMouseCursor').removeClass('is-scrolling-down');
          $('#magicMouseCursor').removeClass('is-scrolling-up');
          $('.nav-btns-container .prev-btn').removeClass('is-sliding-up');
          $('.nav-btns-container .next-btn').removeClass('is-sliding-down');
        },

        reachEnd: (): void => {
          // $('#home-nav-btns-container').fadeOut();
          // $('#home-swiper .content-container').fadeOut();
        }
      }
    });


    // Initializing Clients swiper carousel
    const clientsSwiper = new swiper('#clients-swiper', {
      // Optional parameters
      direction: 'horizontal',
      speed: 800,
      grabCursor: true,
      autoHeight: false,
      autoplay: {
        delay: 500,
        disableOnInteraction: false,
      },
      loop: true,
      centeredSlides: false,
      slidesPerView: 5,
      spaceBetween: 50,
      watchOverflow: true,
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 3,
          spaceBetween: 30
        },
        // when window width is >= 640px
        640: {
          slidesPerView: 4,
          spaceBetween: 40
        },
        // when window width is >= 960px
        960: {
          slidesPerView: 5,
          spaceBetween: 50
        }
      },
      preventInteractionOnTransition: false,
      // pagination: {
      //   el: '.swiper-pagination',
      //   type: 'bullets',
      // },
      pagination: false,
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


    // Initialize Tilt.js

    const tiltOptions = {
      maxTilt:        2,
      perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
      easing:         'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
      scale:          1.02,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          800,    // Speed of the enter/exit transition.
      transition:     false,   // Set a transition on enter/exit.
      disableAxis:    'x',   // What axis should be disabled. Can be X or Y.
      reset:          true,   // If the tilt effect has to be reset on exit.
      glare:          false,  // Enables glare effect
      maxGlare:       0.1       // From 0 - 1.
    };
    const bigTiltOptions = {
      maxTilt:        10,
      perspective:    1200,   // Transform perspective, the lower the more extreme the tilt gets.
      easing:         'cubic-bezier(.03,.98,.52,.99)',    // Easing on enter/exit.
      scale:          1,      // 2 = 200%, 1.5 = 150%, etc..
      speed:          800,    // Speed of the enter/exit transition.
      transition:     false,   // Set a transition on enter/exit.
      disableAxis:    'x',   // What axis should be disabled. Can be X or Y.
      reset:          true,   // If the tilt effect has to be reset on exit.
      glare:          false,  // Enables glare effect
      maxGlare:       0.1       // From 0 - 1.
    };
    const tiltSection = $('.home-section').tilt(tiltOptions);
    // const tiltContent = $('.home-section-content .text-container').tilt(bigTiltOptions);


  }


  
  
}
