import { CategoryService } from './../../services/category.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products:any;
  categories:any;
  catElements:any;
  page: number = 1;
  constructor(private productService:ProductService,private categoryService:CategoryService){}
  term=''
  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((res)=>{
      this.products=res
    })
    this.categoryService.getAllCategories().subscribe((res)=>{
      this.categories=res
    })
  }
  filterCategory(e:any,id:Number):void{
    this.productService.getProductsByCategory(id).subscribe(res=>{
      this.products=res
    })
    this.catElements=e.target.parentElement.parentElement.getElementsByClassName("caTxt");
    for(let i=0;i<this.catElements.length;i++){
      if(this.catElements[i].classList.contains("active")){
        this.catElements[i].classList.remove("active")
      }
    }
    e.target.classList.add("active")
  }
  allProducts(e:any){
    this.productService.getAllProducts().subscribe((res)=>{
      this.products=res
    })
    this.catElements=e.target.parentElement.parentElement.getElementsByClassName("caTxt");
    for(let i=0;i<this.catElements.length;i++){
      if(this.catElements[i].classList.contains("active")){
        this.catElements[i].classList.remove("active")
      }
    }
    e.target.classList.add("active")
  }
  onPageDataChange(event: any) {
    this.page = event;
  }
}
