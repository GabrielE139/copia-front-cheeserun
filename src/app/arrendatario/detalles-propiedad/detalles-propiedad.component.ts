import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Propiedad } from '../../../Conexion back/models/propiedad.model';
import { PropiedadService } from '../../../Conexion back/services/propiedad.service';
import { AlquilerComponent } from '../alquiler/alquiler.component';

@Component({
  selector: 'app-detalles-propiedad-arrendatario',
  standalone: true,
  imports: [CommonModule, AlquilerComponent],
  templateUrl: './detalles-propiedad.component.html',
  styleUrl: './detalles-propiedad.component.css'
})

export class DetallesPropiedadComponentArrendatario implements OnInit {
  calificacionPromedio: number = 5;
  propiedad: any = {
    nombre: 'Casa de Playa',
    ubicacion: 'Cancún, México',
    precioXnoche: 150,
    area: 120,
    capacidad: 6,
    camas: 3,
    cuartos: true,
    parqueadero: true,
    piscina: true,
    disponible: true,
    arrendadorNombre: 'Juan Pérez',
    descripcion: 'Una hermosa casa de playa ideal para unas vacaciones relajantes con amigos o familia.',
    imagenes: [
      'https://via.placeholder.com/400x300?text=Casa+1',
      'https://via.placeholder.com/400x300?text=Casa+2',
      'https://via.placeholder.com/400x300?text=Casa+3',
      'https://via.placeholder.com/400x300?text=Casa+4',
      'https://via.placeholder.com/400x300?text=Casa+5',
      'https://via.placeholder.com/400x300?text=Casa+6',
      'https://via.placeholder.com/400x300?text=Casa+7',
    ],
    calificaciones: [
      { usuario: 'Ana', comentario: 'Excelente lugar para descansar.', estrellas: 5 },
      { usuario: 'Pedro', comentario: 'Muy limpio y cómodo.', estrellas: 4 },
    ]
  };
  
  propiedadPedida?: Propiedad;

  imagenActual: number = 0;

  //MOSTRAR ALQUILER Y PAGO
  mostrarFormularioAlquiler: boolean = false;

  abrirFormularioAlquiler() {
    this.mostrarFormularioAlquiler = true;
    console.log("Se trató de abrir el formulario de alquiler")
  }

  cerrarFormularioAlquiler() {
    this.mostrarFormularioAlquiler = false;
  }


  constructor(
    private propiedadService: PropiedadService,
  ) {}

  ngOnInit() {
    this.propiedadService.idPropiedad$.subscribe((id) => {
      if (id) {
        this.propiedadService.getPropiedadEspecifica(id).subscribe((data) => {
          this.propiedadPedida = data;
        });
      }
    });
  }

  anteriorImagen() {
    this.imagenActual = (this.imagenActual > 0) ? this.imagenActual - 1 : this.propiedad.imagenes.length - 1;
  }

  siguienteImagen() {
    this.imagenActual = (this.imagenActual < this.propiedad.imagenes.length - 1) ? this.imagenActual + 1 : 0;
  }

  volver() {
    this.propiedadService.ocultarDetalles()
  }
}