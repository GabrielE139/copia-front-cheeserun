import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArrendadorService {
  private apiUrl = 'http://localhost:8080/arrendador';

  constructor(private http: HttpClient) {}

  crearArrendador(arrendadorData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/crearArrendador`, arrendadorData);
  }
}
