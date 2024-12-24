import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-get-api',
  imports: [],
  templateUrl: './get-api.component.html',
  styleUrl: './get-api.component.css'
})
export class GetAPIComponent {
  // First we will need to create an object of the HTTPClient
  constructor(private http: HttpClient){
    
  }

  userList : any[] = [];
  
  // Now using this private variable, we will make a get request.
  getUsers(){
    this.http.get("https://jsonplaceholder.typicode.com/users").subscribe((result:any) => {
      this.userList = result;
    })
  }
  
  employeeList : any[] = [];
  
  getEmployees(){
    this.http.get("https://projectapi.gerasim.in/api/EmployeeManagement/GetAllEmployees").subscribe((result:any) => {
      this.employeeList = result;
    })
  }


}

