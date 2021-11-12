import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  public fetchProducts(){
    this.http.get("../../assets/server/products/index.get.json")
    .subscribe(response => {
        return response;
    });
  }
}