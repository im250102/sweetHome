import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
	selector: 'contact',
	templateUrl: '../views/contact.html'
})

export class ContactComponent implements OnInit{
	
	public title: string;

    constructor(
    	private _route: ActivatedRoute,
    	private _router: Router

	){
		this.title = 'About us';

	}


	ngOnInit(){
		console.log('contact.component.ts cargado');
	}





}
