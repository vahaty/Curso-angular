import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor' })

export class ConversorPipe implements PipeTransform {
    transform(value, por) {
        let value_one = parseInt(value);
        let value_two = parseInt(por);
        return 'la multiplicacion' + value_one + ' x ' + value_two + '= ' + (value * por);
    }
}