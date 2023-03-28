import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-best-seller',
  templateUrl: './best-seller.component.html',
  styleUrls: ['./best-seller.component.css']
})
export class BestSellerComponent implements OnInit{
  products:any
constructor(private productService:ProductService){}
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe(res=>{
      this.products=res;
    })
  }
}
