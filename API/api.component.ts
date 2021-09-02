import { Component, OnInit } from '@angular/core';
import { UserdataService } from './userdata.service';

@Component({
  selector: 'api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent implements OnInit {


  ngOnInit(): void {
  }

  userData: any = [];
  constructor(private userdataService: UserdataService) {

    this.userdataService.getUserData().subscribe(data => {
      console.log(data);
      this.userData = data;

    })

  }

}



