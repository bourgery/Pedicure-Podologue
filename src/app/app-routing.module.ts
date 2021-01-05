import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CabinetComponent } from './cabinet/cabinet.component';
import { PodologieComponent } from './podologie/podologie.component';
import { PedicurieComponent } from "./pedicurie/pedicurie.component";
import { PodologieSportComponent } from "./podologie-sport/podologie-sport.component";
import { PodologiePediatriqueComponent } from "./podologie-pediatrique/podologie-pediatrique.component";


// routes
const appRoutes: Routes = [
  { path: 'cabinet', component: CabinetComponent},
  { path: 'podologie', component: PodologieComponent},
  { path: 'podologie-sport', component: PodologieSportComponent},
  { path: 'podologie-pediatrique', component: PodologiePediatriqueComponent},
  { path: 'pedicurie', component: PedicurieComponent},
  { path: '', redirectTo: 'cabinet', pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
