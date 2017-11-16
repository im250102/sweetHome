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

    getArtists(token, page){
	    let headers = new Headers({
			'Content-Type':'application/json'
		});

		let options =  new RequestOptions( { headers: headers});

		return this._http.get(this.url+'/api/hi', options)
					  .map(res => res.json());
    }

  

}

