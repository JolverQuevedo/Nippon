import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ArticulosService {

  constructor(private http: HttpClient) { }
  listar(page: number) {
    return this.http.get('http://localhost:8000/articulos?page='+page);
  }
}
