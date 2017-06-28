import { Component, OnInit } from '@angular/core';
import { Stagiaire } from "app/objets-metiers/stagiaire";
import { StagiaireService } from "app/services/stagiaire.service";

@Component({
  selector: 'app-stagiaire',
  templateUrl: './stagiaire.component.html',
  styleUrls: ['./stagiaire.component.css']
})
export class StagiaireComponent implements OnInit {


  listeStagiaires:Stagiaire[];



  constructor(private stagiaireService:StagiaireService) { 
    this.listeStagiaires = [];

  }

  ngOnInit() {

    this.stagiaireService.obtenirStagiaires()
                .subscribe(
                  reponse => this.listeStagiaires = reponse,
                  erreur => console.log(erreur),
                  () => console.log("c'est terminé !")
                );


  }

}
