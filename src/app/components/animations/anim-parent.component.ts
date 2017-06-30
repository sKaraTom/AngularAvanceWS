import { Component, OnInit } from '@angular/core';
import { slideInOutAnimation } from "app/components/animations/animations-effets/slide-in-out.animation";
import { Router } from "@angular/router";

@Component({
  selector: 'app-animations',
  templateUrl: './anim-parent.component.html',
  styleUrls: ['./anim-parent.component.css'],
  host: { '(window:keydown)': 'activerRaccourciClavier($event)' }

})
export class AnimParentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }


public activerRaccourciClavier(event):void {

    if (event.keyCode == 37){
      this.router.navigate(['/animation/pop']);
    }

}



}
