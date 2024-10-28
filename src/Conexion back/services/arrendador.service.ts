import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/api/arrendador';

  constructor(private http: HttpClient) {}
  
  obtenerArrendador(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/arrendador/${id}`);
  }
  
  crearArrendador(arrendadorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearArrendador`, arrendadorData);
  }
}

