import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientsComponent } from './clients/clients.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSliderModule } from '@angular/material/slider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';
import { DialogModule } from '@syncfusion/ej2-angular-popups';
import { RouterModule } from "@angular/router";
import { BatimentsComponent } from './batiments/batiments.component';
import { ConfimDialogComponent } from './confim-dialog/confim-dialog.component';
import { EditBatimentComponent } from './batiments/edit-batiment/edit-batiment.component';
import { AddBatimentComponent } from './batiments/add-batiment/add-batiment.component';


@NgModule({
  declarations: [
    AppComponent,
    ClientsComponent,
    BatimentsComponent,
    ConfimDialogComponent,
    EditBatimentComponent,
    AddBatimentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressBarModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,

    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,

    MatMenuModule,
    MatTreeModule,
    MatSliderModule,
    MatCheckboxModule,

    MatGridListModule,
    MatSnackBarModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatDividerModule,

    DialogModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [ConfimDialogComponent,
    EditBatimentComponent,
    AddBatimentComponent]
})
export class AppModule { }
