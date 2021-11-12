import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient) { }

  public products: any;
  public categories: any;
  public loaded: any;
  ngOnInit(): void {
    this.fetchProducts()
    this.fetchCategories()
  }


  private  fetchProducts(){
    
    this.http.get("../../assets/server/products/index.get.json")
    .subscribe(resp => {this.products = resp});
  }
  private fetchCategories(){
    
    this.http.get("../../assets/server/categories/index.get.json")
    .subscribe(response => this.categories = response);
  }

}
