import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, UrlSegment } from '@angular/router';
import { CommonService } from '../../service/common.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  bannerRes:any

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

}
