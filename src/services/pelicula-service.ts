import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pelicula } from '../interfaces/pelicula'
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  constructor(private httpClient: HttpClient) {
  }
  getPelicula(id: number): Observable<Pelicula> {
    return this.httpClient.get<Pelicula>(`${environment.api}/movie/${id}`);
  }
  getPeliculas(): Observable<Pelicula[]> {
    return this.httpClient.get<Pelicula[]>(`${environment.api}/movies`);
  }
  updatePelicula(id: number, pelicula:Pelicula): Observable<Pelicula>{
    return this.httpClient.put<Pelicula>(`${environment.api}/movie/${id}`,pelicula);
  }
  deletePelicula(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${environment.api}/movie/${id}`);
  }
  addPelicula(pelicula:Pelicula): Observable<any>{
    return this.httpClient.post<any>(`${environment.api}/movie`,pelicula);
  }
}
