import { Component, OnInit } from '@angular/core';
import {Player} from '../../player';

import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor() { }

  player: Player = {
    name: "",
    tour_id: null
  }
  ngOnInit() {
  }

  hideElement(){
    if(this.player.name == "" || this.player.tour_id == null){
      document.getElementById('error_message').classList.remove('hidden');
      if(this.player.name == ""){
        document.getElementById('name_input').classList.add('error');
        
      }else{
        document.getElementById('name_input').classList.remove('error');
      }
      if(this.player.tour_id == null){
        document.getElementById('tour_id_input').classList.add('error');
      }else{
        document.getElementById('tour_id_input').classList.remove('error');
      }
    }else{
      console.log(this.player);
      document.getElementById('error_message').classList.add('hidden');
      $('app-login div').animate({top: '100%', height: '0px'}, 500);
      setTimeout(() => {
        $('app-login').css('display', 'none');
      }, 500)       
    }
     
  }
  get Player() {
    return this.player;
  }

}
