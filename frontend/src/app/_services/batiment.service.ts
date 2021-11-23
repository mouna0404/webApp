import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Batiment } from '../_models/Batiment.model';

// .NET REST API URL
const apiUrl = "https://localhost:7104/api/batiments";
@Injectable({
  providedIn: 'root'
})
export class BatimentService {

  constructor(private http: HttpClient) { }

  getAllByClient(ClientID: Number) {
    return this.http.get<any>(apiUrl + "/" + ClientID);

  }

  add(NewAgence: any) {

    return this.http.post<Batiment>(apiUrl, NewAgence);
  }

  edit(updatedBatiment: Batiment) {
    console.log("from batiment service")
    return this.http.put<any>(apiUrl, updatedBatiment);
  }

  remove(BatimentId: Number) {
    return this.http.delete(apiUrl + "/" + BatimentId);
  }


}
