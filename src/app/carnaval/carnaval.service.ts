import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { Observable } from 'rxjs';
import { Blocos } from './models/bloco';

@Injectable({
  providedIn: 'root',
})
export class CarnavalService {

  private readonly api = "http://localhost:3001/blocos"
  constructor(private http: HttpClient) {}

  list(): Observable<Blocos> {
    return this.http.get<Blocos>(this.api);
  }
}
