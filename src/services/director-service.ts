import {Director} from '../interfaces/director'
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class DirectorService {
  constructor(private httpClient: HttpClient) {
  }
  getDirector(id: string): Observable<Director[]> {
    return this.httpClient.get<Director[]>(`${environment.api}/director/${id}`);
  }
  getDirectores(): Observable<Director[]> {
    return this.httpClient.get<Director[]>(`${environment.api}/directores`);
  }
  updateDirector(id: number, director:Director): Observable<Director>{
    return this.httpClient.put<Director>(`${environment.api}/director/${id}`,director);
  }
  deleteDirector(id: number): Observable<any>{
    return this.httpClient.delete<any>(`${environment.api}/director/${id}`);
  }
  addDirector(director:Director): Observable<any>{
    return this.httpClient.post<any>(`${environment.api}/director`,director);
  }
}
