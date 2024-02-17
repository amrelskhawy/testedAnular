import { Component, OnInit } from '@angular/core';
import { ApisService } from "./services/apis.service";
import API from "./type.interface";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'] // Change styleUrl to styleUrls
})
export class AppComponent implements OnInit {
  title = 'appnew'
  data: API[] = [];
  filteredData: any;


  // construct component
  constructor(private Api: ApisService) {}

  // On Intialized the Component and fetch the main data
  ngOnInit() {
    this.Api.getData().subscribe(res => {
      // I assigned it to data variable
      this.data = res as API[]; // Corrected type casting

      // then i make my filtered variable to make on it my functions and don't loss any data from the main api
      this.filteredData = this.data
    });
  }

  // I Received here the event from the input and filter it from filteredData
  filter(event: any) {
    this.filteredData = this.data.filter(el => el.title.toLowerCase().includes(event.toLowerCase()));
  }
}
