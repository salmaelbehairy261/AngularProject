import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  Url: string = "http://localhost:8080"
  constructor(private httpClient: HttpClient) {}
  getAllCategories() {
      return this.httpClient.get(`${this.Url}/Categories`)
    }
  }
