import { Component } from '@angular/core';

@Component({
  selector: 'app-canchas',
  templateUrl: './canchas.component.html',
  styleUrls: ['./canchas.component.css']
})
export class CanchasComponent {

  cancha = './assets/images/Soccer_field_icon.png';

  comentarios = {mbappe: "buenas canchas", cristiano: "agusto con el servicio", messi: "ojala hubiera mejor ilumniacion en las pequeñas"};

  addCourt(): void {
    console.log('Agregar cancha');
  }

  scrollToElement(elementId: string): void {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

}
