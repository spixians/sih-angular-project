import { Component, OnInit, ViewChild,  } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-place-new-order',
  templateUrl: './place-new-order.component.html',
  styleUrls: ['./place-new-order.component.css']
})
export class PlaceNewOrderComponent implements OnInit {

  @ViewChild('f') placeorderform :NgForm; 

  constructor() { }

  ngOnInit() {

  }
  onSubmit(form : NgForm){
    console.log(this.placeorderform);
    // return false;
  }
  checkSupplier(name : NgModel){

    // code to check for suppliers
    return false;
  }

}
