


import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { AuthentificationService } from "app/services/authentification.service";
import { Compte } from "app/objets-metiers/compte";

@Component({
    moduleId:module.id,
    selector:'home',
    templateUrl:'home.component.html',
    styleUrls: ['home.component.css'],
})
export class HomeComponent implements OnInit {
       
        messageSucces:boolean = false;
        messageErreur:boolean = false;

        estConnecte:boolean = false;

       constructor(private authService:AuthentificationService) {
            if(this.authService.estConnecte) {
                this.estConnecte = true;
            }


       }
        
        
    ngOnInit(): void {

    }
        

    public seConnecter(form:NgForm) {
            
            let compte:Compte = new Compte();
            compte.login = form.value.login;
            compte.password= form.value.password;

            this.authService.seconnecter(compte)
                        .subscribe(
                            res => {
                                if(res == true) {
                                    console.log(res);
                                    this.messageSucces = true;
                                    this.messageErreur = false;
                                    this.estConnecte = true;
                                }
                                else {
                                    console.log(res);
                                    this.messageErreur = true;
                                    this.messageSucces = false;
                                    this.estConnecte = false;
                                }
                            }
                                    );
            

    }

    public seDeconnecter() {

        this.authService.estConnecte = false;
        this.estConnecte = false;
        this.messageSucces = false;
        this.messageErreur = false;

    }




}
