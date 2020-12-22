import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {

    this.loginform = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
  });
  }
  get f() { return this.loginform.controls; }
  
  onLogin() {
    this.submitted = true;

    if (this.loginform.invalid) {
        return;
    }

    alert('Login Sucessfull..!! \n\n' + JSON.stringify(this.loginform.value));
}
onReset() {
  this.submitted = false;
  this.loginform.reset();
}

}
