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

    // let options = new RequestOptions({ headers: this.headers });
    const url = 'app/api/stagiaires.json';

    return this.http.get(url)
            .do(x => console.log(x))
            .map(reponse => reponse.json());
}


public creerStagiaire(stagiaire:Stagiaire) : void{

      this.http.post("src/app/api/stagiaires.json",stagiaire,this.headers);
           
}


}
