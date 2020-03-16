import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {

  private srchString: string;

  constructor() { }

  ngOnInit() {
  }

  search(searhString){
    

  }

}
