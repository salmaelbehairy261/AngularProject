import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { cartItem } from '../models/cart';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: cartItem[] = []
  isFound:boolean=false
  counter=new Subject<number>()
  addToCart(product: cartItem) {
    this.isFound=false
    this.items.forEach(element => {
      if(element._id==product._id && element.color==product.color){
        element.quantity++
        this.isFound=true
      }
    });
    if(!this.isFound){
      this.items.push(product);
      this.counter.next(this.items.length)
    }
    return this.isFound
  }
  countItems(){
    return this.items.length
  }
  getItems() {
    return this.items;
  }
  removeItem(product:cartItem){
    this.items=this.items.filter((item,i)=>product!=item)
    this.counter.next(this.items.length)
    return this.items
  }
  clearCart() {
    this.items = [];
    this.counter.next(this.items.length)
    return this.items;
  }
  constructor() { }
}
