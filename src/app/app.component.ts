import { Component } from '@angular/core';
import {FireholService} from "./firehol.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  allIps:any = [];

  constructor(private fireholService:FireholService) {

    this.fireholService.getAllIps().subscribe(allIps => {
      this.allIps = allIps;
    });
  }

  getAllIps () {
    this.fireholService.getAllIps().subscribe(allIps => {
      this.allIps = allIps;
    });
  }
}
