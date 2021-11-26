import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Product } from '../product';
import { DataShareService } from '../data-share-service.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private http: HttpClient, private activeRoute: ActivatedRoute, private router: Router, private dataShareService: DataShareService) { }

  public products: any;
  public categories: any;
  public filteredData: any;
  public items: Product[] = [];

  ngOnInit(): void {
    this.fetchProducts();
    this.fetchCategories();
  }


  private  fetchProducts(){
    
    this.http.get("../../assets/server/products/index.get.json")
    .subscribe(resp => {
      this.products = resp;
      //this.filteredData = this.products.filter((data:any) => data.category == "5b675e5e5936635728f9fc30");
      this.activeRoute.params.subscribe((params:Params) =>{
        this.filterData(params['category']);
      })
    });
  }
  private fetchCategories(){
    
    this.http.get("../../assets/server/categories/index.get.json")
    .subscribe(response => this.categories = response);
  }

  public filterData(category:string){
    switch(category) {
      case "Beverages": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b675e5e5936635728f9fc30");
        break;
      }
      case "Bakery Cakes and Dairy": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b6899123d1a866534f516de");
        break;
      }
      case "Beauty and Hygiene": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b68994e3d1a866534f516df");
        break;
      }
      case "Baby Care": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b6899683d1a866534f516e0");
        break;
      }
      case "Seafood": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b68997d3d1a866534f516e1");
        break;
      }
      case "Fruits & Vegetables": {
        this.filteredData = this.products.filter((data:any) => data.category == "5b6899953d1a866534f516e2");
        break;
      }
      default: {
        this.filteredData = "category does not exist";
        break;
      }
    }
    this.router.navigate(['/products', category]);
    return this.filteredData;
  }

  public addItem(product: any){
    for(let i = 0; i<this.items.length; i++){
      if(this.items[i].id === product.id){
        this.items[i].Quantity += 1;
        this.dataShareService.cartData.next(this.items);
        return;
      }
    }
    let result = {...product, "Quantity": 1}
    this.items.push(result);
    this.dataShareService.cartData.next(this.items);
  }

  
  
}
