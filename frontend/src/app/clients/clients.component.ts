import { Component, OnInit, ViewChild } from '@angular/core';
import { Client } from '../_models/Client.model';
import { ClientService } from '../_services/client.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  searchKey!: string;
  listData = new MatTableDataSource<any>();
  listAux: any[] = [];
  public displayedColumns: string[] = ['Id', 'RaisonSociale', 'Tel', 'Email', 'actions'];



  constructor(private ClientService: ClientService, private router: Router) { }

  ngOnInit(): void {
    this.ClientService.getAll().subscribe(res => {

      if (res != null) this.listAux = res;
      this.listData.data = this.listAux;
      this.listData.sort = this.sort;
      this.listData.paginator = this.paginator;
      this.listData.filterPredicate = (data, filter) => {

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
  onManage(ClientID: Number) {
    this.router.navigateByUrl('/gestionBatiments/' + ClientID);

  }

}



