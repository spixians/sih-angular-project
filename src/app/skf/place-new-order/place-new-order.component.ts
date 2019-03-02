import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { freeApiService } from '../../services/freeapi.services';
import {Comments} from '../../classes/comments';
@Component({
  selector: 'skf-place-new-order',
  templateUrl: './place-new-order.component.html',
  styleUrls: ['./place-new-order.component.css']
})
export class PlaceNewOrderComponent implements OnInit {

  @ViewChild('f') placeorderform :NgForm; 

  constructor(private _freeApiService: freeApiService){

  }

  user = {
    

     $class: '',
    orderId: '',
    Qty: 0,
    time_of_issue: '',
    owner: '',




  }

  submitted = false;
  lstcomments:Comments[];
  lstPosts:Comments[];
 objPosts:Comments[];
  
  ngOnInit() {
  

  }
  onSubmit(form : NgForm){
    // console.log(this.placeorderform);
    // return false;
    this.submitted=true;
     this.user.$class = "org.example.trading.place_skf_compsupplier";
    this.user.orderId = this.placeorderform.value.orderId;
    this.user.Qty = this.placeorderform.value.Qty;
    this.user.time_of_issue = this.placeorderform.value.time_of_issue;
    this.user.owner = "resource:org.example.trading.SKF#3";


    var opost=new Comments()
    
       
     opost.$class = "org.example.trading.place_skf_compsupplier";
    opost.orderId = this.user.orderId
    opost.Qty = this.user.Qty;
    opost.time_of_issue = this.user.time_of_issue
    opost.owner = "resource:org.example.trading.SKF#3";
  
    this._freeApiService.post(opost)
    .subscribe
      (
        data=>
        {
            this .objPosts=data;
        }
        
        )


console.log(opost);
    this.placeorderform.reset();
    //PLEASE WRITE POST FUNCTION HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


    
        


    
  }

 
 
 
 
 
 
 
 
 
 
 
  checkSupplier(name : NgModel){

    // code to check for suppliers
    return false;
  }

}





















