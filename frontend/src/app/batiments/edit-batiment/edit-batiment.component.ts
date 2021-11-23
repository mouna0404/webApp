import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { BatimentService } from 'src/app/_services/batiment.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-edit-batiment',
  templateUrl: './edit-batiment.component.html',
  styleUrls: ['./edit-batiment.component.css']
})
export class EditBatimentComponent implements OnInit {

  FormBatiment: FormGroup;

  constructor(public dialogRef: MatDialogRef<EditBatimentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, public batimentService: BatimentService, private notificationService: NotificationService) {


    console.log("data:::::::::", this.data);
    this.FormBatiment = new FormGroup({
      Adresse: new FormControl(this.data.Adresse, [Validators.maxLength(50), Validators.required]),
      Ville: new FormControl(this.data.Ville, Validators.maxLength(20)),
      CodePostal: new FormControl(this.data.CodePostal, Validators.pattern("[0-9]{4}"))
    });


  }



  ngOnInit(): void {
  }



  onSubmit() {

    if (this.FormBatiment.valid) {
      var updatedBatiment: any;
      updatedBatiment = this.FormBatiment.value;

      updatedBatiment.Id = this.data.Id;
      updatedBatiment.Client = { Id: this.data.Client };
      console.log("from edit dialog----" + JSON.stringify(updatedBatiment));
      this.batimentService.edit(updatedBatiment).subscribe(data => {
        window.location.reload();
        this.notificationService.success('Modification a été effectué avec succés');
        this.onClose();

      }
      );
    }
  }




  onClose() {
    this.FormBatiment.reset();
    this.dialogRef.close();
  }



}
