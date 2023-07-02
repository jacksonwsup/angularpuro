import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'classNipeValueDeckPipe',
})


export class ClassNipeValueDeckPipe implements PipeTransform {


    public transform(value: string, classes: "teste"): any {
        if(value) {
            return classes
        }
    }

}