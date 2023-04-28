import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{

  constructor(private fb:FormBuilder,private ps:ProductService,private router:Router){}

  ngOnInit(): void {
    
  }
  //model form
addProductForm=this.fb.group({
id:[""],
productName:[""],
categoryId:[""],
description:[""],
price:[""],
isAvailiable:[""],
productImage:[""],
rating:[""],
review:[""],
vendroName:[""],
warrenty:[""]
})

addProduct(){
  let pdata={
    id:this.addProductForm.value.id,
    productName:this.addProductForm.value.productName,
    categoryId:this.addProductForm.value.categoryId,
    description:this.addProductForm.value.description,
    price:this.addProductForm.value.price,
    isAvailiable:this.addProductForm.value.isAvailiable,
    productImage:this.addProductForm.value.productImage,
    rating:this.addProductForm.value.rating,
    review:this.addProductForm.value.review,
    vendroName:this.addProductForm.value.vendroName,
    warrenty:this.addProductForm.value.warrenty
  }
  this.ps.addNewProduct(pdata).subscribe((item:any)=>{
    alert('new product addedd')
    this.router.navigateByUrl("product")
  })
}
}
