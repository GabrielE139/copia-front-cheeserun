import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vertical-arrendatario',
  standalone: true,
  imports: [RouterLink, CommonModule],
  templateUrl: './vertical.component.html',
  styleUrl: './vertical.component.css'
})
export class VerticalComponentArrendatario {
  nombreUsuario?:string;

}
