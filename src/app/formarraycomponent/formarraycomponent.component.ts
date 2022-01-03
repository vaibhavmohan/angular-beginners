import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formarraycomponent',
  templateUrl: './formarraycomponent.component.html',
  styleUrls: ['./formarraycomponent.component.css']
})
export class FormarraycomponentComponent  {
  form = new FormGroup({
    topic : new FormArray([])
  });

  // addtopic(topic: HTMLFormElement){
  //   (this.form.get('topic') as FormArray).push(topic.value); 
  // }
  
  addtopic(event){
    this.topics.push(new FormControl(event.target.value));
    // console.log(this.form.get('topic').value);
  }

  RemoveTopic(index){
    this.topics.removeAt(index);
  }

  get topics(){
    return (this.form.get('topic') as FormArray)
  }
  
}
