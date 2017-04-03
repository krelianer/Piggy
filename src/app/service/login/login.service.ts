import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class LoginService {

  private loginUrl: string;

  constructor(private http: Http) {
    this.http.get('http://localhost:8080/discover').map(res => res.json()).subscribe(data => {
      this.loginUrl = data._links.login.href;
      console.log(this.loginUrl);
    });
  }

  login() {
    return this.http.get('http://localhost:8080/discover');
  }

}