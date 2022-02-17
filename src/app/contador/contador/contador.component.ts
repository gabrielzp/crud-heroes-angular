import { Component } from "@angular/core";



@Component({
    selector: 'app-contador',
    template: `  <h1>App contador</h1>

<button (click)="acumular(2)">+1</button>

<span>{{ numero }}</span>
<button (click)="acumular(-2)">-1</button> `

})


export class ContadorComponent{
    title = 'primer_proyecto';
    numero: number = 10;

    acumular(valor: number) {
        this.numero = this.numero + valor;

    }

}