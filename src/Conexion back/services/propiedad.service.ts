import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Propiedad } from '../../Conexion back/models/propiedad.model'; // Suponiendo que tienes un modelo definido para Propiedad

@Injectable({
  providedIn: 'root'
})
export class PropiedadService {
  private apiUrl = 'http://localhost:8080/propiedad';  // Cambia la URL al puerto y host correcto de tu backend
  private propiedades: Propiedad[] = []; // Almacena todas las propiedades obtenidas del backend
  private propiedadesFiltradasSubject = new BehaviorSubject<Propiedad[]>([]); // Usamos BehaviorSubject para emitir cambios

  private verDetalle = new BehaviorSubject<boolean>(false);
  private idPropiedad = new BehaviorSubject<number | null>(null);

  // Observables para que los componentes se suscriban
  verDetalle$ = this.verDetalle.asObservable();
  idPropiedad$ = this.idPropiedad.asObservable();

  propiedadesFiltradas$ = this.propiedadesFiltradasSubject.asObservable(); // Observable para suscribirse desde el componente

  constructor(private http: HttpClient) {
    // Al inicializar el servicio, cargamos todas las propiedades
    this.getPropiedades().subscribe((data: Propiedad[]) => {
      this.propiedades = data; // Guardamos las propiedades en la variable local
      this.propiedadesFiltradasSubject.next(this.propiedades); // Emitimos inicialmente todas las propiedades
    });
  }
  

  // Métodos para cambiar el estado
  mostrarDetalles(id: number) {
    this.idPropiedad.next(id);
    this.verDetalle.next(true);
  }

  ocultarDetalles() {
    this.verDetalle.next(false);
  }

  // Obtener información propiedad específica
  getPropiedadEspecifica(id: number): Observable<Propiedad> {
    const url = `${this.apiUrl}/propiedad/${id}`;
    return this.http.get<Propiedad>(url);
  }

  // Obtener todas las propiedades del backend
  getPropiedades(): Observable<Propiedad[]> {
    return this.http.get<Propiedad[]>(`${this.apiUrl}/propiedades`);
  }

  // Aplicar filtros locales
  aplicarFiltros(filtros: { capacidad?: number, disponibles?: boolean, parqueadero?: boolean, piscina?: boolean }) {
    const propiedadesFiltradas = this.propiedades.filter(propiedad => {
      // Filtrar por capacidad
      const coincideCapacidad = filtros.capacidad ? propiedad.capacidad >= filtros.capacidad : true;

      // Filtrar por disponibilidad
      const coincideDisponibles = filtros.disponibles ? propiedad.disponible === filtros.disponibles : true;

      // Filtrar por parqueadero
      const coincideParqueadero = filtros.parqueadero ? propiedad.parqueadero === filtros.parqueadero : true;

      // Filtrar por piscina
      const coincidePiscina = filtros.piscina ? propiedad.piscina === filtros.piscina : true;

      // Retornar la propiedad si cumple con todos los filtros
      return coincideCapacidad && coincideDisponibles && coincideParqueadero && coincidePiscina;
    });

    // Emitir las propiedades filtradas
    this.propiedadesFiltradasSubject.next(propiedadesFiltradas);
  }
}
