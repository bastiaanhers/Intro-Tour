import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';


const appRoutes: Routes = [
  {path: 'event', component: EventComponent}, 
  {path: '', component: HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavigateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
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
