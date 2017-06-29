import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions,Headers } from "@angular/http";



// Test de webservices avec opendataParis
@Injectable()
export class OpenDataParisService {

    private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) { 
 
    }

    public obtenirLivresPretesParis() {

    return this.http.get("https://opendata.paris.fr/api/records/1.0/search/?dataset=les-titres-les-plus-pretes&rows=200&sort=nombre_de_prets&facet=support&facet=auteur")
            .map(reponse => reponse.json());
        
    }




}