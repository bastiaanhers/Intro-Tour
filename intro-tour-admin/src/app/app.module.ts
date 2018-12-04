import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './components/event/event.component';
import { NavigateComponent } from './components/navigate/navigate.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { EventSideNavComponent } from './components/event-side-nav/event-side-nav.component';

import { AgmCoreModule } from '@agm/core';


const appRoutes: Routes = [
  {path: 'event', component: EventComponent}, 
  {path: '', component: HomeComponent},
  {path: 'event-side-nav', component:EventSideNavComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    NavigateComponent,
    HomeComponent,
    EventSideNavComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      {enableTracing: true}
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDY85XunkRxZh142fdwf4cpHqg7Q4Yv9Sc'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
