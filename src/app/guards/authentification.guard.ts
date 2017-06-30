
import { Injectable } from "@angular/core";
import { CanActivate, CanActivateChild, CanLoad, Route, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Rx";
import { AuthentificationService } from "app/services/authentification.service";



@Injectable()
export class AuthentificationGuard implements CanActivate, CanActivateChild, CanLoad  {
    
    constructor(private authentificationService:AuthentificationService,
                private router:Router) {
        
    }
    
    canLoad(route: Route): boolean | Observable<boolean> | Promise<boolean> {
        
        return true;
    }


    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {

        return true;   
    }


    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        
        if(this.authentificationService.estConnecte) {
            return true;
        }
        else {
            window.alert("vous n'avez pas la permission d'accès à cette page.");
            this.router.navigate(['/accueil']);
            return false;
        }
        
    }



}