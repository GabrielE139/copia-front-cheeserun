import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Arrendatario } from '../models/arrendatario.model';

@Injectable({
  providedIn: 'root'
})
export class ArrendatarioService {
  private apiUrl = 'http://localhost:8080/arrendatario';

  constructor(private http: HttpClient) {}

  crearArrendatario(arrendatarioData: Arrendatario): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearArrendatario`, arrendatarioData);
  }
}
