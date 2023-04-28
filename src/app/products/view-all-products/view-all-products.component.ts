import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-view-all-products',
  templateUrl: './view-all-products.component.html',
  styleUrls: ['./view-all-products.component.css']
})
export class ViewAllProductsComponent implements OnInit {
  productList: any
  filterProducts: any
  searchInput:any=""

  constructor(private ps: ProductService) { }

  ngOnInit(): void {

    this.ps.viewAllProducts().subscribe(data => {
      //console.log(data);
      this.productList = data
    })

this.ps.search.subscribe((value:any)=>{
  this.searchInput=value
})

  }
  filter(category: any) {
    this.filterProducts = this.productList.filter((item: any) => item.categoryId == category || category == "")
  }
}
