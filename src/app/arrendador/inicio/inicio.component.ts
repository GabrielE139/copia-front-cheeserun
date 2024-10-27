import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VerticalComponentArrendador } from "../vertical/vertical.component";

@Component({
  selector: 'app-inicio-arrendador',
  standalone: true,
  imports: [CommonModule, VerticalComponentArrendador],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponentArrendador {
  verCuenta:boolean = true;

  mostrarCuenta(){
    this.verCuenta = !this.verCuenta;
  }
}
