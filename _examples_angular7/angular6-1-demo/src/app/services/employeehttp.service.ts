import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IEmployee } from '../models/iemployee';

@Injectable({
  providedIn: 'root'
})
export class EmployeehttpService {
  // 2c. create json data file
  private jsonUrl:string= "/assets/data/employees.json";

  // 21 2a. create local variable for HttpClient as DI
  constructor(private httpClient: HttpClient) { }

  // 21 2b. http get
  getEmployees(): Observable<IEmployee[]> {
    return this.httpClient.get<IEmployee[]>(this.jsonUrl);
  }
  
}
