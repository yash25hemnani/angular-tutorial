import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-controlflow',
  imports: [FormsModule],
  templateUrl: './controlflow.component.html',
  styleUrl: './controlflow.component.css'
})
export class ControlflowComponent {
  isDivVisible:boolean = false;

  showDiv(isShow: boolean){
    this.isDivVisible = isShow;
  }

  div2Visible:string = "No";

  showDiv2(show:string){
    this.div2Visible = show;
  }

  div3Visible:string = 'no';
  
  showDiv3(show:string){
    this.div3Visible = show;
  }

  dayOfTheWeek:string = 'sun';
  
  changeWeekDay(day:string){
    this.dayOfTheWeek = day;
  }

  cityName: string[] = ['Pune', 'Jaipur', 'Ramgadh']

  studentDetails: any[] = [
    {name: "AAA", mobile: "123456789", isActive: true},
    {name: "BBB", mobile: "234567891", isActive: false},
    {name: "CCC", mobile: "123456789", isActive: true},
    {name: "DDD", mobile: "238476458", isActive: false},
  ]
}


