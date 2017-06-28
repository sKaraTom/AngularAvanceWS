
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { Course } from "../../objets-metiers/course";
import { CoursService } from "../../services/cours.service";


@Component({
    moduleId:module.id,
    selector:'cours-detail',
    templateUrl:'cours-detail.component.html'
})
export class CoursDetailComponent implements OnInit {
      
    listeCours:Course[];

    title:string;
    id:number

    recherche:Course[];
    
    public cours:Course;

    public coursModifie:Course;

      constructor(private router:ActivatedRoute,
      private route:Router,
      private coursService:CoursService
      )
      
       {
        this.cours = new Course();
        this.coursModifie = new Course();
        
        // récupérer l'id du cours depuis l'url.
        this.id = this.router.snapshot.params['id'];
        this.obtenirCours();

      }
      
        ngOnInit(): void {

            this.title = `Détail du cours ${this.id}`;

        }


public goBack() {
    this.route.navigate(['/cours']);

}

public obtenirCours() {

    this.coursService.obtenirCoursNode(this.id)
                            .subscribe(res => this.cours = res,
                            err => console.log("erreur " + err.status ),
                            () => console.log(this.cours.name));


}


public confirmerModification() {

    // ici sauver this.cours qui a été modifié (two ways binding [(ngModel)] de chaque champ.)

}


}
