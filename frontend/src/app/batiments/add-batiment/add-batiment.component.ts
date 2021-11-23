import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Batiment } from 'src/app/_models/Batiment.model';
import { Client } from 'src/app/_models/Client.model';
import { BatimentService } from 'src/app/_services/batiment.service';
import { NotificationService } from 'src/app/_services/notification.service';

@Component({
  selector: 'app-add-batiment',
  templateUrl: './add-batiment.component.html',
  styleUrls: ['./add-batiment.component.css']
})
export class AddBatimentComponent implements OnInit {


  FormBatiment: FormGroup = new FormGroup({
    Adresse: new FormControl('', [Validators.maxLength(50), Validators.required]),
    Ville: new FormControl('', Validators.maxLength(20)),
    CodePostal: new FormControl('', Validators.pattern("[0-9]{4}"))
  });

  constructor(private batimentService: BatimentService, public dialogRef: MatDialogRef<AddBatimentComponent>, private notificationService: NotificationService, @Inject(MAT_DIALOG_DATA) public clientID: Number) { }

  ngOnInit(): void {

  }
  onClear() {
    this.FormBatiment.reset();
  }
  onSubmit() {

    if (this.FormBatiment.valid) {

      var newBatiment: any = {};

      newBatiment.Adresse = this.FormBatiment.get("Adresse")?.value;
      newBatiment.Ville = this.FormBatiment.get("Ville")?.value;
      newBatiment.CodePostal = this.FormBatiment.get("CodePostal")?.value;
      newBatiment.Client = { id: this.clientID };



      this.batimentService.add(newBatiment).subscribe(
        res => {
          console.log("okkkkkk");
          window.location.reload();
          this.notificationService.success('Ajout a été effectué avec succés');
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
