import { Component } from '@angular/core';

//import { Ropaservice } from '../service/ropa.service';

@Component({
    selector: 'plantillas',
    templateUrl: './plantillas.component.html'
})

export class PlantillasComponent {

    public titulo: string;
    public administrador: boolean;

    constructor() {
        this.titulo = 'Plantillas ngTemplate';
        this.administrador = true;
    }

    cambiar(){
        this.administrador = !this.administrador;
    }


}