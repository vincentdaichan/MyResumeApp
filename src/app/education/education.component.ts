import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
    educations = [
        {
            degree: "Ph.D.",
            institute: "Madawalabu University",
            subject: "Software Engineering & Human Computer Interaction",
            start: "Sep 2015",
            end: "Apr 2019",
        },
        {
            degree: "M.Sc.",
            institute: "Madawalabu University",
            subject: "Software Engineering",
            start: "Sep 2013",
            end: "Apr 2015",
        },
        {
            degree: "B.Sc.",
            institute: "Madawalabu University",
            subject: "Computer Science",
            start: "Sep 2009",
            end: "Apr 2013",
        }


    ]


  constructor() { }

  ngOnInit() {
  }

}
