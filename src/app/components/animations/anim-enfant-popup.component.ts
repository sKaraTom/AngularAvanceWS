import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from "app/components/animations/animations-effets/index-animations";
import { Router } from "@angular/router";

@Component({
  selector: 'app-animation-enfant-pop',
  templateUrl: './anim-enfant-popup.component.html',
  styleUrls: ['./anim-enfant-popup.component.css'],
  animations: [slideInOutAnimation],
  host: { '[@slideInOutAnimation]': '', '(window:keydown)': 'activerRaccourciClavier($event)' }
})
export class AnimEnfantPopupComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }




public activerRaccourciClavier(event):void {

    if (event.keyCode == 27){
      this.router.navigate(['/animation']);
    }

}



}