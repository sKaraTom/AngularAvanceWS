


import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "app/components/home/home.component";
import { CoursListeComponent } from "app/components/cours/cours.component";
import { CoursDetailComponent } from "app/components/cours/cours-detail.component";
import { ContactComponent } from "app/components/contact/contact.component";
import { PageNotFoundComponent } from "app/components/page-not-found.component";
import { NgModule } from "@angular/core";
import { StagiaireComponent } from "app/stagiaire/stagiaire.component";
import { OpenDataParisComponent } from "app/open-data-paris/open-data-paris.component";
import { TodosComponent } from "app/todos/todos.component";
import { AnimParentComponent } from "app/components/animations/anim-parent.component";
import { AnimEnfantUnComponent } from "app/components/animations/anim-enfant-un.component";
import { AnimEnfantDeuxComponent } from "app/components/animations/anim-enfant-deux.component";
import { AnimEnfantPopupComponent } from "app/components/animations/anim-enfant-popup.component";



const routes: Routes = [
  { path: 'accueil', component: HomeComponent },
  { path: 'cours', component: CoursListeComponent },
  { path:'cours/:id', component: CoursDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'stagiaires', component: StagiaireComponent},
  { path: 'todos', component: TodosComponent},
  { path: 'opendata', component: OpenDataParisComponent},
  { path: 'animation', component: AnimParentComponent,
      children : [
        {path: '1', component: AnimEnfantUnComponent},
        {path: '2', component: AnimEnfantDeuxComponent},
        {path: 'pop', component: AnimEnfantPopupComponent}
      ]},
  
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