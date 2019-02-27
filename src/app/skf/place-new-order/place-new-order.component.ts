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
    // suppliername :'',
    // commodity : '' ,
    // quantity: 0,
    // totalamount : 0,

     $class: '',
    orderId: '',
    Qty: 0,
    unitPrice: 0,
    totalPrice: 0,
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
     this.user.$class = "org.example.trading.PO2";
    this.user.orderId = this.placeorderform.value.orderId;
    this.user.Qty = this.placeorderform.value.Qty;
    this.user.unitPrice = this.placeorderform.value.unitPrice;
    this.user.totalPrice = this.placeorderform.value.totalPrice;
    this.user.owner = "resource:org.example.trading.SKF#3";


    var opost=new Comments()
    
       
     opost.$class = "org.example.trading.PO2";
    opost.orderId = this.user.orderId
    opost.Qty = this.user.Qty;
    opost.unitPrice = this.user.unitPrice
    opost.totalPrice = this.user.totalPrice 
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





















