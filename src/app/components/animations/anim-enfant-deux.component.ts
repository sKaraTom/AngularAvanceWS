import { Component, OnInit } from '@angular/core';
import { fadeInAnimation } from "app/components/animations/animations-effets/fade-in.animation";

@Component({
  selector: 'app-animation-enfant-deux',
  templateUrl: './anim-enfant-deux.component.html',
  styleUrls: ['./anim-enfant-deux.component.css'],
  animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class AnimEnfantDeuxComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
