import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsernameValidators } from '../custom-validators/username.validators';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent implements OnInit {
  form = new FormGroup(
  {
    accounts : new FormGroup({
      username: new FormControl('',
        [
          Validators.required,
          Validators.minLength(3),
          UsernameValidators.cannotContainSpace
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('',Validators.required)
    })
  });

  constructor() { }

  ngOnInit(): void {
  }

  get username(){
    return this.form.get('accounts.username');
  }

  login(){
    this.form.setErrors({
       "authenticationFailed":true 
    });
  }
}
