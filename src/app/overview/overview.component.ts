import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.css']
})
export class OverviewComponent implements OnInit {

overview = {
    name: "Eirena McLelland",
    address: "6261 Fair Oaks Place",
    city: "Lincoln",
    email: "eirenamclelland@jigsy.com"

}

objective = "To pursue a sucessful career in teaching and academic research through commitment and diligence with an oppurtunity to work with people in an environment of exellence and passion.";
  constructor() { }

  ngOnInit() {
  }

}
