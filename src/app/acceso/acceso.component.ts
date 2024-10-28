import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioService } from '../../Conexion back/services/usuario.service';

@Component({
  selector: 'app-acceso',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent {

  constructor(
    private router: Router,
    private usuarioService: UsuarioService // Inyección de usuario.service
  ) {}

  onSubmit(event: Event, form: NgForm) {
    event.preventDefault(); // Evita la recarga de la página al enviar el formulario

    // Validar formulario y campo role
    if (form.valid && form.value.role && form.value.usuario) {
      const role = form.value.role;
      const id = Number(form.value.usuario); // Convertir a número

      // Verificar si la conversión fue exitosa
      if (isNaN(id)) {
        console.error("El ID debe ser un número");
        return;
      }

      // Llamar a accederUsuarioDemo para manejar el tipo de usuario y redirigir
      const isArrendador = role === 'arrendador';
      this.usuarioService.accesoUsuarioDemo(id, isArrendador);

      // Navegación basada en el tipo de usuario
      const routePath = isArrendador ? '/arrendador' : '/arrendatario';
      this.router.navigate([routePath]);
    } else {
      console.error("Formulario inválido o sin rol seleccionado");
    }
  }
}
