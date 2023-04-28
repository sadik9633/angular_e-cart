import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import behaviour subject
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  //object create for behaviour subject
  search=new BehaviorSubject("")

  constructor(private http:HttpClient) { }

  //api call to view all products
  viewAllProducts(){
   return this.http.get('http://localhost:3000/products')
  }

 // api call to view sngle product
 viewProduct(productId:any){
  return this.http.get('http://localhost:3000/products/'+productId)
 }

 //api to delete aproduct
 deleteProduct(productId:any){
  return this.http.delete('http://localhost:3000/products/'+productId)
 }

 //api call to add new products
 addNewProduct(productData:any){
return this.http.post('http://localhost:3000/products',productData)
 }

 //api call to update products
updateProduct(productId:any,productData:any){
  return this.http.put('http://localhost:3000/products/'+productId,productData)
 }
}
