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
    return this.httpClient.get<Director[]>(`${environment.api}/`);
  }
  getDirectores(): Observable<Director[]> {
    return this.httpClient.get<Director[]>(`${environment.api}/`);
  }
}
