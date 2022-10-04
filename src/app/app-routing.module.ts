import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CollegeComponent } from './college/college.component';
import { LoopcardComponent } from './loopcard/loopcard.component';
import { OfficeComponent } from './office/office.component';
import { RegisterComponent } from './register/register.component';
import { SchoolComponent } from './school/school.component';
import { SubmitComponent } from './submit/submit.component';

const routes: Routes = [
  // {
  //   path:'',      //wildcard routing
  //   redirectTo:'form',     
  //   pathMatch:'full'
  // },
  // {
  //   path:'form',
  //   component:LoopcardComponent,
   
   
  // },
  // {
  //   path:'form/register',
  //   component:RegisterComponent

  // }


// Routing for the 5 pages registration Details

  {
    path:'register',
    component:RegisterComponent,
  },
  {
    path:'school',
    component:SchoolComponent,
  },
  {
  path:'college',
  component:CollegeComponent,
  },
  {
    path:'office',
    component:OfficeComponent,
  },
  {
    path:'',      //wildcard routing
    redirectTo:'register',     
    pathMatch:'full'
  },

 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
