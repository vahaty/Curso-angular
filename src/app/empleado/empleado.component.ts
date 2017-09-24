import {Component} from '@angular/core';
import {Empleado} from './empleado';

@Component ({
    selector: 'empleado',
    templateUrl: './empleado.component.html'
})

export class empleadoComponent{
    public titulo =  'Titulo del componente empleado';

    public empleado: Empleado;
    public trabajadores: Array<Empleado>;

    ngOnInit(){
        this.empleado = new Empleado('Sonia', 28);
        console.log(this.empleado);
        this.trabajadores = [
            new Empleado('Ana', 26),
            new Empleado('Edu', 29),
            new Empleado('Sofia', 27)
        ];
    }
}