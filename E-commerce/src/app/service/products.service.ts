import { cart, order, products } from './../../export-files/data.type';
import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  cartData= new EventEmitter<products []> 
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

  getCartList(userId:string){
    return this.http.get<products[]>('http://localhost:3001/cart?userId='+ userId, {observe:"response"}).subscribe(
      (result)=>{
        if(result && result.body){
          this.cartData.emit(result.body);
        }
      }
    )
  }

  addToCart(cartData:cart){
    return this.http.post('http://localhost:3001/cart', cartData)
  }



  localAddToCart(data:products){
    let cartData=[];
    let localCart= localStorage.getItem('localCart');
    if(!localCart){
      localStorage.setItem('localCart', JSON.stringify([data]))
       this.cartData.emit([data]);
    }else{
      cartData= JSON.parse(localCart);
      cartData.push(data);
     localStorage.setItem('localCart', JSON.stringify(cartData))
      this.cartData.emit(cartData);
    }

  }

 removeFromCart(productId: string){
  let cartData= localStorage.getItem('localCart')
  if(cartData){
    let items: products[]= JSON.parse(cartData);
    items= items.filter((item:products)=>productId!==item.id);
    localStorage.setItem('localCart', JSON.stringify(items));
    this.cartData.emit(items);
  }
 }

  removeCart(cartId:string){
    return this.http.delete('http://localhost:3001/cart/'+ cartId)
  }

   currentCart() {
    let userStore = localStorage.getItem('user');
    let userData = userStore && JSON.parse(userStore);
    return this.http.get<cart[]>('http://localhost:3001/cart?userId=' + userData.id);
  }

  orderNow(data: order) {
    return this.http.post('http://localhost:3001/orders', data);
  }
 
  orderList(){
    let userStore= localStorage.getItem('user')
    let userData= userStore && JSON.parse(userStore)
   return this.http.get<order[]>('http://localhost:3001/orders?userId='+ userData.id);
  }

}
