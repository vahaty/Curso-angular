import {Component} from '@angular/core';
import {coches} from './coches';
@Component({
    selector: 'coches',
    templateUrl: './coches.component.html'
})

export class CochesComponent{
    public coche: coches;

    constructor (){
        this.coche = new coches('','');

    }

    onSubmit(){
        console.log(this.coche);
    }
}