import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Product } from './product';

@Injectable({
  providedIn: 'root'
})
export class DataShareService {

  public cartData = new Subject<Product[]>();
  constructor() { }
  
}
