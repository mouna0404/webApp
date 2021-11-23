import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConfimDialogComponent } from '../confim-dialog/confim-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(msg: string) {
    return this.dialog.open(ConfimDialogComponent, {
      width: '390px',
      panelClass: 'confirm-dialog-container',
      disableClose: true,

      data: {
        message: msg
      }
    });
  }
}
