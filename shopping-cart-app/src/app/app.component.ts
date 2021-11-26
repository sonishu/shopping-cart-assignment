import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CartComponent } from './cart/cart.component';
import { DataShareService } from './data-share-service.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  public subscription: Subscription = new Subscription();
  public cartItems: Product[] = [];
  title = 'shopping-cart-app';
  constructor(private dataShareService: DataShareService, private router: Router, private modalService: NgbModal) { 
    
  }
  ngOnInit(): void {
    this.subscription = this.dataShareService.cartData.subscribe(data => {
      this.cartItems = data;
    })
  }
  onCartNavigate() {
    const navigationExtras: NavigationExtras = {
      queryParams: {
        criteriaList: [{"item": 1, "name":'pla'},{"item": 2, "name": "bla"}]
      }
    };
    this.router.navigate(['/cart'], navigationExtras);
  }
  open() {
    const modalRef = this.modalService.open(CartComponent);
    modalRef.componentInstance.cartItems = this.cartItems;
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
  