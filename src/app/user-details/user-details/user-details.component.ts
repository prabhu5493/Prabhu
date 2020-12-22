import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userdetails=[];

  constructor(private http: HttpClient) { }

  ngOnInit() {
      this.http.get<any>('https://jsonplaceholder.typicode.com/users').subscribe(data => {
          this.userdetails = data;
      })        
  }

}
