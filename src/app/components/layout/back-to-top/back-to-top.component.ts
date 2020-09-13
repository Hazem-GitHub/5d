import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { gsap } from 'gsap';
import { ExpoScaleEase, RoughEase, SlowMo } from 'gsap/EasePack';
import {
  faArrowUp,
  faChevronUp
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-back-to-top',
  templateUrl: './back-to-top.component.html',
  styleUrls: ['./back-to-top.component.scss']
})
export class BackToTopComponent implements OnInit {
  faChevronUp = faChevronUp;
  faArrowUp = faArrowUp;

  // @Output() goTop: EventEmitter<any> = new EventEmitter();

  triggerGoTop(): void{
      //  this.goTop.emit();
       gsap.to(document.body, {
        duration: 0.5,
        scrollTo:
        {
          y: 0,
          autoKill: true
        },
        ease: 'rough({clamp: true,strength: 3, points: 1, template: strong.inOut, taper: both, randomize: false})',
        delay: 0
      });
  }

  constructor() { }

  ngOnInit(): void {

  }
}
