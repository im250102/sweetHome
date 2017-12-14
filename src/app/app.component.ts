
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{

    public message;
  	
    constructor(
        private _route: ActivatedRoute,
        private _router: Router
      )
    {}

 	  ngOnInit(){
		    console.log('app.component.ts cargado');     
	  }


  

}
