import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

//Service
import { HouseService } from '../services/house.service';

//Model
import { House } from '../models/house';

//Global
import { GLOBAL } from '../services/global';

@Component({
	selector: 'home',
	templateUrl: '../views/home.html',
	providers: [ HouseService ]
})

export class HomeComponent implements OnInit{
	
	public title: string;

	public houses: House[];

    constructor(
    	private _route: ActivatedRoute,
    	private _router: Router,
    	private _houseService: HouseService
	){
		this.title = 'Properties';

	}


	ngOnInit(){
		console.log('home.component.ts cargado');
		this.getHouses();
	}


    getHouses(){
        
        this._houseService.getHouses().subscribe(

            response => {

                 console.log(response);
                 this.houses = response;

            },

            error => {

                var errorMessage = <any> error;

                if(errorMessage !=null){
                    var body = JSON.parse(error._body);

                    console.log(error);
                }

            }

        );        

    }




}
