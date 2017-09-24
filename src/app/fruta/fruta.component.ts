import { Component } from '@angular/core';

@Component({
    selector: 'fruta',
    templateUrl: './fruta.component.html'
})

export class FrutaComponent {
    public nombre_componente:String = 'Componente Fruta';
    public listado_frutas = 'pera, naranja, sandia';
    private hola = 'Soy privada';
    
    constructor(){
        console.log("Esto es un constructor " + this.hola);
        this.holaMundo();
    }

    ngOnInit(){
        alert("funcionalidades");

        // variales y alcance
        var uno = 8;
        var dos = 15;

        if (uno === 8){
            let uno = 3; //cambia a nivel local
            var dos = 88; //cambia a nivel global
            console.log("dentro del if" + uno + ' '+ dos);
        }

        console.log("dentro del if" + uno + ' '+ dos);
    }

    holaMundo(){
        alert('Hola Mundo !!!');
    }

}