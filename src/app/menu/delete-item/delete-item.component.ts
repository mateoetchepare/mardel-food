import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MenuItem } from 'src/app/model/menu-item.interface';
import { DeleteItemService } from './delete-item.service';

@Component({
  selector: 'delete-item',
  templateUrl: `delete-item.component.html`,
})
export class DeleteItemComponent { 

  constructor(@Inject (MAT_DIALOG_DATA) protected menuItem: MenuItem, private service: DeleteItemService, 
  private dialogRef: MatDialogRef<DeleteItemComponent>) {

  }

  onDelete() {
    this.service.deleteItem(this.menuItem)
    .subscribe((res) => {
      this.dialogRef.close({data: res})
    });
  }
}
