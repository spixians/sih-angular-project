import { Component, OnInit ,TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {
  ngOnInit() {
  }
   data: Array<{title: String , text: string ,image : string}> = [
    {
      title : "RAW MATERIAL SUPPLIER" , 
      text :"Some example text some example text. John Doe is an architect and engineer",
      image : "../assets/images/rawmaterial-login.jpeg" 
    },{
      title : "COMPONENT SUPPLIER" , 
      text :"Some example text some example text. John Doe is an architect and engineer",
      image : "../assets/images/component-login.jpeg" 
    },{
      title : "SKF LMT" , 
      text :"Some example text some example text. John Doe is an architect and engineer",
      image : "../assets/images/skf-login.jpeg" 
    }
    
  ];



  public modalRef: BsModalRef; // {1}
  constructor(private modalService: BsModalService) {} // {2}

  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template); // {3}
  }
  

}
