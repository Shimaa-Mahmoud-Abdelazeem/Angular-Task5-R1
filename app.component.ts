import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5-task-angular';
  customers: any[]=[
    {name:"shimaa",
       username:"ddf",
        phone:"010000000"
      }
  ]

  addCustomer(){
    this.customers.push({name:this.customers[0], username:this.customers[1], phone:this.customers[2]})
  }
}
