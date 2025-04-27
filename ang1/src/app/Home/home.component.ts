import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent {
  users: User[] = [
    { name: 'Alice Johnson', age: 28, gender: 'Female', salary: 55000 },
    { name: 'Brian Smith', age: 35, gender: 'Male', salary: 68000 },
    { name: 'Carmen Lee', age: 42, gender: 'Female', salary: 72000 },
    { name: 'David Kim', age: 30, gender: 'Male', salary: 61000 },
    { name: 'Elena Martinez', age: 26, gender: 'Female', salary: 53000 },
    { name: 'Frank Zhao', age: 38, gender: 'Male', salary: 75000 }
  ];
}

 interface User {
  name: string;
  age: number;
  gender: 'Male' | 'Female' | 'Other';
  salary: number;
}