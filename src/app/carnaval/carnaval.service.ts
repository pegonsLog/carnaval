import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Bloco } from './models/bloco';

@Injectable({
  providedIn: 'root'
})
export class CarnavalService {

  private api = "localhost:3001/blocos"

  constructor(private http: HttpClient) {
   }

   list(){
    return this.http.get<any>(this.api);
   }
}
