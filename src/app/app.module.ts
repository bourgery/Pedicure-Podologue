import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CabinetComponent } from './cabinet/cabinet.component';
import { PedicurieComponent } from "./pedicurie/pedicurie.component";
import { PodologieComponent } from './podologie/podologie.component';
import { PodologiePediatriqueComponent } from "./podologie-pediatrique/podologie-pediatrique.component";
import { PodologieSportComponent } from "./podologie-sport/podologie-sport.component";

@NgModule({
  declarations: [
    AppComponent,
    CabinetComponent,
    PedicurieComponent,
    PodologieComponent,
    PodologiePediatriqueComponent,
    PodologieSportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBbNhtT4qNnIxmXuzfqoedOmdW6CIxRJsY'
    }),
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
