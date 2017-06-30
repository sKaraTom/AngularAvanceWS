import { Injectable } from '@angular/core';
import { Compte } from "app/objets-metiers/compte";
import { Observable } from "rxjs/Rx";

@Injectable()
export class AuthentificationService {

public estConnecte:boolean = false;

  constructor() { 
  }

  public seconnecter(compte:Compte) : Observable<boolean> {
      console.log(compte.login);
      console.log(compte.password);

      if( (compte.login === "toto") && (compte.password === "mdp") ) {
            this.estConnecte = true;
      }
      else {
          this.estConnecte = false;
      }
      return Observable.of(this.estConnecte);

  }



}
