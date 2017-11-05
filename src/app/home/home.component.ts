import { Component } from '@angular/core';
import { Ropaservice } from '../service/ropa.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [Ropaservice]
})

export class HomeComponent {
    public titulo = 'home';
    public fecha;

    constructor(
        private _ropaService: Ropaservice,

    ) {
        this.fecha = new Date('2017-04-02');
     }

    ngOnInit(){
        console.log(this._ropaService);
    }

};

