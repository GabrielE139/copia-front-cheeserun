// app.routes.ts
import { Routes } from '@angular/router';
import { AccesoComponent } from './acceso/acceso.component';
import { InicioComponentArrendador } from './arrendador/inicio/inicio.component';
import { InicioComponentArrendatario } from './arrendatario/inicio/inicio.component';
import { PrincipalLandingComponent } from './landing/principal-landing/principal-landing.component';
import { RegistroComponent } from './registro/registro.component';
import { PerfilArrendadorComponent } from './arrendador/perfil-arrendador/perfil-arrendador.component';
import { HistorialArrendadorComponent } from './arrendador/historial-arrendador/historial-arrendador.component';
import { ArrendamientosActualesComponent } from './arrendador/arrendamientos-actuales/arrendamientos-actuales.component';
import { PerfilComponent } from './arrendatario/perfil/perfil.component';
import { ListaDeseosComponent } from './arrendatario/lista-deseos/lista-deseos.component';
import { ArrendamientosProgramadosComponent } from './arrendatario/arrendamientos-programados/arrendamientos-programados.component';
import { HistorialArrendatarioComponent } from './arrendatario/historial-arrendatario/historial-arrendatario.component';
import { Component } from '@angular/core';


export const routes: Routes = [
    //General
    { path: '', component: PrincipalLandingComponent },
    { path: 'login', component: AccesoComponent },
    { path: 'register', component: RegistroComponent },
    { path: 'arrendatario', component: InicioComponentArrendatario },
    { path: 'arrendador', component: InicioComponentArrendador },
    //Arrendatario 
    { path: 'perfil-arrendatario' , component: PerfilComponent},
    { path: 'lista-deseos', component: ListaDeseosComponent},
    { path: 'arrendamientos-programados', component: ArrendamientosProgramadosComponent},
    { path: 'historial-arrendatario', component: HistorialArrendatarioComponent},
    //arrendador
    { path: 'perfil-arrendador' , component: PerfilArrendadorComponent},
    { path: 'historial-arrendador', component: HistorialArrendadorComponent},
    { path: 'arrendamientos-actuales', component: ArrendamientosActualesComponent},
    { path: '**', redirectTo: '' },// Redirige a la página principal si la ruta no se encuentra
];