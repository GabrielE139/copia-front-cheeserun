import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-alquiler',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './alquiler.component.html',
  styleUrl: './alquiler.component.css'
})
export class AlquilerComponent {
  @Output() cerrar = new EventEmitter<void>();

  fechaLlegada: string = '';
  fechaSalida: string = '';
  cantidadPersonas: number | null = null;
  metodoPago: string = '';

  onPagar() {
    if (this.fechaLlegada && this.fechaSalida && this.cantidadPersonas && this.metodoPago) {
      alert('El alquiler fue programado exitosamente');
      this.cerrarFormulario();
    }
  }

  cerrarFormulario() {
    this.cerrar.emit();
  }
}
