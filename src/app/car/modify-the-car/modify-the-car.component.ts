import { Component } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';
import { Router } from '@angular/router';
import { Cars } from '../Cars';

@Component({
  selector: 'app-modify-the-car',
  templateUrl: './modify-the-car.component.html',
  styleUrls: ['./modify-the-car.component.css']
})
export class ModifyTheCarComponent {
  constructor(private carService:CarsServiceService,private router:Router){

  }
  carToAdd= new Cars
  localView(){
     this.carService.modifyCars(this.carToAdd).subscribe(
         res=>{console.log(res)},
         err=>{console.log(err)}
     )
     alert("car modified successfully");
     this.router.navigate(["/seeAllCarss"]);
     }
    }

