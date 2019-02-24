import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'skf-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  data1: Array<{supplier: string , orderDate: string ,deliveryDate : string ,description : String }> = [
    {
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    },{
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    },{
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    },{
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    },{
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    },{
      supplier: "Palak Keni",
      orderDate : "20/02/2019",
      deliveryDate : "24/02/2019",
      description : "some short description about the product and the quantity"
    }
    
  ];
}
