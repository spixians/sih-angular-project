import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

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
