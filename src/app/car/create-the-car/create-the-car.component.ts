import { Component } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';
import { Cars } from '../Cars';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-the-car',
  templateUrl: './create-the-car.component.html',
  styleUrls: ['./create-the-car.component.css']
})
export class CreateTheCarComponent {
   constructor(private carService:CarsServiceService,private router:Router){

   }
   carToAdd= new Cars
   localView(){
      this.carService.createTheCar(this.carToAdd).subscribe(
          res=>{console.log(res)},
          err=>{console.log(err)}
      )
      alert("car created successfully");
      this.router.navigate(["/seeAllCarss"]);

   }
}
