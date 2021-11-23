import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';

import { Batiment } from '../_models/Batiment.model';
import { BatimentService } from '../_services/batiment.service';
import { DialogService } from '../_services/dialog.service';
import { NotificationService } from '../_services/notification.service';
import { AddBatimentComponent } from './add-batiment/add-batiment.component';
import { EditBatimentComponent } from './edit-batiment/edit-batiment.component';

@Component({
  selector: 'app-batiments',
  templateUrl: './batiments.component.html',
  styleUrls: ['./batiments.component.css']
})
export class BatimentsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchKey!: string;
  listData = new MatTableDataSource<Batiment>();
  listAux: any[] = [];
  client!: Number;
  public displayedColumns: string[] = ['Id', 'Adresse', 'Ville', 'CodePostal', 'actions'];



  constructor(private batimentService: BatimentService, public dialog: MatDialog, private notificationService: NotificationService, private dialogService: DialogService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.client = Number(this.route.snapshot.paramMap.get('id'));
    this.batimentService.getAllByClient(this.client).subscribe(res => {

      if (res != null) this.listAux = res;
      this.listData.data = this.listAux;
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data: any, filter) => {

        return this.displayedColumns.some(ele => {
          return ele != 'actions' && String(data[ele]).toLowerCase().indexOf(filter) != -1;
        });
      };
    }
    );
  }
  onSearchClear() {
    this.searchKey = "";
    this.applyFilter();
  }
  applyFilter() {
    this.listData.filter = this.searchKey.trim().toLowerCase();
  }


  onCreate() {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = this.client;
    this.dialog.open(AddBatimentComponent, dialogConfig);

  }

  onEdit(data: Batiment) {

    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = "40%";
    dialogConfig.data = data;
    this.dialog.open(EditBatimentComponent, dialogConfig);
  }

  onDelete(id: Number) {
    this.dialogService.openConfirmDialog('Êtes-vous sûr de supprimer ce bâtiment ?')
      .afterClosed().subscribe(res => {
        if (res) {
          this.batimentService.remove(id).subscribe(res => {
            window.location.reload();
            this.notificationService.warn('! Supprimé avec succès');
          })

        }
      });

  }


}
