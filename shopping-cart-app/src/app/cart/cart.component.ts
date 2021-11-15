import { Component, OnInit } from '@angular/core';
import { DataShareService } from '../data-share-service.service';
import { Product } from '../product';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  public cartItems: Product[] = [];
  constructor(private dataShareService: DataShareService) {
    this.dataShareService.shareDataSubject.subscribe(receivedData=>{
      this.cartItems = receivedData;
      console.log(this.cartItems)
    });
  }

  ngOnInit(): void {
  }
}
