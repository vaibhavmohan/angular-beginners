import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent  {
  contact_method = [
    {id:"1",value:"email"},
    {id:"2",value:"phone"}
  ];
  log(firstname:object):void{
      console.log(firstname);
  }
  onSubmit(f){
    console.log("Form value",f.value);
  }

}
