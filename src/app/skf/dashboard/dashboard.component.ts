import { Component, OnInit } from '@angular/core';
import { freeApiService } from '../../services/freeapi.services';
import {Comments} from '../../classes/comments';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
   data1: Comments ;



  constructor(private _freeApiService: freeApiService,
    private Comments :Comments
    ){
    // console.log('hi')
    this._freeApiService.getcomments()
    .subscribe
    (
      data=>
      {
             this.data1 = data;
            //  console.log(data)
      
            }
    );

  }
 


  ngOnInit() {
   

    // get api logic and console.log
  }
  

}











