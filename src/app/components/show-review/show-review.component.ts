import { Component, OnInit, ElementRef, ClassProvider } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';
import { ReviewService } from '../../services/review.service';
import { CompanyService } from '../../services/company.service';

@Component({
  selector: 'app-show-review',
  templateUrl: './show-review.component.html',
  styleUrls: ['./show-review.component.css']
})
export class ShowReviewComponent implements OnInit {
  user:any;
  reResult:object[];
  reviewresult:object[];
  cresult:object[];
  htmlToAdd:any;
  assignedUser:any;  
  title:any;  

  constructor(    
    private userService: UserService,
    private authService: AuthService,    
    private revService: ReviewService,
    private cmpService: CompanyService,
    private elementRef: ElementRef    
  ) { }

  showReview(){
    this.user=this.authService.currentUser._id;    
    this.userService.getUser(this.user)
    .subscribe(
      data => {
        this.reResult=data.json();        
      }      
    );    
  }
  
  showDetailReview(){
    var cmpId=[];  
    var cmpName=[];
    var len, i, cn;
    var rateHtml = document.getElementsByClassName('add-rating')[0].outerHTML;    
    console.log(rateHtml)
    this.user=this.authService.currentUser._id;         
    this.userService.userAllReview()    
    .subscribe(data => {
      this.reviewresult=data.json();      
      var htmlResult="";
      var cmpResult="";
      var starValue="";
      for(let i in this.reviewresult){                    
        if(this.user == this.reviewresult[i]['assignedUser']){
          var ratingNum = this.reviewresult[i]['rate'];          
          switch(ratingNum){
            case 1:
            starValue="star-rating-1";
            break;
            case 1.5:
            starValue="star-rating-1half";
            break;
            case 2:
            starValue="star-rating-2";
            break;
            case 2.5:
            starValue="star-rating-2half";
            break;
            case 3:
            starValue="star-rating-3";
            break;
            case 3.5:
            starValue="star-rating-3half";            
            break;            
            case 4:
            starValue="star-rating-4";
            break;
            case 4.5:
            starValue="star-rating-4half";
            break;
            default:
            starValue="star-rating-5";            
          }                   
          cmpId.push(this.reviewresult[i]['assignedCompany']);                      
          htmlResult+="<div class='card'><div class='reviewComp'>Review of <a class='reviewForComp'></a></div>";
          htmlResult+="<div><div class='star-review "+ starValue +"'><span>"+ this.reviewresult[i]['rate'] +"</span></div><div class='reviewTitle'>"+ this.reviewresult[i]['title'] +"</div><div class='reviewText'>"+ this.reviewresult[i]['review'] +"</div></div>";
          htmlResult+="</div>";          
        }    
            
      }                
      this.cmpService.getAllCompany()
        .subscribe(
          data =>{
            this.cresult= data.json();            
            for(let c in this.cresult){              
              for(let m in cmpId){                
                if(this.cresult[c]['_id'] == cmpId[m]){                  
                  cmpResult= this.cresult[c]['companyName'];                  
                  cmpName[m] = cmpResult;
                  var t1 = this.elementRef.nativeElement.querySelector('.card-area');
                  var divs = t1.querySelectorAll(".reviewForComp");
                  for(var i = 0; i < divs.length; i++){                    
                    divs[i].innerHTML = cmpName[i];
                 }
                }                
              }
            }
          }
        );
        var d1 = this.elementRef.nativeElement.querySelector('.card-area');
        d1.insertAdjacentHTML('beforeend', htmlResult);    
        var rateText = this.elementRef.nativeElement.querySelectorAll('.card .star-review');
        console.log(rateText.length);
        for(var r=0;r<rateText.length;r++){
          rateText[r].insertAdjacentHTML('beforeend', rateHtml);    
        }
      }
    );        
  } 

  ngOnInit() {
    this.showReview();
    this.showDetailReview();    
  }
}
