import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {
  // All variables will be created here.
  courseName: string = "Angular JS Course";
  inputLength: number = 5;
  myInputType: string = "checkbox";

  showMessage() {
    alert("Welcome to Angular Course")
  }

  showSelection(event: any){
    const state = event.target?.value
    alert("Selected State is : " + state);
  }

  showFramework(framework:string){
    alert(framework)
  }

}
