import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  
  @Input() category: any;
  @Output() buttonClick = new EventEmitter();

  constructor() { }
  
  ngOnInit(): void {
  }
  public exploreProducts(category: string){
    this.buttonClick.emit(category);
  } 

}
