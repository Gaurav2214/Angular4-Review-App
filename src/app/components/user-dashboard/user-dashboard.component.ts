import { Component, OnInit  } from '@angular/core';
import { Router } from "@angular/router";

import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {

  user: any;
  results: Object[];
  count: any;  

  constructor(
    private userService: UserService,
    private authService: AuthService
  ) { }

  chartOptions = {
    responsive: true    // THIS WILL MAKE THE CHART RESPONSIVE (VISIBLE IN ANY DEVICE).
  }

  labels =  ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
 chartData = [
    {
      label: '1st Year',
      data: [21, 56, 4, 31, 45, 15, 57, 61, 9, 17, 24, 59] 
    },
    { 
      label: '2nd Year',
      data: [47, 9, 28, 54, 77, 51, 24]
    }
  ];

  colors = [
    { // 1st Year.
      backgroundColor: 'rgba(77,83,96,0.2)'
    },
    { // 2nd Year.
      backgroundColor: 'rgba(30, 169, 224, 0.8)'
    }
  ]

  onChartClick(event) {
    console.log(event);
  }

  userDetails(){
    this.user = this.authService.currentUser._id;
    //console.log(this.user);
    this.userService.getUser(this.user)
      .subscribe(
        data => {
          this.results = data.json();
        }
      );    
      //this.count = (this.user).length;
      //console.log(this.user);
      //console.log(this.count);
  }
  userReviewCount(){
    var i;
    var totalreview = 0;
    this.user = this.authService.currentUser._id;
    console.log(this.user);    
    this.userService.userAllReview()
    .subscribe(results => {
      this.count = results.json();
      console.log(this.count);
      var len = this.count.length;
      for(i =0; i<len;i++){
        console.log(this.count[i].assignedUser);     
        if(this.count[i].assignedUser == this.user){
          totalreview++;
        }        
      }
      console.log(totalreview);
    }); 
  }

  ngOnInit() {
    this.userDetails();   
    this.userReviewCount(); 
  }
}
