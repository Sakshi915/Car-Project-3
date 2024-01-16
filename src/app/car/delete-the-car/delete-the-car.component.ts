import { Component } from '@angular/core';
import { CarsServiceService } from '../cars-service.service';
import { Router } from '@angular/router';
import { Cars } from '../Cars';

@Component({
  selector: 'app-delete-the-car',
  templateUrl: './delete-the-car.component.html',
  styleUrls: ['./delete-the-car.component.css']
})
export class DeleteTheCarComponent {
  constructor(private carService:CarsServiceService,private router:Router){

  }
  carToDelete!:number
  localView(){
     this.carService.deleteCars(this.carToDelete).subscribe(
         res=>{console.log(res)},
         err=>{console.log(err)}
     )
     alert("car deleted successfully");
     this.router.navigate(["/seeAllCarss"]);

  }
}
