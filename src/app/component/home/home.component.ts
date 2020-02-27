import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  bannerRes:any
  whyChooseRes:any 

  constructor(
    private route: ActivatedRoute,
		private common: CommonService,
  ) { }

  ngOnInit(): void {
    this.getBanner()
  }

  getBanner(){
    this.common.getBanner().subscribe(
      res => {
        if (res['status'] == true) {
          this.bannerRes = res['data'][0]
          //console.log(this.bannerRes)
        }
      }, err => {
        console.log("=======err=======>", err);
      }
    )
  }

  getWhyChoose(){
    this.common.getWhyChoose().subscribe(
      res => {
        if (res['status'] == true) {
          this.whyChooseRes = res['data']
          console.log(res)
        }
      }, err => {
        console.log("=======err=======>", err);
      }
    )
  }

}
