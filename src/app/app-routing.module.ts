


import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/components/home/home.component";
import { CoursListeComponent } from "app/components/cours/cours.component";
import { CoursDetailComponent } from "app/components/cours/cours-detail.component";
import { ContactComponent } from "app/components/contact/contact.component";
import { PageNotFoundComponent } from "app/components/page-not-found.component";
import { NgModule } from "@angular/core";
import { StagiaireComponent } from "app/stagiaire/stagiaire.component";



const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'cours', component: CoursListeComponent },
  { path:'cours/:id', component: CoursDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'stagiaires', component: StagiaireComponent},
  
  { path: '', redirectTo: '/accueil', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}