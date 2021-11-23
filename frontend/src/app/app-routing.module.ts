import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BatimentsComponent } from './batiments/batiments.component';
import { ClientsComponent } from './clients/clients.component';

const routes: Routes = [{ path: '', component: ClientsComponent, }, {
  path: 'Clients', component: ClientsComponent
}, {
  path: 'gestionBatiments/:id', component: BatimentsComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
