import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-vertical-arrendador',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponentArrendador {
  nombreUsuario?:string;
}
