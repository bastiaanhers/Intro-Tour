import { Component, OnInit } from '@angular/core';
import { UserNameService } from '../../services/user-name.service';
import * as $ from 'jquery';

@Component({
	selector: 'app-settings',
	templateUrl: './settings.component.html',
	styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {

	constructor(public userNameService: UserNameService) { }

	public userName: string;

	public toggleModal(elementId) {
		let ele = $('#' + elementId);

		if (ele.css('display') === 'none') {
			ele.css({ 'display': 'block' });
		}
		else {
			ele.css({ 'display': 'none' });
		}
	}

	ngOnInit() {
		this.userNameService.currentName.subscribe(userName => this.userName = userName);
	}

}
