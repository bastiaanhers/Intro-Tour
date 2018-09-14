import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
//import { LoginComponent } from './components/login/login.component';
//import { HomeComponent } from './components/home/home.component';
import { TeamCreateComponent } from './components/team-create/team-create.component';
import { NavigateComponent } from './components/navigate/navigate.component';
//import { LocationPageComponent } from './location-page/location-page.component';

import { Team } from './team';

const appRoutes: Routes = [
  //{path: 'location', component: LocationPageComponent},
  //{path: 'home', component: HomeComponent},
  {path: 'team-create', component: TeamCreateComponent},
  //{path: '', component: LoginComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    //LoginComponent,
    //HomeComponent,
    //LocationPageComponent,
    NavigateComponent,
    TeamCreateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
