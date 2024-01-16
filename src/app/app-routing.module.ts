import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeeTheAllCarsComponent } from './car/see-the-all-cars/see-the-all-cars.component';
import { SeeTheSingleCarComponent } from './car/see-the-single-car/see-the-single-car.component';
import { CreateTheCarComponent } from './car/create-the-car/create-the-car.component';
import { ModifyTheCarComponent } from './car/modify-the-car/modify-the-car.component';
import { DeleteTheCarComponent } from './car/delete-the-car/delete-the-car.component';

const routes: Routes = [
  {path:"",component:SeeTheAllCarsComponent},
  {path:"seeAllCarss",component:SeeTheAllCarsComponent},
  {path:"seeCar",component:SeeTheSingleCarComponent},
  {path:"create",component:CreateTheCarComponent},
  {path:"modify",component:ModifyTheCarComponent},
  {path:"delete",component:DeleteTheCarComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
