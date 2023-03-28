import { cartItem } from './../../models/cart';
import { CartService } from './../../services/cart.service';
import { HtmlTagDefinition } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material/dialog';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  product:any;
  colors:[]=[];
  color:any;
  item:any;
  isFounded:any;
  counter:any
  constructor(public dialogRef: MatDialogRef<DetailsComponent>,@Inject(MAT_DIALOG_DATA) public data: any,private productService:ProductService,private cartService:CartService) { }
  ngOnInit(): void {
    this.productService.getProductById(this.data).subscribe(res=>{
      this.product=res;
    })

  }
  close(): void {
  this.dialogRef.close();
  }
  element:any
  selectColor(e:any,color:any){
    this.colors=e.target.parentElement.children;
    for(let i=0;i<this.colors.length;i++){
      this.element=this.colors[i]
      if(this.element.classList.contains('selected')){
        this.element.classList.remove('selected')
      }
    };
    e.target.classList.add("selected");
    this.color=color;
  }
  addToCart(){
    if(this.product.colors.length==1){
      this.color=this.product.colors[0]
    }
    if(!this.color)
    alert("Please Select Color !");
    else{
      this.item={_id:this.product._id,
                  title:this.product.title,
                  image:this.product.image,
                  price:this.product.price,
                  quantity:1,
                  color:this.color
                }
      this.isFounded=this.cartService.addToCart(this.item);
      this.close();
      this.isFounded?alert("Product Is Already Exist !"):alert("Product Is Added Successfully !")
    }

  }
}
