import { Component, OnInit } from '@angular/core';
import {
  faMapMarkerAlt,
  faMobileAlt,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  // Icons
  faMapMarkerAlt = faMapMarkerAlt;
  faMobileAlt = faMobileAlt;
  faEnvelope = faEnvelope;


  constructor() { }

  ngOnInit(): void {
  }

}
