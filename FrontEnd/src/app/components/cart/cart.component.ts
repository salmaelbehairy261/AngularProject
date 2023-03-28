import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  items:any;
  total:any;
  quantityElement:any;
constructor(private cartService:CartService){}
  ngOnInit(): void {
    this.items=this.cartService.getItems();
    this.calTotal();
  }

  calTotal() {
    this.total=0
    this.items.forEach((element:any) => {
      this.total+=element.price*element.quantity
    });
  }

  increaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepUp()
    this.items[i].quantity=this.quantityElement.value
    this.calTotal()
  }

  decreaseQuantity(e:any,i:any){
    this.quantityElement=e.target.parentNode.parentNode.querySelector('input[type=number]')
    this.quantityElement.stepDown()
    this.items[i].quantity=this.quantityElement.value
    this.calTotal()
  }
  removeItem(product:any){
    this.items=this.cartService.removeItem(product)
    this.calTotal()
  }
  checkOut(){
    this.cartService.clearCart();
    this.items=this.cartService.getItems();
    alert("Your Order is Confirmed Successfully !");
  }
}
