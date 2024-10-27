import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BotonVerticalComponent } from '../boton-vertical/boton-vertical.component';

@Component({
  selector: 'app-contenido',
  standalone: true,
  imports: [RouterOutlet,BotonVerticalComponent],
  templateUrl: './contenido.component.html',
  styleUrl: './contenido.component.css'
})
export class ContenidoComponent{
  verVertical = false;

  mostrarVertical(){
    this.verVertical = !this.verVertical;
  }
  
}
