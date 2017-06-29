

import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Http, RequestOptions,Headers } from "@angular/http";
import { Todos } from "app/objets-metiers/todos";



// Service de test de webservice : json récupérés 
// depuis le site https://jsonplaceholder.typicode.com
@Injectable()
export class TodosService {

private headers = new Headers({'Content-Type': 'application/json'});

    constructor(private http:Http) { 
 
    }


    public obtenirTodos() : Observable<Todos[]>{

    return this.http.get("https://jsonplaceholder.typicode.com/todos")
            .map(reponse => reponse.json());
    }


    public creerTodos(todos:Todos) {

        return this.http.post("https://jsonplaceholder.typicode.com/posts",todos,this.headers)
                    .map(res => res.json());

    }


}