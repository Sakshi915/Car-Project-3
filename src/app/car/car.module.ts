import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTheCarComponent } from './create-the-car/create-the-car.component';
import { ModifyTheCarComponent } from './modify-the-car/modify-the-car.component';
import { SeeTheSingleCarComponent } from './see-the-single-car/see-the-single-car.component';
import { SeeTheAllCarsComponent } from './see-the-all-cars/see-the-all-cars.component';
import { DeleteTheCarComponent } from './delete-the-car/delete-the-car.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CreateTheCarComponent,
    ModifyTheCarComponent,
    SeeTheSingleCarComponent,
    SeeTheAllCarsComponent,
    DeleteTheCarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    CreateTheCarComponent,
    ModifyTheCarComponent,
    SeeTheSingleCarComponent,
    SeeTheAllCarsComponent,
    DeleteTheCarComponent
  ]
})
export class CarModule { }
