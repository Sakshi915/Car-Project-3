import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Cars } from './Cars';

@Injectable({
  providedIn: 'root'
})
export class CarsServiceService {

  constructor(private httpClient:HttpClient) { }
  baseUrl="http://localhost:8080/cars"
  seeAllCarss(){
    return this.httpClient.get<Cars[]>(this.baseUrl+"/seeAllCarss");
  }
  seeTheSingleCar(carToSee:number){
    return this.httpClient.get<Cars>(this.baseUrl+"/seeCar/"+carToSee);
  }
  createTheCar(carToAdd:Cars){
    return this.httpClient.post(this.baseUrl+"/create",carToAdd);
  }
  modifyCars(carToAdd:Cars){
    return this.httpClient.put(this.baseUrl+"/modify",carToAdd);
  }
  deleteCars(carToDelete:number){
    return this.httpClient.delete(this.baseUrl+"/delete/"+carToDelete);
  }

}
