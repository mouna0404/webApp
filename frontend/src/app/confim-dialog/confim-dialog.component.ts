import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-confim-dialog',
  templateUrl: './confim-dialog.component.html',
  styleUrls: ['./confim-dialog.component.css']
})
export class ConfimDialogComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ConfimDialogComponent>) { }

  ngOnInit(): void {
  }
  closeDialog() {
    this.dialogRef.close(false);
  }
}
