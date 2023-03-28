import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  Url: string = "http://localhost:8080"
  constructor(private httpClient: HttpClient) {}
  getAllProducts() {
      return this.httpClient.get(`${this.Url}/Products`)
    }
  getProductsByCategory(id:Number){
    return this.httpClient.get(`${this.Url}/Products/${id}`)
  }
  getProductById(id:any){
    return this.httpClient.get(`${this.Url}/Product/${id}`)
  }
}
