import { query } from '@angular/animations';
import { products } from './../../export-files/data.type';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http:HttpClient) { }

  addProduct(data:products){
   return this.http.post('http://localhost:3001/products', data);
  }

  productList(){
    return this.http.get<products[]>('http://localhost:3001/products')
  }

  deleteItem(id:string){
  return  this.http.delete(`http://localhost:3001/products/${id}`)
  }

  getProduct(id:string){
    return  this.http.get<products>(`http://localhost:3001/products/${id}`)
  }

  updatedProduct(products:products){
    return  this.http.put<products>(`http://localhost:3001/products/${products.id}`, products)
  }

  popularProduct(){
    return this.http.get<products[]>('http://localhost:3001/products?_limit=3')
  }

  trendyProduct(){
     return this.http.get<products[]>('http://localhost:3001/products?_limit=8')
  }

  searchProduct(query:string){
    return this.http.get<products[]>(`http://localhost:3001/products?q=${query}`)
  }
}
