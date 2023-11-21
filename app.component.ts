import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'day5-task-angular';

  customerValueName:any;
  customerValueUser:any;
  customerValuePhone:any;
  customerNumber=1;
  customers: any[]=[
  ]



  addCustomer(){
    this.customers.push({number:this.customerNumber++,name:this.customerValueName,
      username:this.customerValueUser,
      phone:this.customerValuePhone})
    console.log(this.customers)
    console.log(this.customerNumber)
  }
}
