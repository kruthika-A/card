import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {InputTextModule} from 'primeng/inputtext';  
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoopcardComponent } from './loopcard/loopcard.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school/school.component';
import { CollegeComponent } from './college/college.component';
import { OfficeComponent } from './office/office.component';
import { SubmitComponent } from './submit/submit.component';
import { TableComponent } from './table/table.component';
import {PaginatorModule} from 'primeng/paginator';
import {ConfirmDialogModule} from 'primeng/confirmdialog';
import {ConfirmationService} from 'primeng/api';
// import { ConfirmodelComponent } from './confirmodel/confirmodel.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    LoopcardComponent,
    RegisterComponent,
    SchoolComponent,
    CollegeComponent,
    OfficeComponent,
    SubmitComponent,
    TableComponent,
    // ConfirmodelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    TableModule,
    ConfirmDialogModule,
    // ConfirmationService
    // FormBuilder

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
