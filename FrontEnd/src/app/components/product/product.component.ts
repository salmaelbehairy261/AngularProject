import { DetailsComponent } from './../details/details.component';
import { Component, Input } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
@Input('product') product :any;
detailsDialog:any
constructor(private dialogModel: MatDialog) { }
ngOnInit() {
}
dialog(id:any) {
this.detailsDialog = this.dialogModel.open(DetailsComponent,{
  data:id
});
}

}
