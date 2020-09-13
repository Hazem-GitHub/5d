import { Component, OnInit, HostListener } from '@angular/core';
import {
  faBars,
  faTimes,
  faChevronRight,
  faArrowRight,
  faChevronLeft,
  faArrowLeft,
  faEllipsisH,
  faEllipsisV,
  faShareAlt
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faInstagram,
  faYoutube,
  faLinkedinIn
} from '@fortawesome/free-brands-svg-icons';
import { ɵallowPreviousPlayerStylesMerge } from '@angular/animations/browser';
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

declare var $;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: []
})
export class HeaderComponent implements OnInit {
  // Icons
  faArrowRight = faArrowRight;
  faArrowLeft = faArrowLeft;
  faBars = faBars;
  faEllipsisH = faEllipsisH;
  faEllipsisV = faEllipsisV;
  faChevronRight = faChevronRight;
  faChevronLeft = faChevronLeft;
  faTimes = faTimes;
  faShareAlt = faShareAlt;

  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  constructor() {
  }


  ngOnInit(): void {

    $('.navbar-toggler').on('click', (e) => {
      $('.menu-overlay').fadeIn();
    });
    $('.navbar-closer').on('click', (e) => {
      $('.sub-menu-back-btn').click();
      $('.menu-overlay').fadeOut();
    });

    $('.sub-menu-toggler').on('click', (e) => {
      $('#main-nav').addClass('opened');
      $('.sub-menu-back-btn').fadeIn();
      $('.sub-menu-toggler fa-icon').addClass('flip');
    });

    $('.sub-menu-back-btn').on('click', (e) => {
      $('#main-nav').removeClass('opened');
      $('.sub-menu-back-btn').fadeOut();
      $('.sub-menu-toggler fa-icon').removeClass('flip');
    });

    $(document).on('click', (e) => {
      // console.log(e.target);
      if ( $('#navigation-container').hasClass('show') && !$(e.target).closest('#navigation-container,#navigation-container a,#navigation-container button,.navbar-toggler').length ) {
        $('.sub-menu-back-btn').click();
        $('.navbar-toggler').click();
        $('.menu-overlay').fadeOut();
      }
    });
  }

  
}

