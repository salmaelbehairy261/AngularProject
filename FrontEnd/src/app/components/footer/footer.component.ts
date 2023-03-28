import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  counter:number=0
  constructor(private cartService:CartService){
  }
  ngOnInit(): void {
    this.cartService.counter.subscribe(res=>{
      this.counter=res;
    })
  }

}
