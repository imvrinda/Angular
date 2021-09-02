import { Component } from '@angular/core';
import { TestService } from './test.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = "";
  constructor(private user: TestService) {
    console.warn(this.user.data())
    let info = this.user.data();
    this.name = info.name;
  }
}
