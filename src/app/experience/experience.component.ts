import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {

    experiences = [
        {
            position: "Software Engineer",
            institute: "Jabbercube",
            address: "6 John Wall Point",
            start: "June 2019",
            end: ""
        },
        {
            position: "Software Engineer",
            institute: "Twimm",
            address: "37487 Steensland Crossing",
            start: "Feb 2018",
            end: "May 2019"
        },
        {
            position: "Software Engineer",
            institute: "Snaptags",
            address: "3686 Sommers Park",
            start: "May 2017",
            end: "Jan 2018"
        }

    ]
  constructor() { }

  ngOnInit() {
  }

}
