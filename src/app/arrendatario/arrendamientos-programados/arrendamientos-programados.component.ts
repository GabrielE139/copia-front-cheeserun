import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-arrendamientos-programados',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './arrendamientos-programados.component.html',
  styleUrl: './arrendamientos-programados.component.css'
})
export class ArrendamientosProgramadosComponent {

}
