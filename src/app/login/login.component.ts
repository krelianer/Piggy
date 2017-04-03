import { LoginService } from './../service/login/login.service';
import { UserCredentials } from '../models/userCredentials';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ButtonModule } from 'primeng/primeng';
import { InputTextModule } from 'primeng/primeng';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  viewProviders: [LoginService]
})
export class LoginComponent implements OnInit {

  usercredentials = new UserCredentials();
  userForm: FormGroup;
  usernameCtrl: FormControl;
  passwordCtrl: FormControl

  constructor(fb: FormBuilder, private loginService: LoginService) {
    this.usernameCtrl = fb.control('', [Validators.required, Validators.minLength(3)]);
    this.passwordCtrl = fb.control('', Validators.required);

    this.userForm = fb.group({
      username: this.usernameCtrl,
      password: this.passwordCtrl
    });
  }

  ngOnInit() {
  }

  connect() {
    console.log(this.userForm.value);
  }
}
