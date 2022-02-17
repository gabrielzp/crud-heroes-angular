import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['iroman', 'Hulk', 'spiderman', 'daredevil', 'capitan america', 'thor', 'ghost rider', 'punisher'];
  heroeBorrado: string = '';

  borrarHeroe() {

    this.heroeBorrado = this.heroes.shift() || '';




  }

}
