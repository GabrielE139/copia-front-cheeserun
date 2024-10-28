import { Injectable } from '@angular/core';
import { ArrendadorService } from './arrendador.service';
import { ArrendatarioService } from './arrendatario.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    private arrendadorService: ArrendadorService,
    private arrendatarioService: ArrendatarioService
  ) {}

  // Simulación de inicio de sesión sin autenticación
  accesoUsuarioDemo(id: number, esArrendador: boolean) {
    if (esArrendador) {
      this.arrendadorService.obtenerArrendador(id).subscribe(arrendador => {
        const usuarioData = {
          id: arrendador.id,
          nombre: arrendador.nombre,
          tipoUsuario: 'arrendador'
        };
        sessionStorage.setItem('usuario', JSON.stringify(usuarioData));
      });
    } else {
      this.arrendatarioService.obtenerArrendatario(id).subscribe(arrendatario => {
        const usuarioData = {
          id: arrendatario.id,
          nombre: arrendatario.nombre,
          tipoUsuario: 'arrendatario'
        };
        sessionStorage.setItem('usuario', JSON.stringify(usuarioData));
      });
    }
  }

  // Método de logout para limpiar el sessionStorage
  logout() {
    sessionStorage.removeItem('usuario');
  }

  // Recupera los datos de usuario desde sessionStorage
  getUsuarioData() {
    const usuario = sessionStorage.getItem('usuario');
    return usuario ? JSON.parse(usuario) : null;
  }

  /* Ejemplo de método accesoUsuario con autenticación basada en tokens (comentado)
  accesoUsuario(credentials: { username: string, password: string }) {
    return this.http.post<{ token: string }>('/api/authenticate', credentials)
      .pipe(
        tap(response => {
          sessionStorage.setItem('token', response.token);
          // Aquí se puede agregar lógica para almacenar más datos según el token recibido
        })
      );
  }
  */
}
