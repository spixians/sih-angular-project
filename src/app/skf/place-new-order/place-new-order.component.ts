import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
@Component({
  selector: 'skf-place-new-order',
  templateUrl: './place-new-order.component.html',
  styleUrls: ['./place-new-order.component.css']
})
export class PlaceNewOrderComponent implements OnInit {

  @ViewChild('f') placeorderform :NgForm; 

  constructor() { }


  user = {
    suppliername :'',
    commodity : '' ,
    quantity: 0,
    totalamount : 0,
  }

  submitted = false;

  ngOnInit() {

  }
  onSubmit(form : NgForm){
    // console.log(this.placeorderform);
    // return false;
    this.submitted=true;
    this.user.commodity = this.placeorderform.value.commodity;
    this.user.suppliername = this.placeorderform.value.suppliername;
    this.user.quantity = this.placeorderform.value.quantity;
    this.user.totalamount = this.placeorderform.value.totalamount;

    this.placeorderform.reset();
    //PLEASE WRITE POST FUNCTION HERE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  }
  checkSupplier(name : NgModel){

    // code to check for suppliers
    return false;
  }

}
