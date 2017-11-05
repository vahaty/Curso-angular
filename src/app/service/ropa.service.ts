import { Injectable } from '@angular/core';

@Injectable()

export class Ropaservice {
    public nombrePrenda: string = 'falda';
    
    prueba() {
        return this.nombrePrenda;
    }
}