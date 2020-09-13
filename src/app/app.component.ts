import { Component, Input, OnInit, HostListener } from '@angular/core';
import {
  faArrowUp,
  faArrowDown,
  faChevronUp,
  faChevronDown
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

import Scrollbar, {ScrollbarPlugin} from 'smooth-scrollbar';


// import {magicMouse} from '../assets/js/magic_mouse.js';


declare var $;
import mouseWheelListen from 'mouse-wheel';

import { BackTopService } from './services/back-top.service';
import { Router } from '@angular/router';



class ScaleDeltaPlugin extends ScrollbarPlugin {
  static pluginName = 'scaleDelta';

  transformDelta(delta, fromEvent): any {
    return {
      x: delta.x * 1.5,
      y: delta.y * 1.5,
    }
  }
}


// type Momentum = {
//   x: number,
//   y: number,
// };

// class SetMomentumPlugin extends ScrollbarPlugin {
//   static pluginName = 'changeMomentum';

//   onRender(remainMomentum: Momentum): any {
//     console.log(remainMomentum);
//     this.scrollbar.addMomentum(0, 10);
//   }
// }


declare var $;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [BackTopService]
})
export class AppComponent implements OnInit{
  title = 'fifth-dimension';
  // Icons
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;
  faChevronUp = faChevronUp;
  faChevronDown = faChevronDown;

  scrollbar: any;

  @HostListener('window:scroll', ['$event'])
  scrollHandler(event): void {
    console.log(event);
  }


  // goTop(): void{
  //   alert('hello');
  //   gsap.to(document.body, { duration: 1,
  //                             scrollTo:
  //                             {
  //                               y: 0,
  //                               autoKill: true
  //                             },
  //                             ease: 'Power4.easeOut',
  //                             delay: 0
  //                           });
  // }


  constructor(router: Router) {
    router.events.subscribe(events => {
      // console.log(events);
      // const html = document.documentElement;
      // const body = document.body;

      // const scroller = {
      //   target: document.querySelector('.scroll-container'),
      //   ease: 0.05, // <= scroll speed
      //   endY: 0,
      //   y: 0,
      //   resizeRequest: 1,
      //   scrollRequest: 0,
      // };

      // let requestId = null;

      // gsap.set(scroller.target, {
      //   rotation: 0.001,
      //   force3D: true
      // });

      // updateScroller();
      // window.focus();
      // window.addEventListener('resize', onResize);
      // document.addEventListener('scroll', onScroll);

      // function updateScroller(): void {
      //   console.log(scroller.resizeRequest);

      //   const resized = scroller.resizeRequest > 0;

      //   if (resized) {
      //     const height = scroller.target.clientHeight;
      //     body.style.height = height + 'px';
      //     scroller.resizeRequest = 0;
      //   }

      //   const scrollY = window.pageYOffset || html.scrollTop || body.scrollTop || 0;

      //   scroller.endY = scrollY;
      //   scroller.y += (scrollY - scroller.y) * scroller.ease;

      //   if (Math.abs(scrollY - scroller.y) < 0.05 || resized) {
      //     scroller.y = scrollY;
      //     scroller.scrollRequest = 0;
      //   }

      //   gsap.set(scroller.target, {
      //     y: -scroller.y
      //   });

      //   requestId = scroller.scrollRequest > 0 ? requestAnimationFrame(updateScroller) : null;
      // }

      // function onScroll(): void {
      //   scroller.scrollRequest++;
      //   if (!requestId) {
      //     requestId = requestAnimationFrame(updateScroller);
      //   }
      // }

      // function onResize(): void {
      //   scroller.resizeRequest++;
      //   if (!requestId) {
      //     requestId = requestAnimationFrame(updateScroller);
      //   }
      // }
    });
  }

  ngOnInit(): void {

    // Listening to mouse wheel events
    // mouseWheelListen(window, (dx, dy, dz, ev) => {
    //   console.log(dx, dy, dz, ev);
    // }, false);

    // // // Scrollbar.use(ScaleDeltaPlugin);
    // // // // Initializing smoothscrolbar

    // // // const scrollOptions = {
    // // //   damping: 0.1,
    // // //   thumbMinSize: 20,
    // // //   renderByPixels: true,
    // // //   alwaysShowTracks: false,
    // // //   continuousScrolling: false,
    // // //   wheelEventTarget: document.querySelector('.scroll-container'),
    // // //   plugins: {
    // // //     scaleDelta: {
    // // //       events: [/wheel/],
    // // //     }
    // // //   }
    // // // };
    // // // this.scrollbar = Scrollbar.init(document.querySelector('.scroll-container'), scrollOptions);

    // // // // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element: 
    // // // ScrollTrigger.scrollerProxy('.scroll-container', {
    // // //   scrollTop(value): any {
    // // //     if (arguments.length) {
    // // //       this.scrollbar.scrollTop = value; // setter
    // // //     }
    // // //     return this.scrollbar.scrollTop;    // getter
    // // //   },
    // // //   getBoundingClientRect(): any {
    // // //     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    // // //   }
    // // // });

    // // // // when the smooth scroller updates, tell ScrollTrigger to update() too:
    // // // this.scrollbar.addListener(ScrollTrigger.update);

    // // // ScrollTrigger.addEventListener('scrollEnd', () => console.log('scrolling ended!'));
    // const scroll = new LocomotiveScroll({
    //   el: document.querySelector('.scroll-container'),
    //       smooth: true
    // });
    // const scrollOptions = {
    //   name: 'app-scrolbar',
    //   speed: 1,
    //   damping: 0.1,
    //   thumbMinSize: 20,
    //   renderByPixels: true,
    //   alwaysShowTracks: false,
    //   continuousScrolling: false,
    //   overscrollEffect: 'glow',
    //   overscrollEffectColor: '#fefefe',
    //   overscrollDamping: 0.2,
    // };
    // this.scrollbar = SmoothScrollbar.init(document.querySelector('.scroll-container'), scrollOptions);

    // Tell ScrollTrigger to use these proxy getter/setter methods for the "body" element:
    // ScrollTrigger.scrollerProxy('.scroll-container', {
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

    // // when the smooth scroller updates, tell ScrollTrigger to update() too:
    // this.scrollbar.addListener(ScrollTrigger.update);

    // ScrollTrigger.addEventListener('scrollEnd', () => console.log('scrolling ended!'));




  }


}
