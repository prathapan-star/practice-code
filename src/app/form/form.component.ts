import { Component } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  carName:string="";
  cars:string[]=[];

  addCar()  {
    this.cars.push(this.carName);
    this.carName="";
    console.log(this.cars);
  }
}
