import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from "app/components/animations/animations-effets/slide-in-out.animation";
import { fadeInAnimation } from "app/components/animations/animations-effets/fade-in.animation";

@Component({
  selector: 'app-animation-enfant',
  templateUrl: './anim-enfant-un.component.html',
  styleUrls: ['./anim-enfant-un.component.css'],
  animations: [fadeInAnimation],
    host: { '[@fadeInAnimation]': '' }
})
export class AnimEnfantUnComponent implements OnInit {

  



  constructor() { }

  ngOnInit() {
  }

}
