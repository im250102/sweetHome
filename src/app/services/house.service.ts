//Interaccion con backend a traves de Ajax

import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';
import { House } from '../models/house';

//permite injectar esta dependencia a otra clase
@Injectable()
export class HouseService{

	public url: string;

	constructor(private _http: Http){
		this.url = GLOBAL.url;
	}

	//Servicio que obtiene la lista de casas disponibles para alquilar
    getHouses(){
	    let headers = new Headers({
			'Content-Type':'application/json',
		    'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
   		 	'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    		'Access-Control-Allow-Credentials': true 
		});

		let options =  new RequestOptions( { headers: headers});

		return this._http.get(this.url+'api/houses', options)
					  .map(res => res.json());
   }

   	//Servicio de prueba
    getHi(){    

	    let headers = new Headers({			
	
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
   		 	'Access-Control-Allow-Headers': 'X-Requested-With,content-type',
    		'Access-Control-Allow-Credentials': true 
		});
		

		return this._http.get(this.url+'api/hi', {headers: headers});

    }
    

}

