import { Injectable } from '@angular/core';
import { Stagiaire } from "app/objets-metiers/stagiaire";
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions,Headers } from "@angular/http";

@Injectable()
export class StagiaireService {

  // private listeStagiaires:Stagiaire[];
  private headers = new Headers({'Content-Type': 'application/json'});


  constructor(private http:Http) { 

    // this.listeStagiaires = [];
  }

  
public obtenirStagiaires() : Observable<Stagiaire[]>{

    let options = new RequestOptions({ headers: this.headers });

    return this.http.get("D:/PROJETS/AngAvanceWS/src/app/api/stagiaires.json",options)
            .map(reponse => reponse.json());
}


public creerStagiaire(stagiaire:Stagiaire) : void{

      this.http.post("src/app/api/stagiaires.json",stagiaire,this.headers);
           
}


}
