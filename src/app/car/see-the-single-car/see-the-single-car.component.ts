import { Component } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';
import { Router } from '@angular/router';
import { Cars } from '../Cars';

@Component({
  selector: 'app-see-the-single-car',
  templateUrl: './see-the-single-car.component.html',
  styleUrls: ['./see-the-single-car.component.css']
})
export class SeeTheSingleCarComponent {
   constructor(private carService:CarsServiceService,private router:Router){

   }
   carToSee!:number
   carObj!:Cars
   localView(){
      this.carService.seeTheSingleCar(this.carToSee).subscribe(
        res=>{this.carObj=res,console.log(this.carObj,res)},
        err=>{console.log(err)}
      )
   }
}
