import { Component, OnInit } from '@angular/core';

// import service
import { EmployeehttpService } from '../../services/employeehttp.service';

@Component({
  selector: 'app-component-demo212-httpemployee-details',
  templateUrl: './component-demo212-httpemployee-details.component.html',
  styleUrls: ['./component-demo212-httpemployee-details.component.css']
})
export class ComponentDemo212HttpemployeeDetailsComponent implements OnInit {
  public employees = [];

  // refer to service with local variable
  constructor(private employeehttpService: EmployeehttpService) { }

  ngOnInit() {
    // on component initialization get value from http subscribe
    // data =>: argument of the function
    // this.employees = data: body of the function
    // subscribe: to receive data
    this.employeehttpService.getEmployees().subscribe(data => this.employees = data)
  }

}
