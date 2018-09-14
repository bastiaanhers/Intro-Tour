import { Component } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pre_page;
  ngOnInit(){
   $("#home").addClass("selected");
   $("#home p").addClass("selected");
   this.pre_page = 'home';
 }
  navigate(id)
 {
   $(`#${this.pre_page}`).removeClass("selected");
   $(`#${this.pre_page} p`).removeClass("selected");
    this.pre_page = id;
    $(`#${id}`).addClass("selected");
   $(`#${id} p`).addClass("selected");
 }
}
