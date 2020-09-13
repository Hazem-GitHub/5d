import { Component, OnInit } from '@angular/core';
import {
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
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss']
})
export class SocialComponent implements OnInit {

  faShareAlt = faShareAlt;
  faFacebookF = faFacebookF;
  faInstagram = faInstagram;
  faYoutube = faYoutube;
  faLinkedinIn = faLinkedinIn;

  showSocialLinks = () => {
    $('.social-list-toggler').addClass('opened');
    // alert('opened');
    for ( let i = $('.social-list li').length; i >= 0; i-- ) {
      $('.social-list li').eq(i).css('transitionDelay', (i * 50) + 'ms');
      $('.social-list li').eq(i).addClass('shown');
    }
  }
  hideSocialLinks = () => {
    $('.social-list-toggler').removeClass('opened');
    for ( let i = $('.social-list li').length; i >= 0; i-- ) {
      $('.social-list li').eq(i).css('transitionDelay', (i * 50) + 'ms');
      $('.social-list li').eq(i).removeClass('shown');
    }
  }
  toggleSocialLinks = (e) => {
    e.stopImmediatePropagation();
    if ($('.social-list-toggler').hasClass('opened')){
      $('.social-list-toggler').removeClass('opened');
      for ( let i = $('.social-list li').length; i >= 0; i-- ) {
        $('.social-list li').eq(i).css('transitionDelay', (i * 50) + 'ms');
        $('.social-list li').eq(i).removeClass('shown');
      }
    }else{
      $('.social-list-toggler').addClass('opened');
      for ( let i = $('.social-list li').length; i >= 0; i-- ) {
        $('.social-list li').eq(i).css('transitionDelay', (i * 50) + 'ms');
        $('.social-list li').eq(i).addClass('shown');
      }
    }
  }
  constructor() { }

  ngOnInit(): void {

  }

}
