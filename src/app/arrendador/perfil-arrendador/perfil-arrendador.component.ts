import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-perfil-arrendador',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './perfil-arrendador.component.html',
  styleUrl: './perfil-arrendador.component.css'
})
export class PerfilArrendadorComponent {

  @ViewChild('confirmationModal') confirmationModal!: ElementRef;

  openModal(): void {
    console.log('Modal abierto');
    this.confirmationModal.nativeElement.classList.remove('hidden');
  }

  closeModal(): void {
    this.confirmationModal.nativeElement.classList.add('hidden');
  }

  deleteAccount(): void {
    // Lógica para eliminar la cuenta
    alert('Cuenta eliminada');
    this.closeModal();
  }
}
