import { Component } from '@angular/core';
import { coches } from './coches';
//import { Ropaservice } from '../service/ropa.service';

@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent {
    public coche: coches;
    public articulos: any;

    constructor(
       // private _peticionService: Ropaservice
    ) {
        this.coche = new coches('', '');

    }

  /*  ngOnInit() {
        this._peticionService.getArticulos().subscribe(
            result => {
                console.log('resultado' + result);
                this.articulos = result;
                if (!this.articulos) {
                    console.log('Error en el servidor');
                }
            },
            error => {
                console.log(error);
            }
        );
    }*/

    onSubmit() {
        console.log(this.coche);
    }
}