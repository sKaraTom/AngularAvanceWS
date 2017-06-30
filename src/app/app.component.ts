import { Component } from '@angular/core';
import { Course } from './objets-metiers/course';
import { Router } from "@angular/router";

@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html',
  host: { '(window:keydown)': 'activerRaccourciClavier($event)' }
})
export class AppComponent {

name = 'Angular';

listeMot:string[];
courses:Course[];

estAffiche:boolean = false;

constructor(private router:Router) {

this.listeMot = ["mot1","mot2","mot3"];

}

public toggle():void{
    if(this.estAffiche) {
      this.estAffiche = false;
    }
  else {this.estAffiche = true; }

}

/** raccourcis claviers sur tout le menu.
 * une touche par rubrique.
 * @param event 
 */
public activerRaccourciClavier(event):void {

    // touche w
    if (event.keyCode == 87){
      this.router.navigate(['/accueil']);
    }
    // touche x
    if (event.keyCode == 88){
      this.router.navigate(['/cours']);
    }
    // touche c
    if (event.keyCode == 67){
      this.router.navigate(['/contact']);
    }
    // touche v
    if (event.keyCode == 86){
      this.router.navigate(['/stagiaires']);
    }
    // touche b
    if (event.keyCode == 66){
      this.router.navigate(['/todos']);
    }
    // touche n
    if (event.keyCode == 78){
      this.router.navigate(['/opendata']);
    }
    // touche ,
    if (event.keyCode == 188){
      this.router.navigate(['/animation']);
    }
    // touche ,
    if (event.keyCode == 190){
      this.router.navigate(['/livres']);
    }




}


}
