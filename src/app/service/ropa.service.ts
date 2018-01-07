import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class Ropaservice {
    public nombrePrenda: string = 'falda';
    public url: string;
    /*  constructor(private _http: Http) {
          this.url = 'https://jsonplaceholder.typicode.com/posts';
      }*/
    prueba() {
        return this.nombrePrenda;
    }
    // getArticulos() {
    //     return this._http.get(this.url).map(res => res.json());
    // }
}