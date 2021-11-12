import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  
  public categories: any;
  public bannerSlides: any;
   public slideConfig = {"slidesToShow": 1, "slidesToScroll": 1, "dots": true,};
  
  ngOnInit(): void {
    this.fetchCategories();
    this.fetchOffersImg();
  }

  private fetchCategories(){
    this.http.get("../../assets/server/categories/index.get.json")  
    .subscribe(response => {
      this.categories = response;
      this.categories.sort((a:any, b:any) => (a.order > b.order) ? 1 : -1); 
      this.categories = this.categories.filter((data: any )=> {
        return (data.order > 0)});
    });   
  }
  private fetchOffersImg(){
    this.http.get("../../assets/server/banners/index.get.json")
    .subscribe(response => this.bannerSlides = response); 
  }

  
}
