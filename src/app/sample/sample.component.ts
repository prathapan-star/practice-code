import { Component } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss'
})
export class SampleComponent {
  firstName!: string;
  lastName!: string;

  submitForm() {
    console.log('Form submitted:', this.firstName, this.lastName);
    // Implement further logic here
  }
}
