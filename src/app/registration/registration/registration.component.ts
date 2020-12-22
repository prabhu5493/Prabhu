import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required,Validators.pattern('[6-9]\\d{9}')]],
      gender: ['male', [Validators.required]],
      address: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', Validators.required],
  });
  }
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
    this.submitted = true;

    if (this.registerForm.invalid) {
        return;
    }

    alert('Sucessfully Registered..!! \n\n' + JSON.stringify(this.registerForm.value));
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
}
