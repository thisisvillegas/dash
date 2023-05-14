import { AsyncPipe, NgClass, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';


@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
    standalone: true,
	
	imports: [
		RouterOutlet,
		RouterLink,
		RouterLinkActive,

		NgIf,
		NgClass,
		AsyncPipe,
	],

})
export class DashboardComponent implements OnInit {


	ngOnInit(): void {
		
	}

}