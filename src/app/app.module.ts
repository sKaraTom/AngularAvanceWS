import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursModule } from "./components/cours/cours.module";
import { HttpModule } from "@angular/http";
import { HomeModule } from "./components/home/home.module";

import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./components/home/home.component";
import { CoursListeComponent } from "./components/cours/cours.component";
import { PageNotFoundComponent } from "./components/page-not-found.component";
import { CoursDetailComponent } from "./components/cours/cours-detail.component";
import { ContactModule } from "./components/contact/contact.module";
import { ContactComponent } from "./components/contact/contact.component";
import { AppRoutingModule } from "app/app-routing.module";
import { StagiaireComponent } from './stagiaire/stagiaire.component';
import { StagiaireService } from "app/services/stagiaire.service";
import { TodosService } from "app/services/todos.service";
import { OpenDataParisComponent } from './open-data-paris/open-data-paris.component';
import { OpenDataParisService } from "app/services/opendata-paris.service";
import { TodosComponent } from './todos/todos.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AnimParentComponent } from "app/components/animations/anim-parent.component";
import { AnimEnfantUnComponent } from "app/components/animations/anim-enfant-un.component";
import { AnimEnfantDeuxComponent } from "app/components/animations/anim-enfant-deux.component";
import { AnimEnfantPopupComponent } from "app/components/animations/anim-enfant-popup.component";
import { GMapModule } from "primeng/primeng";


@NgModule({
  imports:      [ GMapModule,HttpModule,BrowserAnimationsModule,BrowserModule,ContactModule,
  CoursModule, HomeModule, AppRoutingModule  ],
  declarations: [ AppComponent, PageNotFoundComponent, StagiaireComponent, 
  OpenDataParisComponent,TodosComponent,
  AnimParentComponent, AnimEnfantUnComponent, AnimEnfantDeuxComponent,
  AnimEnfantPopupComponent ],
  providers: [StagiaireService,TodosService,OpenDataParisService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

