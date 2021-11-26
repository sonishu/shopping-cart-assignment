import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, map } from 'rxjs';
import { DataShareService } from '../data-share-service.service';
import { Product } from '../product';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() cartItems: Product[] = [];
  public itemCount: string = "";
  public subscription: Subscription = new Subscription;
  constructor(private dataShareService: DataShareService, private activeRoute: ActivatedRoute, public activeModal: NgbActiveModal) {
    // this.subscription = this.dataShareService.cartData.subscribe(data => {
    //   console.log(data);
    // })
  }

  ngOnInit(): void {
    if(this.cartItems.length > 0){
      this.itemCount = '(' + this.cartItems.length + ' items)';
    }
  }
  // public ngOnDestroy(): void {
  //   this.subscription.unsubscribe(); // onDestroy cancels the subscribe request
  // }
}
