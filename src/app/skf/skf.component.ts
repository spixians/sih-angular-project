import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skf',
  templateUrl: './skf.component.html',
  styleUrls: ['./skf.component.css']
})
export class SkfComponent implements OnInit {


  private _opened: boolean = true;
  private _docked : boolean = true; 

  constructor() { }

  ngOnInit() {
  }

}
