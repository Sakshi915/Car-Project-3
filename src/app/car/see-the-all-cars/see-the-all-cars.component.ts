import { Component } from '@angular/core';
import { Cars } from '../Cars';
import { CarsServiceService } from '../cars-service.service';

@Component({
  selector: 'app-see-the-all-cars',
  templateUrl: './see-the-all-cars.component.html',
  styleUrls: ['./see-the-all-cars.component.css']
})
export class SeeTheAllCarsComponent {
  constructor(private carsService:CarsServiceService){

  }
    carsarr:Cars[]=[];
    localView(){
        this.carsService.seeAllCarss().subscribe(
          res=>{this.carsarr=res,console.log(this.carsarr,res)},
          err=>{console.log(err)}
        )

        
    }
}
