import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  // 1.1. create a new method which holds employee data
  getEmployees() {
    return [
      { 'id': 1, 'name': 'Amitabh', 'age': 75, 'city': 'Alahabad' },
      { 'id': 2, 'name': 'Akshay', 'age': 55, 'city': 'Delhi' },
      { 'id': 3, 'name': 'RajaniKanth', 'age': 73, 'city': 'Chennai' },
      { 'id': 4, 'name': 'Rajesh Khanna', 'age': 85, 'city': 'Kolkatta' }
    ]
  }

  constructor() { }

}
