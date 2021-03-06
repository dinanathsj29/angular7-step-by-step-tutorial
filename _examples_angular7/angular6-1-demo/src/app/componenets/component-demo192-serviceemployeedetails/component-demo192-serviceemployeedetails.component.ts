import { Component, OnInit } from '@angular/core';

// 3.1. import service in necessary component files - Declared as dependency
import { EmployeeService } from '../../services/employee.service';

@Component({
  selector: 'app-component-demo192-serviceemployeedetails',
  templateUrl: './component-demo192-serviceemployeedetails.component.html',
  styleUrls: ['./component-demo192-serviceemployeedetails.component.css']
})
export class ComponentDemo192ServiceemployeedetailsComponent implements OnInit {
  // 3.3. define an empty local employeess array which will hold employees data after service all
  public employees = [];

  // 3.2. refer to service with local variable as dependency in constructor
  constructor(private employeeService : EmployeeService) { }

  ngOnInit() {
    // 3.4. on component initialization get values from service method
    this.employees = this.employeeService.getEmployees();
  }

}
