import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente = 'Componente Fruta';
    public listado_frutas = 'pera, naranja, sandia';
}