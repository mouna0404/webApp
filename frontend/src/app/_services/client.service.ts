import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// .NET REST API URL
const apiUrl = "https://localhost:7104/api/clients";
@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<any>(apiUrl);

  }
}
