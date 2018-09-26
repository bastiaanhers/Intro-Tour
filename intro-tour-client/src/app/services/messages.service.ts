import { Injectable } from '@angular/core';
import { MessageTypes } from '../message-types';

import * as $ from 'jquery';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
  // Add custom message to page
  public setMessage(type: MessageTypes, title: string, message: string) {
    let cssClass: string;
    // add right css class
    switch(type) {
      case MessageTypes.Error:
        cssClass = 'error';
        break;
      case MessageTypes.Info:
        cssClass = 'info';
        break;
      case MessageTypes.Warning:
        cssClass = 'warning';
        break;
      case MessageTypes.Success:
        cssClass = 'success';
        break;
    }
    // Mesage html template
    let htmlTemplate:string = 
    `<div id="error_message" class="ui ${cssClass} message transition">
      <i class="close icon"></i>
      <div class="header">
        ${title}
      </div>
      <p>${message}</p>
    </div>`;
    
    // Insert message into page
    $(htmlTemplate).insertAfter('header');
    // Add jquery to close message
    $(".close.icon").click(function(){
      $(this).parent().hide();
    });
  }
}
