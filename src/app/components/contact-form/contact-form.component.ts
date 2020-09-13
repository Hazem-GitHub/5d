import { Component, OnInit, Input } from '@angular/core';
import {
  faPaperPlane
} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  faPaperPlane = faPaperPlane;
  @Input() formHeader: string;

  constructor() { }

  ngOnInit(): void {
  }

}
