
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
sdfsdf

import { HouseService } from './services/house.service';
import { House } from './models/house';
import { GLOBAL } from './services/global';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Los Mejores Vinos';
  public header_color:string;

  	constructor(){
  	
  	}

 	  ngOnInit(){
		    console.log('house.component.ts cargado');
	  }

}
