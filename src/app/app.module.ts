import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoursModule } from "./components/cours/cours.module";
import { HttpModule } from "@angular/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
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


@NgModule({
  imports:      [ HttpModule,BrowserModule,ContactModule, CoursModule, HomeModule, AppRoutingModule  ],
  declarations: [ AppComponent, PageNotFoundComponent, StagiaireComponent, OpenDataParisComponent, TodosComponent ],
  providers: [StagiaireService,TodosService,OpenDataParisService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

